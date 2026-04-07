import { calculateRecommendations, heroes, getMissingRoles, getDetailedMatchupWeights, type Hero } from './logic/scoringEngine';

export interface Env {
  GEMINI_API_KEY: string;
}

const getTacticalTags = (hero: Hero): string[] => {
  const tags: string[] = [];
  const text = (hero.name + " " + hero.skills.passive + " " + hero.skills.s1 + " " + hero.skills.s2 + " " + hero.skills.s3).toLowerCase();
  
  if (text.includes("làm choáng") || text.includes("hất tung") || text.includes("áp chế")) tags.push("Khống chế cứng");
  if (text.includes("làm chậm") || text.includes("câm lặng")) tags.push("Khống chế mềm");
  if (text.includes("sát thương chuẩn")) tags.push("Sát thương chuẩn");
  if (text.includes("hồi máu") || text.includes("hồi phục")) tags.push("Hồi phục");
  if (text.includes("lá chắn") || text.includes("giáp")) tags.push("Giáp/Khiên");
  if (text.includes("lướt") || text.includes("tốc chạy")) tags.push("Cơ động");
  if (text.includes("miễn khống") || text.includes("miễn thương")) tags.push("Miễn khống/thương");
  if (text.includes("xuyên giáp") || text.includes("máu tối đa")) tags.push("Diệt Tank");
  return tags;
};

