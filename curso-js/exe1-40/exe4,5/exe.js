FullName = document.querySelector("#Nome")
form = document.querySelector("#form")
form.addEventListener("submit",function(e) {
    alert(FullName.value + " / " + FullName.value.length)
    FullName.value = ""
    FullName.focus()
     
    e.preventDefault()
})
