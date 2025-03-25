import aiClient from './aiClient';
import aiAgent from './aiAgent';
import runner from './runner';

const client = new aiClient();

const agent = new aiAgent('Poet Assistant', 'You are a poet assistant.', client);

(async () => {
  const result = await runner.run(agent, 'Who are you? Write a poem about recursion in programming.');
  console.log(result.final_output);
})();