const getCorsHeaders = (request: Request) => {
  const origin = request.headers.get("Origin") || "*";
  return {
    "Access-Control-Allow-Origin": origin,
    "Access-Control-Allow-Methods": "GET, HEAD, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
    "Access-Control-Max-Age": "86400",
  };
};

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const corsHeaders = getCorsHeaders(request);
    
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders,
      });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { 
        status: 405,
        headers: corsHeaders
      });
    }

    try {
      const { teamBlue, teamRed, banned, includeAI } = await request.json() as any;

      // 1. Calculate Recommendations (Full list)
      const allRecs = calculateRecommendations(teamBlue, teamRed, banned);
      const top6 = allRecs.slice(0, 6);
      const top24 = allRecs.slice(0, 24);
      const isFinal = teamBlue.length === 5 && teamRed.length === 5;
      const missingRoles = getMissingRoles(teamBlue);
      let aiResponseData: any = { recommendations: top6, aiAdvice: {}, isFinal };

      // 2. Call Gemma 3 if requested
      if (includeAI && env.GEMINI_API_KEY) {
        try {
          const allyInfo = teamBlue.map((id: string) => {
            const h = heroes.find(x => x.id === id);
            return h ? `${h.name} (${h.role.join('/')})` : id;
          }).join(', ');

          const enemyInfo = teamRed.map((id: string) => {
            const h = heroes.find(x => x.id === id);
            return h ? `${h.name} (${h.role.join('/')}) [Tags: ${getTacticalTags(h).join(', ')}]` : id;
          }).join(', ');
          let prompt = "";

          if (isFinal) {
            const weights = getDetailedMatchupWeights(teamBlue, teamRed);
                    prompt = `Bạn là một Chuyên gia phân tích dữ liệu Esports khách quan, chuyên sâu về Liên Quân Mobile.
                      TRẬN ĐẤU ĐÃ CHỐT ĐỘI HÌNH. Hãy cung cấp một bản phân tích Trận đấu (Match Forecast) trung lập và chính xác cao bằng Giao thức NWRP V2.

                      CÔNG THỨC NWRP V2 (Neural Win-Rate Protocol):
                      WinRate = (ΣPower_Base * 0.25) + (ΣMatchup_Diff * 0.35) + (ΣSynergy_Impact * 0.25) + (Meta_Balance * 0.15)
                      *Trong đó:*
                      - Power_Base: Dựa trên win_rate, pick_rate và stats cơ bản.
                      - Matchup_Diff: Dựa trên counter_advantage (đưa vào win_rate để chuẩn hóa).
                      - Synergy_Impact: Dựa trên sự bù đắp vai trò (missing roles) và synergy_impact.

                      CƠ SỞ DỮ LIỆU THỰC TẾ (Raw Parameters):
                      PHE BLUE (ALLY):
                      ${JSON.stringify(weights.blue, null, 2)}

                      PHE RED (ENEMY):
                      ${JSON.stringify(weights.red, null, 2)}

                      NHIỆM VỤ CỦA BẠN:
                      1. Thực hiện phép tính theo NWRP V2 dựa trên dữ liệu thô ở trên.
                      2. Đánh giá khách quan cán cân sức mạnh (Probability Balance %) cho phí Blue.
                      3. Viết Summary (tối đa 60 chữ) chỉ ra tham số nào ảnh hưởng nhất đến con số cuối cùng (Vd: "Tỷ lệ thắng cao hơn 5% nhờ chỉ số Counter Advantage của Hayate đối với Baldum...").
                      4. Đưa ra 2 Win Conditions cho Blue và 2 Win Conditions cho Red.
                      5. Đưa ra 2 Danger Alerts cho Blue (Threat mitigation).

                      YÊU CẦU TRẢ VỀ JSON:
                      {
                        "forecast": {
                          "win_rate": 55,
                          "summary": "Phân tích số liệu thực tế theo NWRP V2...",
                          "win_conditions": ["Blue:...", "Blue:...", "Red:...", "Red:..."],
                          "danger_alerts": ["...", "..."]
                        }
                      }`;
          } else {
            // STANDARD DRAFT SUGGESTION PROMPT
            const candidatePool = top24.map(r => {
              const h = r.hero;
              return `- ${h.name} (ID: ${h.id}) [${h.role.join('/')}]: Tags: ${getTacticalTags(h).join(', ')}. Reasons: ${r.reasons.join(', ')}`;
            }).join('\n');

            prompt = `Bạn là HLV Esports chuyên nghiệp đỉnh cao của Liên Quân Mobile (Arena of Valor). 
                        
                        PHÂN TÍCH ĐỘI HÌNH:
                        - Đồng minh hiện tại: ${allyInfo || 'Chưa chọn'}.
                        - Cảnh báo thiếu hụt: ${missingRoles.length > 0 ? missingRoles.join(', ') : 'Đội hình đã cân bằng'}.
                        - Đối thủ hiện tại: ${enemyInfo || 'Chưa chọn'}.
                        - Tướng đã bị cấm: ${banned.filter((id: string) => id !== 'none').join(', ')}.

                        NHIỆM VỤ CỦA BẠN:
                        1. Phân tích lỗ hổng đội hình hiện tại và đe dọa từ phe địch.
                        2. Chọn ra 3 "Neural Picks" từ Danh sách ứng viên bên dưới hoặc dựa trên kiến thức của bạn về meta. Ưu tiên lấp đầy vị trí thiếu hụt.
                        3. Đưa ra lời khuyên vận hành cho các tướng Key.

                        DANH SÁCH ỨNG VIÊN TIỀM NĂNG (Top 24 của hệ thống):
                        ${candidatePool}

                        YÊU CẦU TRẢ VỀ JSON DUY NHẤT:
                        {
                          "summary": "Phân tích chiến thuật (tối đa 60 chữ)...",
                          "neural_picks": [
                            { "id": "hero_id", "name": "...", "reason": "Tại sao chọn tướng này để khắc chế/bổ sung?" }
                          ],
                          "advice": { "hero_id": "Mẹo chơi..." }
                        }`;
          }

          const aiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemma-3-27b-it:generateContent?key=${env.GEMINI_API_KEY}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
          });

          if (aiResponse.ok) {
            const aiData = await aiResponse.json() as any;
            const rawText = aiData.candidates?.[0]?.content?.parts?.[0]?.text || "{}";
            const jsonMatch = rawText.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
              const parsed = JSON.parse(jsonMatch[0]);
              
              if (isFinal) {
                aiResponseData = {
                  isFinal: true,
                  forecast: parsed.forecast || {}
                };
              } else {
                aiResponseData = {
                  recommendations: top6,
                  missingRoles,
                  aiSummary: parsed.summary,
                  neuralPicks: parsed.neural_picks || [],
                  aiAdvice: parsed.advice || {}
                };
              }
            }
          }
        } catch (aiErr) {
          console.error("AI Error:", aiErr);
        }
      }

      return new Response(JSON.stringify(aiResponseData), {
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        },
      });

    } catch (err: any) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { 
          "Content-Type": "application/json",
          ...corsHeaders
        },
      });
    }
  },
};
