import { GoogleGenAI, Modality } from "@google/genai";

const API_KEY = process.env.API_KEY || '';

// Decode audio helper
const decode = (base64: string) => {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
};

// Main playback function
export const playTextToSpeech = async (text: string, context: AudioContext): Promise<void> => {
  if (!API_KEY) {
    throw new Error("Missing API Key. Please add API_KEY to environment variables.");
  }

  try {
    const ai = new GoogleGenAI({ apiKey: API_KEY });
    
    // Using the specific model for TTS as per guidance
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-preview-tts",
      contents: [{ parts: [{ text: text }] }],
      config: {
        responseModalities: [Modality.AUDIO],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' }, // 'Kore' is a good clear voice
          },
        },
      },
    });

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

    if (!base64Audio) {
      throw new Error("No audio data returned from Gemini.");
    }

    const audioBytes = decode(base64Audio);
    const audioBuffer = await context.decodeAudioData(audioBytes.buffer);

    const source = context.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(context.destination);
    source.start(0);

  } catch (error) {
    console.error("Gemini TTS Error:", error);
    throw error;
  }
};