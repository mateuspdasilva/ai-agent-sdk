import OpenAIClient from '../clients/openAIClient';

class Agent {
  name: string;
  instructions: string;
  client: OpenAIClient;

  constructor(name: string, instructions: string, client: OpenAIClient) {
    this.name = name;
    this.instructions = instructions;
    this.client = client;
  }

  async run(input: string): Promise<string> {
    const prompt = `${this.instructions}\n${input}`;
    return await this.client.generateText(prompt);
  }
}

export default Agent;
