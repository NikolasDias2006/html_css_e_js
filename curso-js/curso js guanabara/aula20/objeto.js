let amigo = {nome: 'jose'
,idade: 8 
, sexo: "M"
,idadeatual(p=0) {
    console.log('Ano atual!')
    this.idade += p
}

}

amigo.idadeatual(3)
console.log(amigo.idade)