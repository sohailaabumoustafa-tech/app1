// localStorage.setItem("username","sohaila")/
// localStorage.setItem("password","12345")/
// console.log (localStorage.getItem("username")),(localStorage.getItem("password"));/
// localStorage.removeItem("username")/
// localStorage.clear()/



let links=document.getElementById("links")
let userdata=document.getElementById("user-info")
let user=document.getElementById("user")

if(localStorage.getItem("username")){
    links.remove()
    userdata.style.display="flex"
    user.innerHTML=localStorage.getItem("username")
    user.style.textTransform= "capitalize"
}

let allproducts =document.querySelector(".products")
let products=[
    {
        id:1,
        title:"Dining set",
        color:"Off-white",
        desc:"A modern  dining set with 7 chairs and a stylish design",
        imageUrl:"./image/img14.jpg"
    },

    {
        id:2,
        title:"Bedroom",
        color:"Dark Gray",
        desc:"A modern bedroom with an elegant and comfortable design",
        imageUrl:"./image/img20.jpg" 
        
    },
    {
        id:3,
        title:"Table",
        color:"Black & gray",
        desc:"Modern living room table with glossy top and two storage drawers",
        imageUrl:"./image/img5.jpg" 
    },
    {
        id:4,
        title:"corner sofa",
        color:" Gray",
        desc:"A comfortable sofa with a modern and elegant design",
        imageUrl:"./image/img10.jpg" 
    },
    {
     id:5,
        title:"Coffee Corner",
        color:" Black",
        desc:"A modern mug-shaped corner for organizing coffee in a stylish way",
        imageUrl:"./image/img17.jpg" 
    },
]



function drowProduct(){
    let y =products.map((item)=>{
        return`
       <div class="product-item">
        <img src="${item.imageUrl}">
        <div class="product-desc">
          <h2>${item.title}</h2>
          <p>${item.desc}</p>
          <span>${item.color} </span>
        </div>
        <div class="product-action">
          <button class="add-to-cart" onclick="addToCart(${item.id})">Add To Cart</button>
          
          <i class="fa-solid fa-heart"></i>
        </div>
      </div> `
    })
    allproducts.innerHTML=y.join("")
}


drowProduct()



// function check(){/

// if(localStorage.getItem("username")){/
    // window.location="cartproducts.html"/
// }/
// else{/
    // window.location="login.html"//
// }/


// }/
let veiwproductdiv=document.querySelector(".veiwproduct div")
let badge=document.querySelector(".badge");
// let addeditem=[]/
let addeditem=localStorage.getItem("productincart") ? JSON.parse(localStorage.getItem("productincart")):[]
if(addeditem){
    addeditem.map(item =>{
        veiwproductdiv.innerHTML+=`<p>${item.title}</p>`
    })
    badge.style.display="block"
    badge.innerHTML=addeditem.length
}
function addToCart(id){
let chooseItem=products.find((item)=>item.id===id)
 veiwproductdiv.innerHTML+=`<p>${chooseItem.title}</p>`

addeditem=[...addeditem,chooseItem]
 localStorage.setItem("productincart",JSON.stringify(addeditem))

 let veiwproductdivp=document.querySelectorAll(".veiwproduct div p")

console.log(veiwproductdivp.length)
badge.innerHTML=veiwproductdivp.length

veiwproduct.style.display="block"
badge.style.display="block"
} 

let cart=document.querySelector(".cart")
let veiwproduct=document.querySelector(".veiwproduct")
cart.addEventListener("click",()=>{
    if(veiwproduct.innerHTML !=""){
        if(veiwproduct.style.display=="block"){
            veiwproduct.style.display="none"
        }else{
            veiwproduct.style.display="block"
        }
    }
})




