import OpenAIService from '../services/openAIService';

class OpenAIClient {
  private service: OpenAIService; 

  constructor(service: OpenAIService) {
    this.service = service;
  }

  async generateText(prompt: string, model: string = 'gpt-3.5-turbo', maxTokens: number = 200, temperature: number = 0.7): Promise<string> {
    return this.service.generateText(prompt, model, maxTokens, temperature);
  }
}

export default OpenAIClient;
