//exe 1 imprimir um Ola mundo

console.log("Ola,mundo")

//exe 2 transformando uma string para numero e mostrando seu tipo
let string = "12345"
let stringtonumber = Number(string)
console.log(typeof(stringtonumber))

//exe 3 quantas caracteres tem uma string e quantas palavras possue

let frase = "Javascript is the best"
//caracteres
console.log(frase.length)

//palavras da espaço " " para separar letra por letra

console.log(frase.split(" ").length)

//exe 4 loops arraw: criar uma array 5 nomes e usar o repetidor for para mostrar cada nome no console

let nomes = ["Barbosa","Dias", "Nikolas","Jaison","Ricardo"]

for (let i = 0;i < nomes.length;i++) {
        console.log(nomes[i])
}

//exe 5 funcoes String e math funcao que recebe um horario e devolve em horario am ou pm

//converter horario
function conhora(hora24) {
        const [hora,minuto] = hora24.split(":")

        const hora12 = hora % 12 || 12
        //de manha
        let periodo = "AM"

        if(hora >= 12) {
         periodo = "PM"
        }

        console.log(`${hora12}:${minuto} ${periodo}`)
} 

conhora("15:16")
conhora("09:46")
conhora("20:30")
conhora("12:00")
conhora("2:00")

