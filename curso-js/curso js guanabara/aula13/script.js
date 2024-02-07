
function Loading() {

var msg = document.getElementById("msg")
var img = document.querySelector("img.Photo")
var date = new Date()
var hour = date.getHours()
msg.innerHTML = `Now is ${hour} hours`

if(hour >= 0 && hour< 12) {

    img.src = "Fotos/morning.jpg"
    document.body.style.background = "#BED3DE"

} else if (hour >=12 && hour < 18) {

    img.src = "Fotos/afternoon.jpg"
    document.body.style.background = '#42507D'

}else {
    img.src = "https://t4.ftcdn.net/jpg/04/39/46/97/360_F_439469718_Eqtx5ylTmEu9P59JkNvFKBQa5tLChlDm.jpg" /*Fuciona com link tambem*/

    document.body.style.background = "#10355F"
}
}