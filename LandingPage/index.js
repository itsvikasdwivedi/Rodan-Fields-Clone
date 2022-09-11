import{footer} from "../footer.js"
import{navbar} from "../navbar.js"
navbar();
footer();

shoProduct();
// document.getElementById("showP").addEventListener("click",()=>{
//    window.location.href="../products_data/products.html"
// })
document.getElementById("showAllDerma").addEventListener("click",()=>{
   window.location.href="../products_data/products.html"
})
let data;
let result;
async function shoProduct(){

    try{
          data = await fetch("https://json-my-products.herokuapp.com/products");
          result = await data.json();
         
    //      document.getElementById("ProductParent").innerHTML="";


    //      document.getElementById("ProductParent").innerHTML =+ ` <div id="TextDiv" >
    //      <div>
    //      <h1>Discover the life-changing products loved by millions.</h1>
    //      <a href="">Shop Best Sellers</a>
    //      </div>
    //      <img src="https://www.rodanandfields.com/en-us/medias/Best-Sellers-Image-Desktop.jpg?context=bWFzdGVyfHJvb3R8NjA5MTd8aW1hZ2UvanBlZ3xoOTcvaGNkLzEyODg5MTg3ODExMzU4LmpwZ3w2ZGZjZGYxNzg4ZDY2ODI2NzQyZTMyNGI2YmExYmRkNGNjYTBkNGI4MzE5OTIwM2M4M2Q1MGZlMmY1YmFjMDJk" alt="">
         

    // </div>`
    
    result.map((value,en)=>{
        // if(en<15){
        //     // productDisplay(value);
        // }
      
        if(en>=10 && 16>en){
            DesignedDisplay(value)
        }
       
    })



    }catch(err){
        console.log("Error Aya Hai"+err.message)

    }

}

//Derm-Designed



function DesignedDisplay(value){

    var div = document.createElement("div");

    var image = document.createElement("img");
    image.setAttribute("src",value.image);
    var h3 = document.createElement("h3");
    h3.innerText= value.title;
   
   image.addEventListener("mouseover",()=>{
    image.setAttribute("src",value.hover)
})


image.addEventListener("mouseleave",()=>{
    image.setAttribute("src",value.image)
})


  image.addEventListener("click",()=>{
    DermClickImage(value);
  })
    div.append(image,h3);
    document.getElementById("DermIteam").append(div);

}



document.getElementById("bantadhaar").addEventListener("click", () => {
    window.location.href = "./"
} )







function productDisplay(value){

//     <div  id="ProductItem">

//     <img src="https://www.rodanandfields.com/en-us/medias/ENFM030-Thumbnail-458x458.jpg?context=bWFzdGVyfGltYWdlc3wyNTQ2MHxpbWFnZS9qcGVnfGltYWdlcy9oZmQvaGQ2LzE0ODgyMTk1ODk4Mzk4LmpwZ3wyYThhMjQ0NTc4YjI1ZmQ1ODY3MDE5NGMyYjk3MjA2MTRmNDQ2MzdmOGVhYzMxYTFmMDk1YmIyY2Q5NDhjMzIw" alt="">
//     <h3>shakti FRS Scroum</h3>
//     <p>Nightly conditioning serum gives the appearance of longer, darker-looking lashes</p>
//     <h3>$ 175</h3>
//     <p>Retail Price</p>
//     <p>★★★★☆  <span>4.5 <span>(4684)</span></span></p>
//     <button>ADD  TO BAG</button>
//  </div>

var parentDiv = document.createElement('div');
parentDiv.setAttribute("id","ProductItem");
var  image = document.createElement("img");
image.setAttribute("src",value.image);

var title  = document.createElement("h3");
title.innerText = value.title;
var des = document.createElement("p");
des.innerText  = value.info;
var Price = document.createElement("h3");
Price.innerText = "$"+value.price;
var retailPrice = document.createElement("p");
retailPrice.innerText = "Retail Price";
var rating = document.createElement("p");
 var ratingNo =  Number(value.rating );
 if(ratingNo>0 && 2>ratingNo ){
    rating.innerText = "★☆☆☆☆ "
 }else if(ratingNo>=2 && 3>ratingNo){
    rating.innerText = "★★☆☆☆ "
    if(ratingNo>2){
        rating.innerText = "★★★☆☆ "
    }
 }else if(ratingNo>=3 && 4>ratingNo){
    rating.innerText = "★★★☆☆ "
    if(ratingNo>3){
        rating.innerText = "★★★★☆ "
    }
 }else if(ratingNo>=4 && 5>ratingNo){
    rating.innerText = "★★★★☆ "

    if(ratingNo>4){
        rating.innerText = "★★★★★ "
    }
 }else if(ratingNo>=5){
    rating.innerText = "★★★★★ "
 }else{
    rating.innerText = "☆☆☆☆☆ "
 }

 var ratingInNO = document.createElement('span');
 ratingInNO.innerText = " "+ratingNo+" ";
 var reviews = document.createElement('span');
 reviews.innerText = value.rating_votes;
 ratingInNO.append(reviews);
 rating.append(ratingInNO);

 var addtobag = document.createElement("button");
 addtobag.innerText = "ADD  TO BAG";
 var bestserl = document.createElement("h5");
 if(value.status!=""){
    bestserl.innerText = value.status;
 }

 addtobag.addEventListener("click",function(){
    addToCard(value);
 })
if(ratingNo==0){
   rating.style.visibility = "hidden"
}
 parentDiv.append(image,title,des,Price,retailPrice,rating,addtobag)
 if(value.status!=""){
    parentDiv.append(bestserl)
 }
 document.getElementById("ProductParent").append(parentDiv)

 image.addEventListener("click",()=>{
    console.log(value.Id)

    localStorage.setItem("card-press-data",JSON.stringify(value.Id));
    location.href = "../productInfo.html"

 })







}


//product
function addToCard(value){

  
}

function DermClickImage(value){
    localStorage.setItem("card-press-data",JSON.stringify(value.Id));
    location.href = "../productInfo.html"
    

}

//dermaAllProduct
document.getElementById("showAllDerma").addEventListener("click",()=>{
    location.href = "../products_data/products.html"
   
})




// home page bestseller ptag
document.getElementById("bestSeller").addEventListener("click",()=>{
    location.href = "../products_data/products.html"
})




// main buton 
document.getElementById("mainShopNow").addEventListener("click",()=>{
    location.href = "../products_data/products.html"

})


document.getElementById("bestSeller").addEventListener("click",()=>{
    location.href = "../products_data/products.html"

})