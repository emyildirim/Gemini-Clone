/*
 * Install the Generative AI SDK
 * https://aistudio.google.com/app/prompts/new_chat
 * $ npm install @google/generative-ai
 */

import  {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} from "@google/generative-ai";

/*process.env.GEMINI_API_KEY */
const apiKey = "AIzaSyCaDczRmUw03xncyf8rQSAGtK8Sy1Tipzc";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

export async function runChat(prompt) {
    const chatSession = model.startChat({
        generationConfig,
        // safetySettings: Adjust safety settings
        // See https://ai.google.dev/gemini-api/docs/safety-settings
        history: [
        ],
    });

    const result = await chatSession.sendMessage(prompt);
    // console.log(result.response.text());
    return result.response.text();
}