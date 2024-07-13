// Importante: Este código assume que você está executando em um ambiente que simula entrada e saída como o Codingame ou similar.
// Não funcionará diretamente em um ambiente como o Node.js sem ajustes adicionais para entrada e saída.

let input = ""; // Variável para armazenar a entrada

// Função simulada gets() para leitura de entrada, a ser substituída por entrada real em outro ambiente
function gets() {
    return input.shift(); // Simula a função gets() para leitura de entrada
}

// Entrada simulada para teste
input = [
    "2",
    "9.81",
    "9.71",
    "3",
    "9.82",
    "9.72",
    "9.92"
];

let index = 0; // Índice para percorrer a entrada simulada

while (index < input.length) {
    let qtdEntradas = parseInt(input[index++]);
    let melhor = 999; // Inicializa com um valor alto para garantir a comparação

    for (let i = 0; i < qtdEntradas; i++) {
        let tempo = parseFloat(input[index++]);
        if (tempo < melhor) {
            melhor = tempo;
        }
    }
    console.log(melhor.toFixed(2)); // Saída para simular print em ambiente de desenvolvimento
}
