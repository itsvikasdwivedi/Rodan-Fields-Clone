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
  localStorage.setItem("button-press-data",JSON.stringify(product.Id));
  showdata(product.Id);
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
