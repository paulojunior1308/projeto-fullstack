function verificaPalindromo(string)
{
  if (!string) throw "String inválida";

  return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string)
{
  try
  {
    verificaPalindromo(string)
  }
  catch(e)
  {
    throw e;
  }
  finally
  {
    console.log("A string enviada foi: " + string);
  }
}
verificaPalindromo('');