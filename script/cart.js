
let allproducts =document.querySelector(".products")
let getcart=localStorage.getItem("productincart")
if(getcart){
    let item=JSON.parse(getcart)
    drowProduct(item)
}

function drowProduct(products){
    let y =products.map((item, index)=>{
        return`
       <div class="product-item">
        <img src="${item.imageUrl}">
        <div class="product-desc">
          <h2>${item.title}</h2>
          <p>${item.desc}</p>
          <span>${item.color}</span>
        </div>
        <div class="product-action">
          <button class="add-to-cart"  onclick="removefromcart(${index})">remove from cart</button>
        </div>
      </div> `
    })
    allproducts.innerHTML=y.join("")
}

 function removefromcart(index){
    let removeitems=JSON.parse(localStorage.getItem("productincart"))
removeitems.splice(index,1)
localStorage.setItem("productincart",JSON.stringify(removeitems))
drowProduct(removeitems)
    
let badge= document.querySelector(".badge")
   
   badge .innerHTML=removeitems.length
if(removeitems.length===0){
 badge.style.display="none"
  
 }else{
  badge.style.display="block"
 }
 console.log("hello",removeitems.length)

}



