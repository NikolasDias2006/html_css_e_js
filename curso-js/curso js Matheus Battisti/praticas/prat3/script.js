const h1 = document.querySelector("#h1")

const link = document.querySelector("a")

//1 seg para aparecer a mensagem
setTimeout(() => {
    h1.textContent = "ola,tudo bom"
},1000)

//add um video
link.setAttribute("href","https://www.youtube.com/watch?v=OYPbr6ZG3pc&t=8361s")

//add um blank para nao sair do site
link.setAttribute("target","_blank")
//manipulaçao de classes do css


const elemento = document.querySelector("#meuid")

//add ou pode fazer tambem

elemento.classList.add("minhaclasse")

//se a classe nao existir o toggle irá add ser ela existir o toggle irá remover
elemento.classList.toggle("minhaclasse")


//manipular o CSS
const elemento3 = document.querySelector("#meuid")

elemento3.style.color = "green" 
elemento3.style.background = "red"

//navegaçao em nós
const element4 = document.querySelector("input")

//o que tem antes do comando
const pai = element4.parentNode

console.log(element4)

//o que tem dentro
const filho = element4.firstChild

console.log(filho)

//ultimo filho (ultimo arquivo)

//criando um elemento
const ultimofilho = element4.lastChild

console.log(element4)

const novoelemento = document.createElement("div")

novoelemento.textContent = "criei essa div "
console.log(novoelemento)

//passando esse elemento para o html
document.body.appendChild(novoelemento)
//colocando ele junto com o elemento pai
document.body.insertBefore(novoelemento,pai)

//removendo um elemento se tirar "" ira remover a linha vermelha
document.body.removeChild(elemento3)

//Eventos

//click
const botao = document.querySelector("#botao")

const botao2 = document.querySelector("#input2")
botao.addEventListener("click",function(event){
    
  event.preventDefault()
  console.log("ola")
})

const form = document.querySelector("#texto2")


form.addEventListener("keydown",function() {
    console.log("tecla pressionada")
})

// formulario
const formu = document.querySelector("#form")

formu.addEventListener("submit",function (event) {
  event.preventDefault()
  console.log("Enviado")
})

//modificiando link
link.addEventListener("click", function (event) {
  //evita de iniciar sua açao basica
  event.preventDefault()

  console.log("clicou no link!")
})


//parei na parte 2:55:51