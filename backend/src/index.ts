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

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
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
            // NWRP V1: NEURAL WIN-RATE PROTOCOL
            const weights = getDetailedMatchupWeights(teamBlue, teamRed);
            
            prompt = `Bạn là HLV Esports chuyên nghiệp đỉnh cao của Liên Quân Mobile.
                      TRẬN ĐẤU ĐÃ CHỐT ĐỘI HÌNH. Hãy tính tỷ lệ thắng bằng Giao thức NWRP V1.

                      CÔNG THỨC NWRP V1:
                      WinRate_Ally = (Base_Power_Score * 0.4) + (Counter_Advantage_Score * 0.4) + (Synergy_Balance_Score * 0.2)
                      *Lưu ý: Điểm số chuẩn hóa về thang 100.

                      DỮ LIỆU CHI TIẾT CỦA 10 TƯỚNG (WEIGHTS TABLE):
                      PHE TA (ALLY):
                      ${JSON.stringify(weights.blue, null, 2)}

                      PHE ĐỊCH (ENEMY):
                      ${JSON.stringify(weights.red, null, 2)}

                      NHIỆM VỤ CỦA BẠN:
                      1. Tính toán Tỷ lệ thắng % cho Ally dựa trên bảng dữ liệu và công thức trên.
                      2. Giải trình ngắn gọn các con số quan trọng trong summary.
                      3. Đưa ra 3 Win Conditions và 2 Danger Alerts.

                      YÊU CẦU TRẢ VỀ JSON:
                      {
                        "forecast": {
                          "win_rate": 55,
                          "summary": "Giải trình toán học & chiến thuật (60 chữ)...",
                          "win_conditions": [...],
                          "danger_alerts": [...]
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
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });

    } catch (err: any) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" },
      });
    }
  },
};
