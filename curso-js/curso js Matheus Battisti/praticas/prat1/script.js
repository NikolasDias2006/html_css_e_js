const tit = document.querySelector(".tit")

const databr = document.getElementById("data")

// const nao deixa declarar outra variavel.
const x = "hello world"
//x = 1 dá erro

let y = "Hle"

console.log(y)


for (i=10;i > 0;i--) {
    console.log("teste "+i)
}


let i1 = 0

while(i1 <= 10) {
    console.log(i1)
    i1 ++
}

//arrow function,outro jeito de declarar uma function

 //const arrowtest = () =>alert("Ola,mundo") arrowtest() 



/*ao interagir com o ola mundo*/

let data = Date()

tit.addEventListener("click",function(prev) {
    tit.innerHTML = ""
    tit.innerHTML += "tudo bom"
})

databr.addEventListener("click",function(date) {
    databr.innerHTML = ""
    databr.innerHTML += data
})


/*Concatenando uma string*/
minhastring = "Hello,there ! "

console.log(minhastring += "What's up ?")

/* Momento matematica */

//valor do pi
console.log(Math.PI)

//arredodando um numero
console.log(Math.round(3.6))

//raiz quadrada
console.log(Math.sqrt(81))

//potencia 2*2*2 
console.log(Math.pow(2,3))

