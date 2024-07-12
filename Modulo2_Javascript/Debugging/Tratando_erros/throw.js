function verificaPalindromo(string)
{
  if (!string) throw "String inválida";

  return string === string.split('').reverse().join('');
}

verificaPalindromo('cat');