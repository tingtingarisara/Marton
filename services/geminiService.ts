import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const createChatSession = (): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are 'Marton Bot', a helpful and knowledgeable sales assistant for Marton Thailand. 
      Marton Thailand specializes in construction machinery and equipment.
      
      Your knowledge base includes:
      - Concrete Mixers (Marton's signature product)
      - Construction Tools (Trowels, compactors)
      - Hoists and Lifts
      - Brick Making Machines
      
      Tone: Professional, friendly, encouraging, and expert.
      Language: Primarily English, but if the user speaks Thai, reply in Thai.
      
      Goal: Help users find the right equipment for their construction projects. If asked about prices, provide estimates based on typical market rates for high-quality industrial gear, but advise contacting sales for a quote.
      
      Do not hallucinate specific stock numbers. Always suggest they contact the official line @martonthailand for orders.`,
      temperature: 0.7,
    },
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<AsyncIterable<GenerateContentResponse>> => {
  try {
    const responseStream = await chat.sendMessageStream({ message });
    return responseStream;
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};
