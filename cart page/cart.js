import {navbar} from "../navbar.js";
import {footer} from "../footer.js";
navbar();
footer();


var prod=JSON.parse(localStorage.getItem("button-press-data"))||[];
let totalCost=0;
if(prod.length==0){
  document.getElementById("cardHead").innerHTML="";
      var err=document.getElementById("cart_container");
      err.innerHTML="";
      err.innerHTML=`
      <div id="errHead">
        <H3>Your Bag Is Empty</H3>
        <p>Shop now to add products to your bag.</p>
        <button id="startShop"><a href="#">START SHOPPING</a></button>
        </div>
      `
}

var product=[];
async function getit(id){
  try {
    
    var res = await fetch(`http://localhost:3786/product?Id=${id}`);
    var res2 = await res.json();
    console.log(res2[0]);
    product.push(res2[0]);
    showdata(product);
  } catch (error) {
    console.log(error)
  }
}

for(var i=0;i<prod.length;i++){
  getit(prod[i]);
}
const showdata=async(pro)=>{
  var proHere=document.getElementById("selectedProduct");
  proHere.innerHTML="";
  console.log(pro.length);
      pro.map((el,index)=>{
        let cartCount=1;
      var div = document.createElement("div");
      div.setAttribute("class","g_card_cart")
      
      var img = document.createElement("img");
      img.src=el.image;
      
      var div1 = document.createElement("div");
      
      var div2 = document.createElement("div");
      
      var p =document.createElement("p");
      p.setAttribute("id","g_productName")
      p.innerHTML=el.title;
      
      var div3 = document.createElement("div");
      div3.setAttribute("id","g_btns");
      
      
      var btn1 = document.createElement("button");
      btn1.setAttribute("id","g_decbtn");
      btn1.innerHTML=`<i class="fa-solid fa-minus"></i>`
      btn1.onclick=()=>{
        if(inputcart.value<=1){
          deleteIt(index);
        }else{
          inputcart.value=--cartCount;
          var price=inputcart.value*el.price;
          console.log(price)
          p2.innerHTML=`$${price}.00`
          totalCost -=+el.price;
          console.log(totalCost);
          document.getElementById("CartPrice").innerHTML=`
          $${totalCost}`
          document.getElementById("cartSaving").innerHTML=`
          $${Math.floor(totalCost*0.1)}`
          document.getElementById("CartTotal").innerHTML=`
          $${totalCost-Math.floor(totalCost*0.1)}`
        }
    }
    
    var inputcart = document.createElement("input");
    inputcart.value=cartCount;
    inputcart.type="number";
    inputcart.setAttribute("id","productCount")
    inputcart.setAttribute("class","inputcount")
    inputcart.setAttribute("min","0")
    inputcart.setAttribute("max","999")
    
    
    var btn2 = document.createElement("button");
    btn2.setAttribute("id","g_incbtn");
    btn2.innerHTML=`<i class="fa-solid fa-plus"></i>`
    btn2.onclick=()=>{
      inputcart.value=++cartCount;
      var price=inputcart.value*el.price
      console.log(price)
      p2.innerHTML=`$${price}.00`
      totalCost +=+el.price;
      document.getElementById("CartPrice").innerHTML=`
      $${totalCost}`
          document.getElementById("cartSaving").innerHTML=`
          $${Math.floor(totalCost*0.1)}`
          document.getElementById("CartTotal").innerHTML=`
          $${totalCost-Math.floor(totalCost*0.1)}`
        }
        
        var div4 = document.createElement("div");
        div4.setAttribute("class","lastDivcart");
        var delbtn =document.createElement("button");
        delbtn.innerHTML=`<i class="fa-solid fa-trash"></i>`
        delbtn.onclick=()=>{
          deleteIt(index);
        }
        var p2 = document.createElement("p");
        p2.innerHTML=`$${el.price}.00`;

        div3.append(btn1,inputcart,btn2);
        div4.append(delbtn,p2);
        div2.append(p,div3);
        div1.append(div2,div4);
        div.append(img,div1);
        proHere.append(div);

        totalCost +=+p2.innerHTML.split("$")[1];
        document.getElementById("CartPrice").innerHTML=`
        $${totalCost}`
        document.getElementById("cartSaving").innerHTML=`
        $${Math.floor(totalCost*0.1)}`
        document.getElementById("CartTotal").innerHTML=`
        $${totalCost-Math.floor(totalCost*0.1)}`
    })
  }
// }
  function deleteIt(ind){
  product.splice(ind,1);
  localStorage.setItem("item",JSON.stringify(product));
  showdata(product);
}


