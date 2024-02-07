function desconto5(a) {
    return (a * 5)/100
}

function MaiorDeIdade(a) {  
    return 2023-a >= 18? "De Maior":"De Menor" 
}

const desconto5porcento = desconto5(100)
console.log(desconto5porcento)

const Idade = MaiorDeIdade(2007)
console.log(Idade)

