
import { GoogleGenAI } from "@google/genai";

// Always use the API key from process.env.API_KEY.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * geminiService provides AI-powered collision assessment and expert advice
 * for Elite Body Works customers.
 */
export const geminiService = {
  /**
   * Generates a professional repair assessment based on customer-provided details.
   */
  getRepairAssessment: async (description: string) => {
    try {
      // Use gemini-3-flash-preview for quick, efficient text-based advice.
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Analyze this vehicle damage description: "${description}". 
        Provide a professional estimate of repair complexity and advice for the vehicle owner. 
        Focus on safety and factory-standard repairs.`,
        config: {
          systemInstruction: "You are an expert collision repair consultant for Elite Body Works, a high-end auto body shop in Columbus, OH. You prioritize OEM standards and customer safety.",
          temperature: 0.7,
        },
      });

      // Directly access .text property from the GenerateContentResponse object.
      return response.text;
    } catch (error) {
      console.error("AI Analysis failed:", error);
      return "Unable to generate AI assessment at this time. Please contact our estimators directly at (614) 555-0123.";
    }
  },

  /**
   * Provides answers to complex insurance and technical repair questions using reasoning.
   */
  getExpertGuidance: async (query: string) => {
    try {
      // Use gemini-3-pro-preview for complex reasoning tasks like insurance rights.
      const response = await ai.models.generateContent({
        model: "gemini-3-pro-preview",
        contents: query,
        config: {
          systemInstruction: "You are a master technician and claims advocate. Explain the customer's rights under Ohio law (right to choose repair shop) and why factory-certified parts matter.",
          thinkingConfig: { thinkingBudget: 4000 }
        }
      });

      return response.text;
    } catch (error) {
      console.error("AI Expert Guidance failed:", error);
      throw error;
    }
  }
};
