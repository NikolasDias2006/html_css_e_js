var idade = 18

if (idade < 16) {
    console.log("nao pode votar")
} else if(idade >= 16 && idade <18) {
      console.log("Voto opcional")
}else if(idade > 18 && idade < 59) {
    console.log("Voto obrigatorio")
}else {
    console.log("o voto é opcional")
}