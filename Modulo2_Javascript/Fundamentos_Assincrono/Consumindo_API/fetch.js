fetch(url, options)
  .then(response => response.json())
  .then(json => console.log(json))

 
// Operações no banco
fetch("https://endereco-api.com/", 
{
  method: "GET",
  cache: "no-cache",
})
  .then(response => response.json())
  .then(json => console.log(json))  


  fetch("https://endereco-api.com/", 
  {
    method: "POST",
    cache: "no-cache",
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(json => console.log(json))    