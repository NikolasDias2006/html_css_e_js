function Tabuada() {
    /* Pegando o numero */
    let num = document.getElementById("num")
    let tabuada = document.getElementById("Tabu") 

    if(num.value.length == 0) {
        alert("Erro! Digite um Numero")
    } else {
        tabuada.innerHTML = ``
        let n = Number(num.value)
          for(c=1;c<=10;c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tabuada.appendChild(item)
           
        }
    }
}