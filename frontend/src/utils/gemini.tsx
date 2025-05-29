// src/utils/gemini.js
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_PUBLIC_KEY);

// Get the model instance (you don't await here)
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // You can change to gemini-pro etc.

export const askGemini = async (prompt: string | (string | { inlineData: { data: string; mimeType: string } })[]): Promise<string> => {
  try {
    console.log(prompt)
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (err) {
    console.error("Gemini Error:", err);
    return "Something went wrong.";
  }
};