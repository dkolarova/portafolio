const words = ["Developer","Designer","Creator"]
let i = 0
let j = 0
let current = ""
let isDeleting = false

function type(){

current = words[i]

if(isDeleting){
j--
}else{
j++
}

document.getElementById("typing").textContent = current.substring(0,j)

if(!isDeleting && j === current.length){
isDeleting = true
setTimeout(type,1000)
return
}

if(isDeleting && j === 0){
isDeleting = false
i = (i + 1) % words.length
}

setTimeout(type, isDeleting ? 60 : 120)
}

type()