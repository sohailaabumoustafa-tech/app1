let username=document.getElementById("username")
let password=document.getElementById("password")
let email=document.getElementById("email")
let registerbtn=document.getElementById("sign-up")

registerbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(username.value==""|| password.value=="" || email.value==""){
  
      Swal.fire({
  icon: "warning",
  title: "أدخل البيانات",
  text: "That thing is still around?",
  
});
} else{
        localStorage.setItem("username",username.value)
        localStorage.setItem("password",password.value)
        localStorage.setItem("email",email.value)

        setTimeout(()=>{
        
            window.location="login.html"
        } ,1500)
    }
})

let show = document.getElementById("show")
// show.onclick=()=>{///
    // if (show.checked){/
        // password.type="text"/
    // }else{/
        // password.type="password"/
    // }/
// }/

show.addEventListener("click" ,()=>{
    password.type=show.checked ? "text"  :"password"
})