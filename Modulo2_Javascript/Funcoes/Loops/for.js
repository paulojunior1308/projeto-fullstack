// FOR
function multiplicaPorDois(arr)
{
  let multiplicados = [];

  for (let i = 0; i < arr.length; i++)
    {
      multiplicados.push(arr[i] * 2);
    }

    return multiplicados;
}

const meusNumeros = [2, 33, 456, 356, 40];
multiplicaPorDois(meusNumeros); // [4, 66, 912, 712, 80]


// FOR IN
function forInExemplo(obj)
{
  for(prop in obj)
    {
      console.log(prop);
    }
}

const meuObjeto = 
{
  nome: "João",
  idade: "20",
  cidade: "Salvador"
}

forInExemplo(meuObjeto)
// nome
// idade
// cidade

// OUTRO MÉTODO
function forInExemplo(obj)
{
  for(prop in obj)
    {
      console.log(obj[prop]);
    }
}

const meuObjeto1 = 
{
  nome: "João",
  idade: "20",
  cidade: "Salvador"
}

forInExemplo(meuObjeto1)
// João
// 20
// Salvador

// FOR OF
function logLetras(palavra)
{
  for(letra of palavra)
    {
      console.log(letra);
    }
}

const palavra = "abacaxi";
logLetras(palavra);

// OUTRO MÉTODO
function logNumeros(nums)
{
  for(num3 of nums)
    {
      console.log(num3);
    }
}

const nums = [30, 20, 233, 2];
logNumeros(nums);