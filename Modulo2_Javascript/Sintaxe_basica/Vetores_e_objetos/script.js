// o que são vetores ou arrays

// como declarar um array
let array = ['string', 1, true];
console.log(array);

// pode guardar vários tipos de dados
let array1 = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array1[0]);

//forEach - itera um array
array1.forEach(function(item, index){console.log(item, index)});

//push - add item no fim
array.push('novo item');
console.log(array);

//pop - remove item no fim
array.pop();
console.log(array);

//shift - remove item no inicio
array.shift();
console.log(array);

//unshift - add item no inicio
array.unshift('novo item no inicio');
console.log(array);

//indexOf - retorna indice de um valor
console.log(array.indexOf(true));

//splice - remove ou substitui um item pelo indice
array1.splice(0, 3);
console.log(array1);

//slice - retorna uma parte de um array existente
let novoArray = array.slice(0, 3);
console.log(novoArray);

let object = {string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno: 'objeto interno'}}
console.log(object);