let valores = [8,1,7,4,2,9]

/* Pos = Posiçao */
/*outra forma do for para tabela (mais facil) apenas para arraw*/

for (let pos in valores) {
    console.log(valores[pos])
}

if (valores.indexOf(8) == -1) {
    console.log("o valor nao foi encontrado")
} else {
    console.log("  O valor 8 esta na posiçao "+ valores.indexOf(8))
}