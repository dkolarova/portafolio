const btn = document.getElementById("menuBtn")
const menu = document.querySelector("nav ul")

if(btn){

btn.addEventListener("click",()=>{
menu.classList.toggle("show")
})

}