// import OpenAI from "openai";

// const openai = new OpenAI();

// export default openai;

// lib/ai.ts
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export default ai;
