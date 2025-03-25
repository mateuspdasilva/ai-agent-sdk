
# AI Agent SDK

Este SDK permite que você crie e interaja com agentes inteligentes, baseados em IA, de maneira simples e flexível.

## Instalação

Para instalar o SDK, basta rodar o seguinte comando:

```bash
npm install mateus-ai-agent-sdk
```

## Exemplo de uso

Aqui está um exemplo de como você pode usar o SDK para criar e interagir com um agente personalizado:

### 1. Defina um agente com um tipo e instruções

Você pode criar diferentes tipos de agentes, como um assistente de clima, um assistente de programação, ou um assistente criativo.

```typescript
import { createAgent, runAgent } from 'mateus-ai-agent-sdk';

// Criando um agente de previsão do tempo
const agenteClima = createAgent('Clima Assistant', 'Você é um assistente de previsão do tempo.');

// Criando um agente criativo
const agenteCriativo = createAgent('Poet Assistant', 'Você é um assistente criativo especializado em escrever poesias.');
```

### 2. Interaja com o agente

Agora você pode interagir com o agente, fornecendo uma entrada para ele e obtendo uma resposta.

```typescript
// Pergunte sobre a previsão do tempo
const respostaClima = await runAgent(agenteClima, 'Qual é a previsão do tempo para hoje?');
console.log(respostaClima.final_output);

// Pergunte ao agente criativo para escrever um poema
const respostaPoema = await runAgent(agenteCriativo, 'Escreva um poema sobre a programação.');
console.log(respostaPoema.final_output);
```

### 3. Personalize o comportamento do agente

Você pode personalizar ainda mais o comportamento do seu agente, passando instruções mais específicas ao criá-lo. O agente irá seguir as instruções para gerar respostas de acordo com o tipo de interação que você deseja.

```typescript
// Exemplo de agente com instruções personalizadas
const agenteAssistente = createAgent('Assistente Pessoal', 'Você é um assistente pessoal que ajuda com tarefas diárias e organiza compromissos.');
const respostaAssistente = await runAgent(agenteAssistente, 'Agende uma reunião para amanhã às 10h.');
console.log(respostaAssistente.final_output);
```

## API

- `createAgent(name: string, instructions: string): Agent` – Cria um novo agente com o nome e instruções fornecidos.
- `runAgent(agent: Agent, input: string): Promise<{ final_output: string }>` – Executa o agente com a entrada fornecida e retorna a resposta gerada.

## Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
