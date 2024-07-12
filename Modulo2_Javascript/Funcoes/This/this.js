// A palavra reservada this é uma referencia de contexto. No exemplo, this refere-se ao objeto pessoa.
const pessoa = 
{
  firstName: "Andre",
  lastName: "Soares",
  id: 1,
  fullName: function()
  {
    return this.firstName + " " + this.lastName;
  },
  getId: function()
  {
    return this.id;
  }
};

pessoa.fullName(); // Andre Soares
pessoa.getId(); //1

// MANIPULANDO SEU VALOR

// ----- CALL -----
const pessoa1 = 
{
  nome: "Miguel",
};

const animal = 
{
  nome: "Murphy",
};

function getSomething()
{
  console.log(this.nome);
}

getSomething.call(animal);


// ----- APPLY -----
const pessoa2 = 
{
  nome: "Miguel",
};

const animal2 = 
{
  nome: "Murphy",
};

function getSomething()
{
  console.log(this.nome);
}

getSomething.apply(animal2);

// ----- BIND -----
const retornaNomes = function()
{
  return this.nome;
};

let bruno = retornaNomes.blind({nome: "Bruno"});

bruno();