const h1 = document.getElementById("script")
//json (javascript object notation)
const objeto = {nome: "joao",idade:30}

console.log(objeto)

const jsonstring = JSON.stringify(objeto)

//convertido para string para passar para o servidor
console.log(jsonstring)

const json = `{"Nome": "João","Idade": 320}`

//convertendo para objeto
objeto2 = JSON.parse(json)

console.log(objeto2)

//mostrando o objeto na tela
h1.innerHTML = `Nome: ${objeto2.Nome} Idade: ${objeto2.Idade}`


//parei na parte 2:05:00