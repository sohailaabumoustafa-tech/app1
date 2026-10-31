let username=document.getElementById("username")
let password=document.getElementById("password")
let loginbtn=document.getElementById("sign-in")

let getusername=localStorage.getItem("username")
let getpasssword=localStorage.getItem("password")

loginbtn.addEventListener('click',(e)=>{
    e.preventDefault()
    if(username.value=="" || password.value==""){
       Swal.fire({
  icon: "error",
  title: "Oops...",
  text: "place fill data!",
  
});
    }
    else{
        if(getusername.trim()===username.value.trim() && getpasssword===password.value){
            setTimeout(()=>{
                window.location="index.html"
            },1000)
        }else{
            alert("username or password is wrong")
        }
    }
})

show.addEventListener("click" ,()=>{
    password.type=show.checked ? "text"  :"password"
})