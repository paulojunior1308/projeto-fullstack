// Pré-ES2015
function exponencial(array, num)
{
  if(num === undefined)
    {
      num = 1;
    }

  const result = [];

  for(let i = 0; i < array.length; i++)
    {
      result.push(array[i] ** num);
    }
  
  return result;
}

exponencial([1, 2, 3, 4]); //[1, 2, 3, 4]
exponencial([1, 2, 3, 4], 4); //[1, 8, 27, 64]


// Pós-ES2015
function exponencial(array, num = 1)
{
  const result = [];

  for(let i = 0; i < array.length; i++)
    {
      result.push(array[i] ** num);
    }

  return result;
}

exponencial([1, 2, 3, 4]); //[1, 2, 3, 4]
exponencial([1, 2, 3, 4], 4); //[1, 8, 27, 64]
