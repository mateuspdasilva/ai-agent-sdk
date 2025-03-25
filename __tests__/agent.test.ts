import OpenAIClient from '../src/clients/openAIClient';
import Agent from '../src/agents/agent';
import Runner from '../src/runner';
import OpenAIService from '../src/services/openAIService';

describe('Agent', () => {
  let client: OpenAIClient;
  let agent: Agent;

  beforeAll(() => {
    const service = new OpenAIService();  // Criando uma instância do serviço
    client = new OpenAIClient(service);   // Passando o serviço para o client
    agent = new Agent('Test Agent', 'You are a poet assistant.', client);  // Criando o agente
  });

  test('should generate correct output for poem prompt', async () => {
    const result = await Runner.run(agent, 'Who are you? Write a poem about recursion in programming.');
    console.log(result.final_output);
    expect(result.final_output).toContain('assistant');
    expect(result.final_output).toContain('recursion');
  });
});
