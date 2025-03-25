import Agent from './agents/agent';

class Runner {
  static async run(agent: Agent, input: string): Promise<{ final_output: string }> {
    const result = await agent.run(input);
    return { final_output: result };
  }
}

export default Runner;
