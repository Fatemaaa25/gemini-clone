import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyB4FFLROp5rRHZapDqzf_EIhL6cLwEXjWs"); // Replace with your real API key

async function run(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

  const result = await model.generateContent(prompt);
  const response=await result.response;
  return response.text();
}

export default run;
