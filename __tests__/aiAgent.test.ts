import aiClient from '../src/aiClient';
import aiAgent from '../src/aiAgent';
import runner from '../src/runner';

describe('Agent', () => {
  let client: aiClient;
  let agent: aiAgent;

  beforeAll(() => {
    client = new aiClient();
    agent = new aiAgent('Test Agent', 'You are a poet assistant.', client);
  });

  test('should generate correct output for poem prompt', async () => {
    const result = await runner.run(agent, 'Who are you? Write a poem about recursion in programming.');
    console.log(result.final_output);
    expect(result.final_output).toContain('assistant');
    expect(result.final_output).toContain('recursion');
  });
});
