// avançado em javascript

const frutas = ["maça","banana"]

//metodo unshift para adicionar um elemento e ficar em primeiro na lista


console.log(frutas)

frutas.unshift("Morango")

console.log(frutas)

//add um elemento padrao

frutas.push("Uva")

console.log(frutas)

//Usando o shift para remover o primeiro item

frutas.shift("")

console.log(frutas)
//remove o ultimo elemento
frutas.pop("")

console.log(frutas)

//map,filter,reduce -> arrow function

const Number = [1 ,2 ,3 ,4 ,5 , 6]

//find encotra apenas o primeiro elemento mas nao todos
const pairnumbers = Number.find((num) => num % 2 === 0)

console.log(pairnumbers)

//filter mesmo papel do find porem ele percorre todos os numeros
//Pair Numbers
const painumbers = Number.filter((sodezoas) => sodezoas % 2 === 0)

console.log(painumbers)

//manipulaçao de string 

//metodo trim retira os espaços da frente
const frase = "   Ola,Mundo!"

const palavra = frase.trim().split(" ")

console.log(frase)
console.log(palavra)

const frase2 = "javascript é incrivel"
//passe em valor boleano se a palavra que escreveu e um start
console.log(frase2.startsWith(""))

//mesma coisa mas mostra os valores finais

console.log(frase2.endsWith("incrivel")) //pega da ultima letra

//exceçoes e tratamentos de erros
/*
const idade = 152

 if(idade < 18) {
    //adicionar um erro personalizado por voce
     throw new Error("Voce deve ter pelomenos 18 anos")
    }
*/

//tentado tratar o error

try {
   const idade = 15
  if(idade < 18) {
    //adicionar um erro personalizado por voce
     throw new Error("Voce deve ter pelomenos 18 anos")
 }
} catch(error) {
    //.message so mostra a mensagem
    console.log(error.message)
}

//callback

function cumprimentar(nome,callback) {
    console.log("ola " +nome)
    callback()
}

function saudacao() {
     console.log("Como voce está")
}

cumprimentar("Nikolas",saudacao) 

//criando uma function durante a chamada

cumprimentar("Nelow",function () {
    console.log("Eae de boa")
})

//settimeout =>  depois de uma tempo executa algo

function mostrarmensagem() {
    console.log("Esta mensagem irá aparecer daqui 3 segundos")
}
//3000 = 3 segundos
//setTimeout(mostrarmensagem,3000)

//do 1 ao 8 a cada 1 segundo
/* 
setTimeout(function () {
    console.log("1")
},1000)
setTimeout(function () {
    console.log("2")
},2000)
setTimeout(function () {
    console.log("3")
},3000)
setTimeout(function () {
    console.log("4")
},4000)
setTimeout(function () {
    console.log("5")
},5000)
setTimeout(function () {
    console.log("6")
},6000)
setTimeout(function () {
    console.log("7")
},7000)
setTimeout(function () {
    console.log("8")
},8000)
*/

//promises

/* const promessa = new Promise((resolve, reject) => {
    const condicao = false

    if(condicao) {
        resolve("A condiçao é verdadeira!")
    } else {
        reject("A condiçao é falsa!")
    }
})
//seila = menssagem ,para testar
promessa.then((seila) => {
    console.log(seila)
}) 
//tira o erro vermelho 
.catch((erro) => {
    console.log(erro)
})

const promessa1 = Promise.resolve(3)
const promessa2 = new Promise((resolve,reject) => {
  setTimeout(resolve,2500,"testando")
})

Promise.all([promessa1,promessa2]).then((valores) => console.log(valores)) */

//async Await

async function obtervalor() {

    const promessa = new Promise((resolve,reject) => {
        setTimeout(() => resolve("valor obtido"),2000)
})

  const valor = await promessa

  console.log(valor)
}

obtervalor()

//com o erro "reject"
async function obtervalorerror() {

  try {
    const promessa = new Promise((resolve,reject) => {
        setTimeout(() => reject("valor com error"),1000)
  })
  const valor = await promessa
  console.log(valor)
} catch (error){
      console.log(error)
  }
}

obtervalorerror()

