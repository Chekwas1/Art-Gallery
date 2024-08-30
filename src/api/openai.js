// src/api/openai.js
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY, // Your OpenAI API key
});

export default openai;
