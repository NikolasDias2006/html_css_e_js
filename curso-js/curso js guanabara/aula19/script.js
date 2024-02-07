let num = document.querySelector("input#num")

let lista = document.getElementById("lista")

let res = document.querySelector("div#res")

let vetores = []

/*Analisando se o numero é entre 1 a 100 */

function isNumero(n){
   if(Number(n) >= 1 && Number(n) <= 100) {
    return true
   } else {
    return false
   }
}

/*Detector de numeros repetidos */

function lislista(n,l) {
 if(l.indexOf(Number(n)) != -1)
  {
    return true
  } else {
    return false
  }
}


function add() {
if(isNumero(num.value) && !lislista(num.value,vetores)){
        vetores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `O valor ${num.value} foi adicionado.`
        lista.appendChild(item)
        res.innerHTML = ""
    } else {
        alert("A algo de errado,nao pode repetir o mesmo numero,deve ser numeros entre 1 a 100 e nao pode deixar nada em branco.")
    }
    /* limpar o valor ao add*/
    num.value = ``
    /*reseta a tela de escrever o numero para escrever o proximo*/
    num.focus()
} 

function finalizar() {
  if (vetores.length == 0) {
    alert ("Nao é possivel finalizar,escreva um numero")
  } else {
    let tot = vetores.length
    let maior = vetores[0]
    let menor = vetores[0]
    let soma = 0
    let media = 0
    /* descobrindo o maior e o menor valor */
    for(let pos in vetores) {
        soma += vetores[pos]
        media += vetores[pos] / tot
        if(maior < vetores[pos]) 
             maior = vetores[pos] 
        if (vetores[pos] < menor) 
             menor = vetores[pos]
        }
    

    res.innerHTML = ""
    res.innerHTML += `<p>Ao todo temos ${tot} numeros cadastrados </p>`
    res.innerHTML += `<p>O maior valor encontrado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor encontrado foi ${menor}</p>`
    res.innerHTML += `<p>A soma total dos numeros foi ${soma}</p>`
    /* toFixed para deixar apenas 2 casas depois da virgula. */
    res.innerHTML += `<p>A media total foi ${media.toFixed(2)}
    </p>`
  }
}
