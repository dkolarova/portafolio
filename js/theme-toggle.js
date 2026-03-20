const toggle = document.getElementById("themeToggle")
if(toggle){

const savedTheme = localStorage.getItem("theme")

if(savedTheme){
document.body.className = savedTheme
}

toggle.addEventListener("click", () => {

if(document.body.classList.contains("light")){

document.body.classList.remove("light")
document.body.classList.add("dark")
localStorage.setItem("theme","dark")

}

else{

document.body.classList.remove("dark")
document.body.classList.add("light")
localStorage.setItem("theme","light")

}

})
}