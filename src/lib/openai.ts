// import OpenAI from "openai";

// const openai = new OpenAI();

// export default openai;


// lib/ai.ts
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export default genAI;
