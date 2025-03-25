import AIClient from './aiClient';

async function main() {
  const client = new AIClient();

  try {
    const response = await client.generateText("Escreva uma história para dormir de duas sentenças.");
    console.log("Resposta da AI:", response);
  } catch (error) {
    console.error("Erro ao obter resposta:", error);
  }
}

main();
