// App.jsx

import React, { useState } from "react";
import { getOpenAIResponse, instantiateOpenAI } from "./Api"; // Import both functions

const App = () => {
  const [response, setResponse] = useState("");
  const [prompt, setPrompt] = useState("");
  const apiKey = "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"; // Replace with your actual API key

  const handleGenerateResponse = async () => {
    const openai = instantiateOpenAI(apiKey); // Create an instance with the API key
    const openAIResponse = await getOpenAIResponse(prompt, openai);
    setResponse(openAIResponse);
  };

  return (
    <div>
      <h1>OpenAI API Example</h1>
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter your prompt here"
      />
      <button onClick={handleGenerateResponse}>Generate Response</button>
      {response && <div>{response}</div>}
    </div>
  );
};

export default App;
