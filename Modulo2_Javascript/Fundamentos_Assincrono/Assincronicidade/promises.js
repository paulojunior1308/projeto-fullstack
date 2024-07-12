// Inicialmente, seu valor é desconhecido. Ela pode, então, ser resolvida ou rejeitada.


// ESTRUTURA
const myPromise = new Promise((resolve, reject) =>
  {
    window.setTimeout(() => 
      {
        resolve(console.log("Resolvida! "));
      }, 2000);
  });

// MANIPULAÇÃO
const myPromise1 = new Promise((resolve, reject) =>
  {
    window.setTimeout(() => 
      {
        resolve(console.log("Resolvida! "));
      }, 2000);
  });

  await myPromise1
    .then((result) => result + " passando pelo then")
    .then((result) => result + " e agora acabou!")
    .catch((err) => console.log(err.message));
// Após 2 segundos, retornará o valor
// "Resolvida passando pelo then e agora acabou!"