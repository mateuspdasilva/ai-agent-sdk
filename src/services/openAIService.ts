import axios, { AxiosInstance } from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.OPENAI_API_KEY ?? '';

if (!API_KEY) {
  throw new Error('Missing OpenAI API Key. Set OPENAI_API_KEY in .env');
}

class OpenAIService {
  private api: AxiosInstance;

  constructor(apiKey: string = API_KEY, baseURL: string = 'https://api.openai.com/v1') {
    this.api = axios.create({
      baseURL,
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async generateText(prompt: string, model: string = 'gpt-3.5-turbo', maxTokens: number = 200, temperature: number = 0.7): Promise<string> {
    try {
      const response = await this.api.post('/chat/completions', {
        model,
        messages: [{ role: 'user', content: prompt }],
        max_tokens: maxTokens,
        temperature: temperature,
      });

      return response.data.choices[0].message.content.trim();
    } catch (error) {
      console.error('Error generating text:', error);
      throw error;
    }
  }
}

export default OpenAIService;
