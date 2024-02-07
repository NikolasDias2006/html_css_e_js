//Exercicio 1 - de manipulaçao de array

//criando uma lista..
const Compras = []

//adicionando coisas na lsita
Compras.push("Batatinhas","Danone de coco","Musarella","Presunto","Pão Franceis")

console.log(Compras)

//removendo o primeiro item da lista
Compras.shift()

console.log(Compras)

//Exercicio 2 - de manipulaçao de array com find()

const Numeros = [3,7,14,21,29,36,42]

const Numerosdivisor = Numeros.find((Num) => Num % 7 === 0 && Num > 10)

console.log(Numerosdivisor)

//Exercicio 3 - filter()

const soma5 = [5,10,15,20,25,30,35,40]

//numeros maiores doque 20
const Nummado20 = soma5.filter((Num) => Num > 20)

console.log(Nummado20)

//Exercicio 4 Manipulaçao de string split(),trim()

const StringMundo = "Bom dia,Mundo!"

//trim remove os espaços
const StringSemEs = StringMundo.trim()

//split separa as palavras
const StringEmPalavras = StringSemEs.split(" ")

console.log(StringMundo)
console.log(StringEmPalavras)

//Exercicio 5 manipulaçao com string  startsWith(),endWith()

const StrinMouse = "O rato roeu a roupa do rei de Roma"

//começa com O ?
console.log(StrinMouse.startsWith("O"))

//termina com a Palavra Roma ?
console.log(StrinMouse.endsWith("Roma"))

