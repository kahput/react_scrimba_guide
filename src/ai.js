import { GoogleGenerativeAI } from "@google/generative-ai";

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. Format your response in markdown to make it easier to render to a web page
`
const genAI = new GoogleGenerativeAI("AIzaSyDrDp_kalTN43Jjh3mhX4fRXq-APrRoVRY");
const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: SYSTEM_PROMPT
});

export async function getRecipeFromGemini(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ");

  const result = await model.generateContent({
    contents: [
      {
        role: 'user',
        parts: [
          {
            text: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!`,
          }
        ],
      }
    ],
    generationConfig: {
      maxOutputTokens: 1024,
    }
  });

  return result.response.text();
}


