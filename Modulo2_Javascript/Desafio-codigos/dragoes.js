// Importa o módulo readline para captura de entrada no Node.js
const readline = require('readline');

// Cria uma interface para leitura de entrada
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array para armazenar os níveis de energia
let niveisEnergia = [];

// Pergunta ao usuário quantas entradas serão feitas
rl.question('Insira a quantidade de entradas: ', (qtdEntradas) => {
    // Converte para número inteiro
    qtdEntradas = parseInt(qtdEntradas);

    // Função para ler cada nível de energia
    const lerNivelEnergia = () => {
        rl.question('Insira o nível de energia: ', (nivelEnergia) => {
            // Converte para número inteiro
            nivelEnergia = parseInt(nivelEnergia);
            niveisEnergia.push(nivelEnergia);

            // Verifica se já leu todas as entradas
            if (niveisEnergia.length < qtdEntradas) {
                lerNivelEnergia(); // Continua lendo os níveis de energia
            } else {
                // Processamento dos níveis de energia
                niveisEnergia.forEach(nivel => {
                    if (nivel > 8000) {
                        console.log("Mais de 8000!");
                    } else {
                        console.log("Inseto!");
                    }
                });

                // Fecha a interface de leitura
                rl.close();
            }
        });
    };

    // Inicia a leitura dos níveis de energia
    lerNivelEnergia();
});
