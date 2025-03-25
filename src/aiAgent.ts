import aiClient from './aiClient';

class Agent {
  name: string;
  instructions: string;
  client: aiClient;

  constructor(name: string, instructions: string, client: aiClient) {
    this.name = name;
    this.instructions = instructions;
    this.client = client;
  }

  // Método para executar o agente
  async run(input: string): Promise<string> {
    const prompt = `${this.instructions}\n${input}`;
    return await this.client.generateText(prompt);
  }
}

export default Agent;
