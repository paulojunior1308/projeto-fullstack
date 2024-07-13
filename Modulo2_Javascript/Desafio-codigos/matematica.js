// Função para leitura de entrada (simulação para exemplo)
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para impressão de saída (simulação para exemplo)
const print = (output) => {
  console.log(output); // Substitua console.log() pela função de impressão de saída apropriada
};

// Lê o número de equipes (simulação para exemplo)
readline.question('Insira o número de equipes: ', (input) => {
  let n = parseInt(input); // Converte a entrada para número inteiro
  let totalMatches = 0; // Inicializa o contador de partidas

  // Enquanto houver mais de uma equipe no torneio
  while (n > 1) {
      if (n % 2 === 0) {
          // Se o número de equipes for par
          totalMatches += n / 2; // Incrementa as partidas jogadas
          n = n / 2; // Divide o número de equipes pela metade para a próxima rodada
      } else {
          // Se o número de equipes for ímpar
          totalMatches += (n - 1) / 2; // Incrementa as partidas jogadas
          n = (n - 1) / 2 + 1; // Divide o número de equipes por 2, arredonda para cima e adiciona 1 para a equipe que avança automaticamente
      }
  }

  // Imprime o total de partidas jogadas
  print(totalMatches);

  readline.close(); // Fecha a interface de leitura após a conclusão
});
