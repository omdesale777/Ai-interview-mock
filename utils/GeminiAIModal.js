import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

let chatSession = null;

function initializeChat() {
  const apiKey = "AIzaSyBG5BmMvPy-Xn4HAJnamuCnoSS192aV6ig"; // Hardcoded for testing
  
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not set");
  }
  
  // ... rest of code

  const genAI = new GoogleGenerativeAI({
    apiKey: apiKey,
    // Force API version
    defaultOptions: {
      apiVersion: 'v1'
    }
  });
  
  const model = genAI.getGenerativeModel({
    model: "gemini-3-flash",
  });

  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
  ];

  chatSession = model.startChat({
    generationConfig,
    safetySettings,
  });
  
  return chatSession;
}

export { initializeChat };
export const getChatSession = () => {
  if (!chatSession) {
    return initializeChat();
  }
  return chatSession;
};