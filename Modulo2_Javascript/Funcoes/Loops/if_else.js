function numeroPositivo(num)
{
  let resultado;

  if(num < 0 /*condição*/) 
    {
      resultado = false; // Declaração 1(dentro de if): Ocorre caso a condição seja verdadeira
    }
  else
  {
    resultado = true; // Declaração 2 (dentro de else): Ocorre caso a condição seja falsa
  }

  return resultado;
}

numeroPositivo(2); // true
numeroPositivo(-9); // false


// Outra forma
function numeroPositivo(num)
{
  const ehNegativo = num < 0;
  const maiorQueDez = num > 10; // É possível colocar uma condição dentro de uma variavel

  if(ehNegativo)
    {
      return "Esse número é negativo";
    }
  else if (!ehNegativo && maiorQueDez)
    {
      return "Esse número é positivo e maior que 10!"
    }

  return "Esse número é positivo!";
}