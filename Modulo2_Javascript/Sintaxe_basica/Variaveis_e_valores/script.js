//boolean
var vOuF = false;
console.log(typeof(vOuF));

//number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//string
var nome = 'Paulo';
console.log(typeof(nome));

//function
var funcao = function(){}
console.log(typeof(funcao));

//como declarar
var variavel = 'Paulo';
variavel = 'Eduardo';
console.log(variavel);

let variavel2 = 'Junior';
variavel2 = 'Souza';
console.log(variavel2);

const constante = 'Paulo';
constante = 'Eduardo'; //não aceita a mudança de valor
console.log(constante);

var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal()
{
  let escopoLocalInterno = 'local';
  console.log(escopoLocalInterno);
}
escopoLocal();