document.getElementById("couponbtn").addEventListener("click",()=>{
  var val = document.getElementById("coupon").value;
  if(val=='123456789'){
    var cpn=document.getElementById("cpn");
    cpn.classList.add("here");
    document.getElementById("cDis").innerHTML=`$${10}`
    var fTotal=+document.getElementById("CartTotal").innerText.split("$")[1]-10;
    document.getElementById("CartTotal").innerHTML=`
    $${fTotal}`
  }
})



// bag cart page


class CartItem{
  constructor(name, desc, img, price){
      this.name = name
      this.desc = desc
      this.img=img
      this.price = price
      this.quantity = 1
 }
}

class LocalCart{
  static key = "cartItems"

  static getLocalCartItems(){
      let cartMap = new Map()
   const cart = localStorage.getItem(LocalCart.key)   
   if(cart===null || cart.length===0)  return cartMap
      return new Map(Object.entries(JSON.parse(cart)))
  }

  static addItemToLocalCart(id, item){
      let cart = LocalCart.getLocalCartItems()
      if(cart.has(id)){
          let mapItem = cart.get(id)
          mapItem.quantity +=1
          cart.set(id, mapItem)
      }
      else
      cart.set(id, item)
     localStorage.setItem(LocalCart.key,  JSON.stringify(Object.fromEntries(cart)))
     updateCartUI()
      
  }

  static removeItemFromCart(id){
  let cart = LocalCart.getLocalCartItems()
  if(cart.has(id)){
      let mapItem = cart.get(id)
      if(mapItem.quantity>1)
     {
      mapItem.quantity -=1
      cart.set(id, mapItem)
     }
     else
     cart.delete(id)
  } 
  if (cart.length===0)
  localStorage.clear()
  else
  localStorage.setItem(LocalCart.key,  JSON.stringify(Object.fromEntries(cart)))
     updateCartUI()
  }
}


const cartIcon = document.querySelector('.fa-cart-arrow-down')
const wholeCartWindow = document.querySelector('.whole-cart-window')
wholeCartWindow.inWindow = 0
const addToCartBtns = document.querySelectorAll('.add-to-cart-btn')
addToCartBtns.forEach( (btn)=>{
  btn.addEventListener('click', addItemFunction)
}  )

function addItemFunction(e){
  const id = e.target.parentElement.parentElement.parentElement.getAttribute("data-id")
  const img = e.target.parentElement.parentElement.previousElementSibling.src
  const name = e.target.parentElement.previousElementSibling.textContent
  const desc = e.target.parentElement.children[0].textContent
  let price = e.target.parentElement.children[1].textContent
  price = price.replace("Price: $", '')
  const item = new CartItem(name, desc, img, price)
  LocalCart.addItemToLocalCart(id, item)
console.log(price)
}


cartIcon.addEventListener('mouseover', ()=>{
if(wholeCartWindow.classList.contains('hide'))
wholeCartWindow.classList.remove('hide')
})

cartIcon.addEventListener('mouseleave', ()=>{
  // if(wholeCartWindow.classList.contains('hide'))
  setTimeout( () =>{
      if(wholeCartWindow.inWindow===0){
          wholeCartWindow.classList.add('hide')
      }
  } ,500 )
  
  })

wholeCartWindow.addEventListener('mouseover', ()=>{
   wholeCartWindow.inWindow=1
})  

wholeCartWindow.addEventListener('mouseleave', ()=>{
  wholeCartWindow.inWindow=0
  wholeCartWindow.classList.add('hide')
})  


function updateCartUI(){
  const cartWrapper = document.querySelector('.cart-wrapper')
  cartWrapper.innerHTML=""
  const items = LocalCart.getLocalCartItems()
  if(items === null) return
  let count = 0
  let total = 0
  for(const [key, value] of items.entries()){
      const cartItem = document.createElement('div')
      cartItem.classList.add('cart-item')
      let price = value.price*value.quantity
      price = Math.round(price*100)/100
      count+=1
      total += price
      total = Math.round(total*100)/100
      cartItem.innerHTML =
      `
      <img src="${value.img}"> 
                     <div class="details">
                         <h3>${value.name}</h3>
                         <p>${value.desc}
                          <span class="quantity">Quantity: ${value.quantity}</span>
                             <span class="price">Price: $ ${price}</span>
                         </p>
                     </div>
                     <div class="cancel"><i class="fas fa-window-close"></i></div>
      `
     cartItem.lastElementChild.addEventListener('click', ()=>{
         LocalCart.removeItemFromCart(key)
     })
      cartWrapper.append(cartItem)
  }

  if(count > 0){
      cartIcon.classList.add('non-empty')
      let root = document.querySelector(':root')
      root.style.setProperty('--after-content', `"${count}"`)
      const subtotal = document.querySelector('.subtotal')
      subtotal.innerHTML = `SubTotal: $${total}`
  }
  else
  cartIcon.classList.remove('non-empty')
}
document.addEventListener('DOMContentLoaded', ()=>{updateCartUI()})