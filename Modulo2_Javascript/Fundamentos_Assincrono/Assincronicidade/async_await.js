// Funções assincronas precisam dessas duas palavras chave.
async function resolvePromise()
{
  const myPromise = new Promise((resolve, reject) =>
    {
      window.setTimeout(() => 
        {
          resolve(console.log("Resolvida! "));
        }, 2000);
    });
  
    await myPromise
      .then((result) => result + " passando pelo then")
      .then((result) => result + " e agora acabou!")
      .catch((err) => console.log(err.message));
}

// Utilizando Try..catch
async function resolvePromise1()
{
  const myPromise1 = new Promise((resolve, reject) =>
  {
    window.setTimeout(() =>
    {
      resolve("Resolvida");
    }, 3000);
  });

  let result;

  try
  {
    result = await myPromise1
    .then((result) => result + " passando pelo then")
    .then((result) => result + " e agora acabou!")
  }
  catch(err)
  {
    result = err.message;
  }

  return result;
}