
function Verificar() {
  var date = new Date()
  var year = date.getFullYear()
  var fyear = document.getElementById("idade")
  var res = document.getElementById("res")
  var img = document.createElement('img')
  img.setAttribute('id','photo')

if (fyear.value.length === 0 || fyear.value > year) {
        alert(" [Erro!!],os dados parece esta inválidos")
} else {
      var fsex = document.getElementsByName("sexo")
      var yearold = year - Number(fyear.value)
      var genre = ""
      if (fsex[0].checked) {
        genre = "Homen"

     if(yearold >= 0 && yearold <10) {
        /*Criança*/
        img.setAttribute('src','https://previews.123rf.com/images/mariis/mariis1806/mariis180600054/102875041-portrait-of-a-boy-of-4-years-old-on-a-natural-background.jpg')

      }else if(yearold <21) {
        /*adolescente*/
        img.setAttribute('src','https://media.istockphoto.com/id/622041042/photo/portrait-of-a-young-man-smiling.jpg?s=612x612&w=0&k=20&c=m9GQE3-zBEcEVyrOWqmeGtszw0T_zsV4NXm1W0MgP1s=')

      }else if(yearold < 50) {
        /*adulto*/
        img.setAttribute('src','https://media.istockphoto.com/id/1328677010/photo/successful-businessman.jpg?s=612x612&w=0&k=20&c=IJQgFZX36U7l5ChYjfQJVmFIQh1plJmr2r1zQRRPLuA=')

      } else {
        /*idoso*/
        img.setAttribute('src','https://t4.ftcdn.net/jpg/01/27/97/23/360_F_127972340_IdaSXaA5FRMHpwtANA2FZfqnnATi8leG.jpg')
      }

      } else if (fsex[1].checked) {
        genre = "Mulher"
      
      if(yearold >= 0 && yearold <10) {
        /*Criança*/
        img.setAttribute('src','https://thumbs.dreamstime.com/z/portrait-four-year-old-girl-portrait-four-year-old-girl-walk-park-120310689.jpg')

      }else if(yearold <20) {
        /*adolescente*/
        img.setAttribute('src','https://previews.agefotostock.com/previewimage/medibigoff/b785da2af42ca002813091f31073ea1b/b20-730172.jpg')

      }else if(yearold < 50) {
        /*adulto*/
        img.setAttribute('src','https://www.shutterstock.com/image-photo/portrait-beautiful-40yearold-blond-woman-260nw-720057214.jpg')

      } else {
        /*idoso*/
        img.setAttribute('src','https://t3.ftcdn.net/jpg/01/41/00/56/360_F_141005630_clElMFRAdVUEMg0fYlbyZJzP1Glt2BxU.jpg')
      }
    }
  } 
  res.style.textAlign = 'center'
  res.innerHTML = `Detectamos  ${genre} com ${yearold} anos`
  res.appendChild(img)
}