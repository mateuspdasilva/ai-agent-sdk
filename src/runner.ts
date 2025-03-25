import aiAgent from './aiAgent';

class Runner {
  static async run(agent: aiAgent, input: string): Promise<{ final_output: string }> {
    const result = await agent.run(input);
    return { final_output: result };
  }
}

export default Runner;
