let num = [5,8,2,9,3]

console.log(num)

console.log(`o vetor tem ${num.length} posiçoes`)

console.log(`o primeiro valor do vetor é ${num[0]} `)

console.log("O vetor em ordem ficaria assim: "+ num.sort())

num.push(6)

console.log("Adicionei o numero 6 no vetor: "+num)


/*mostrando a tabela em com o arraw */

for(let pos = 0; pos<num.length;pos++) {
            console.log(num[pos])
}
