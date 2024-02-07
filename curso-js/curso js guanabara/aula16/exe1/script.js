function Contar() {
    /* começo */
    var ini = document.getElementById("ini")  
    /* fim */
    var fim = document.getElementById("fim")
    /*passo */
    var pas = document.getElementById("pass")

    var res = document.getElementById("div2")
  /* || = operador OU */

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0 ) {
        alert("[ERRO!!]Faltam dados")
    } else {
        res.innerHTML = ``
        i = Number(ini.value)
        f = Number(fim.value)
        p = Number(pas.value)

       if(p <= 0) {
        alert("é impossivel contar pulando em 0 em 0 entao acresetei passo 1")
        p = 1
       }
       if(i < f){
        /*Contagem crescente */
        for(var c = i;c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449}`
        }
    } else {
        /* contagem decresente */
        for(var c = i;c >= f; c -= p) {
        res.innerHTML += ` ${c} \u{1F449}`
    }
    }
    res.innerHTML += `\u{1f3c1}`
}
}
