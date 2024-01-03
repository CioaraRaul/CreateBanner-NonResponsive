// openaiUtil.js

import OpenAI from "openai";

const instantiateOpenAI = (apiKey) => {
  return new OpenAI({
    key: apiKey,
    organization: "org-S1tKR1p4OkMYiwoTcHWdei7H",
  });
};

const getOpenAIResponse = async (prompt, apiKey) => {
  const openai = instantiateOpenAI(apiKey);

  try {
    const response = await openai.Completions.create({
      engine: "text-davinci-002",
      prompt,
      max_tokens: 100,
    });
    return response.choices[0].text;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};

export { getOpenAIResponse, instantiateOpenAI }; // Export both functions
