declare module 'mateus-ai-agent-sdk' {
    // Definição da interface do Agente
    export interface Agent {
      name: string;
      description: string;
      ask(query: string): Promise<{ final_output: string }>;
    }
  
    // Função para criar um agente
    export function createAgent(name: string, description: string): Agent;
  
    // Função para rodar o agente com uma pergunta
    export function runAgent(agent: Agent, query: string): Promise<{ final_output: string }>;
  }
  