let links=document.getElementById("links")
let userdata=document.getElementById("user-info")
let user=document.getElementById("user")

if(localStorage.getItem("username")){
    links.remove()
    userdata.style.display="flex"
    user.innerHTML=localStorage.getItem("username")
    user.style.textTransform= "capitalize"
}

let logout= document.getElementById("logout").onclick=()=>{
    localStorage.clear()
    window.location="register.html"
}


 