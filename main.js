/*-------------------------Ai_generated_code-------------------------*/
import {GoogleGenAI} from "@google/genai";
const ai = new GoogleGenAI({
    apiKey: 'AIzaSyChoUxNuZkQmMODOjx27DkxMEAPFm88JtA',
    dangerouslyAllowBrowser: true,
});
console.log(ai.apiKey);

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "give me a financial advice for this month , here is the ticker of the stock I am interested in : ABAT",
  });
  console.log(response.text);
  return response.text;
}

export async function getFinancialAdvice() {
  return await main();
}