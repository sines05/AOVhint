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
    "Vary": "Origin",
  };
};

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const corsHeaders = getCorsHeaders(request);
    
    const url = new URL(request.url);
    const path = url.pathname.replace(/\/+$/, ''); // Basic normalization
    
    if (request.method === "OPTIONS") {
      return new Response(null, {
        headers: corsHeaders,
      });
    }

    if (path !== "/recommend") {
      return new Response("Not Found", { 
        status: 404,
        headers: corsHeaders
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
      let aiResponseData: any = { recommendations: top6, missingRoles, aiAdvice: {}, isFinal };

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
                    prompt = `Bạn là Chuyên gia phân tích dữ liệu Esports khách quan, chuyên sâu về Liên Quân Mobile.
                      TRẬN ĐẤU ĐÃ CHỐT ĐỘI HÌNH. Phân tích Match Forecast trung lập bằng NWRP V2.

                      NGUYÊN TẮC: Bạn KHÔNG đứng về phe nào. Phân tích hoàn toàn dựa trên dữ liệu.

                      CÔNG THỨC NWRP V2:
                      WinRate_Blue = (ΣPower_Base * 0.25) + (ΣMatchup_Diff * 0.35) + (ΣSynergy_Impact * 0.25) + (Meta_Balance * 0.15)
                      WinRate_Red = 100 - WinRate_Blue

                      DỮ LIỆU ĐỘI HÌNH:
                      ĐỘI BLUE:
                      ${JSON.stringify(weights.blue, null, 2)}

                      ĐỘI RED:
                      ${JSON.stringify(weights.red, null, 2)}

                      YÊU CẦU:
                      1. Tính NWRP V2 dựa trên dữ liệu thô, đưa ra win_rate cho Blue (Red = 100 - Blue).
                      2. Summary (tối đa 60 chữ): chỉ ra yếu tố quyết định nhất ảnh hưởng đến cán cân, viết trung lập.
                      3. Win Conditions: 2 cho Blue, 2 cho Red — mỗi bên đều có cơ hội.
                      4. Danger Alerts: 1 cho Blue, 1 cho Red — rủi ro lớn nhất mỗi bên cần đề phòng.

                      TRẢ VỀ JSON DUY NHẤT:
                      {
                        "forecast": {
                          "win_rate": 55,
                          "summary": "Phân tích trung lập dựa trên dữ liệu...",
                          "win_conditions": ["Blue: ...", "Blue: ...", "Red: ...", "Red: ..."],
                          "danger_alerts": ["Blue cần đề phòng: ...", "Red cần đề phòng: ..."]
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
            console.log("[AI] Raw response length:", rawText.length);
            
            // Refined JSON extraction: Handles markdown backticks and extra text
            const cleanedText = rawText.replace(/```json\n?/g, '').replace(/```\n?/g, '');
            const jsonMatch = cleanedText.match(/\{[\s\S]*\}/);
            
            if (jsonMatch) {
              try {
                const parsed = JSON.parse(jsonMatch[0]);
                console.log("[AI] Parsed keys:", Object.keys(parsed));
                
                if (isFinal) {
                  aiResponseData = {
                    ...aiResponseData,
                    isFinal: true,
                    forecast: parsed.forecast || {
                      win_rate: 50,
                      summary: "Không thể tính toán dự báo chi tiết.",
                      win_conditions: [],
                      danger_alerts: []
                    }
                  };
                } else {
                  aiResponseData = {
                    ...aiResponseData,
                    aiSummary: parsed.summary || "",
                    neuralPicks: parsed.neural_picks || [],
                    aiAdvice: parsed.advice || {}
                  };
                }
              } catch (parseErr) {
                console.error("[AI] JSON Parse Error:", parseErr);
                console.error("[AI] Raw text:", rawText.substring(0, 500));
              }
            } else {
              console.error("[AI] No JSON found in response:", rawText.substring(0, 300));
            }
          } else {
            const errorBody = await aiResponse.text();
            console.error(`[AI] API Error ${aiResponse.status}:`, errorBody.substring(0, 300));
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
