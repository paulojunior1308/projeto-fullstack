// Spread: uma forma de lidar separadamente uma array

function sum(x, y, z)
{
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));


// Rest: combina os argumentos em um array
function confereTamanho(...args)
{
  console.log(args.length);
}

confereTamanho(); // 0
confereTamanho(1, 2); // 2
confereTamanho(3, 4, 5) // 3