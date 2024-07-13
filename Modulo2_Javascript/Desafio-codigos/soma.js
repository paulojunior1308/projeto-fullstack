// Função para calcular a soma dos primeiros N números inteiros
const soma1ateN = (n) => {
  return (n * (n + 1)) / 2;
};

// Função para calcular a soma dos números de A até B
const somaAeB = (a, b) => {
  // Calcula a soma de 1 até B e de 1 até (A-1)
  const somaAteB = soma1ateN(b);
  const somaAteAmenos1 = soma1ateN(a - 1);
  
  // Retorna a diferença para obter a soma de A até B
  return somaAteB - somaAteAmenos1;
};

// Exemplo de uso com valores definidos diretamente (simulando entrada)
const A = 3; // Valor de A
const B = 7; // Valor de B
const total = somaAeB(A, B);
console.log('A soma de', A, 'até', B, 'é:', total);
