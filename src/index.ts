import OpenAIClient from './clients/openAIClient';
import Agent from './agents/agent';
import Runner from './runner';
import OpenAIService from './services/openAIService'; 

/**
 * Função para criar um novo agente.
 * @param name Nome do agente.
 * @param instructions Instruções do agente para interagir com o modelo.
 * @returns O agente criado.
 */
export const createAgent = (name: string, instructions: string): Agent => {
  const service = new OpenAIService();
  const client = new OpenAIClient(service);
  const agent = new Agent(name, instructions, client);
  return agent;
};

/**
 * Função para rodar um agente com um input.
 * @param agent O agente a ser executado.
 * @param input Entrada para o agente processar.
 * @returns A resposta gerada pelo agente.
 */
export const runAgent = async (agent: Agent, input: string): Promise<{ final_output: string }> => {
  return await Runner.run(agent, input);
};