import {footer} from "../footer.js";
footer();
var currPro=[{
    "Id": 1,
    "title": "R+F Instant Targeted Firming Gel™",
    "image": "https://www.rodanandfields.com/en-us/medias/ENG010-What-sIncluded-570x570.png?context=bWFzdGVyfGltYWdlc3wxODU2NXxpbWFnZS9wbmd8aW1hZ2VzL2g5YS9oNjUvMTQ5NjkwODY1NDE4NTQucG5nfGNlNDBkMDdkYzlkMDFmZDQ1MDg4ZDFmMDA0MmUzYzc2NjgwNmQ3ZDgxNWExYmY3YWRmYzcwYzYyOWY3NTkyZmQ",
    "status": "New Arrival",
    "info": "Multi-targeted skincare treatment that instantly and visibly firms, tightens + smooths.",
    "price": 105,
    "rating": "",
    "rating_votes": "",
    "perk_price": 95,
    "category": "Face Serums",
    "application_area": "Face",
    "skin_concern": "Fine Lines & Wrinkles",
    "product_line": "Redefine",
    "img_1": "https://www.rodanandfields.com/en-us/medias/ENFG010-900X900-MOBILE.jpg?context=bWFzdGVyfGltYWdlc3wyMzM5OHxpbWFnZS9qcGVnfGltYWdlcy9oZjAvaDMwLzE0OTY5MDg2NjQwMTU4LmpwZ3w2MDM5ODk3MDQwYzQ5ZTRjNzQ3OTBlN2E4ZmYwMGM3ZDlkYWVmNDBmMTc5ZmY3ZGE0ZWRlZTdjNmFiZTJjMTc1",
    "img_2": "",
    "img_3": "https://www.rodanandfields.com/en-us/medias/ENFG010-ITFG-Texture1-570x570.jpg?context=bWFzdGVyfHJvb3R8ODE2N3xpbWFnZS9qcGVnfGhkOS9oMzcvMTQ5NjkwODcxNjQ0NDYuanBnfGJlODFiNDMzNGJmODAwOTJkZWQwY2ExNWMzMjJiMzU0Mjc2ZjNhNjE4NjdjZDg4MmNkZTNjYzE3MjZjZmM1MDk",
    "img_4": "https://www.rodanandfields.com/en-us/medias/ENFGR10-ITFG-Refill-GIF-570x570.gif?context=bWFzdGVyfHJvb3R8NDAyNTkwfGltYWdlL2dpZnxoMjEvaDA1LzE0OTY5MDg3NTU3NjYyLmdpZnw4NTNlNDQ4NWZiYzdhMjkwNzQ0MDUzNTA5OGI5Nzg3MjVlN2NlYjI1MzdhYTNhNGE5MjJjZTI1MTlkMjU4NDVj"
},{
    "Id": 3,
    "title": "R + F Lash Boost",
    "image": "https://www.rodanandfields.com/en-us/medias/ENHLSH01-Regimen-Explainer-R-F-Lash-Boost-570x570-Desktop.png?context=bWFzdGVyfGltYWdlc3wxMDc0OHxpbWFnZS9wbmd8aW1hZ2VzL2hmMS9oYWMvMTQ1MzIwNDI1ODgxOTAucG5nfDQyNTQ0OGUzYmMwZTJkM2YzNzE1MjE2NzQ1M2YxMWQ5M2E3ZWQ2MjAwMDA3MzFmNjQyOWUwNDU3OWZmMTkzZDY",
    "status": "Best Seller",
    "info": "Applied nightly to promote the appearance of longer, stronger and darker-looking lashes.",
    "price": 155,
    "rating": "4.6",
    "rating_votes": "(8276)",
    "perk_price": 140,
    "category": "Face Serums",
    "application_area": "Eyelashes ",
    "skin_concern": "Fine Lines & Wrinkles",
    "product_line": "Redefine",
    "img_1": "https://www.rodanandfields.com/en-us/medias/ENHLSH01-detail.jpg?context=bWFzdGVyfGltYWdlc3wzMjIzMHxpbWFnZS9qcGVnfGltYWdlcy9oOGEvaGRiLzg4MjE4NjAyMDQ1NzQuanBnfDI5N2MzYWVlOTg4NjBhYzJiYzk0ZTY2ODU0YTk1OGY1NTFmMWFjMjIxMTRjNzUwNmUyZTJlM2JmMzhiZDIzZDU",
    "img_2": "https://www.rodanandfields.com/en-us/medias/ENHLSH01-Lash-Carousel-51x51.jpg?context=bWFzdGVyfGltYWdlc3wzMTQyfGltYWdlL2pwZWd8aW1hZ2VzL2hmNi9oM2UvMTUzOTU0MTQ5MzM1MzQuanBnfDRmMjZhNzczNjc0NjYzZjkyMDhhMDBiODgwNzMxYzBiYTcxMjg3MDY2YmFmODdlMTliYTk5NzBkZTcxN2UzMDQ",
    "img_3": "https://www.rodanandfields.com/en-us/medias/ENHLSH01-PDP-lifestyle-1168x1168-MOBILE.jpg?context=bWFzdGVyfGltYWdlc3w3NTIxNnxpbWFnZS9qcGVnfGltYWdlcy9oYzUvaDMxLzg4MjE4Nzg5MTUxMDIuanBnfDI2MDVlY2NlZDcxNzIxN2MzM2JiZWEwZTFkYTdjYzljYWVhMGNkODlhOTk2Y2Y0NDdhOTdlZjkyZjdiZDhiMzQ"
  }]
currPro=currPro[currPro.length-1];
document.getElementById("g_title").innerHTML=`${currPro.title} | Rodan + Fields®`
const showProduct=()=>{
    var content=document.getElementById("g_mainContainer");
    content.innerHTML=""
    var el=currPro;
    // currPro.map(el=>{
        document.getElementById("g_proHead").innerHTML=`
        Home | All Products | ${el.title}
        `
        var div = document.createElement("div");
        div.setAttribute("class","listImage");

        var li1 = document.createElement("li");
        var img1 = document.createElement("img");
        img1.src=el.img_1;
        li1.appendChild(img1)
        var li2 = document.createElement("li");
        var img2 = document.createElement("img");
        if(el.img_2==""){
            li2.classList.add("dontShow");
        }else{
            img2.src=el.img_2;
            li2.appendChild(img2)
        }
        var li3 = document.createElement("li");
        var img3 = document.createElement("img");
        if(el.img_3==""){
            li3.classList.add("dontShow");
        }else{
            img3.src=el.img_3;
            li3.appendChild(img3)
        }
        var li4 = document.createElement("li");
        var img4 = document.createElement("img");
        if(el.img_4==""){
            li4.classList.add("dontShow");
        }else{
            img4.src=el.img_4;
            li4.appendChild(img4)
        }
        img1.addEventListener("click",()=>{
            document.getElementById("changeImage").src=el.img_1;
        })
        img2.addEventListener("click",()=>{
            document.getElementById("changeImage").src=el.img_2;
        })
        img3.addEventListener("click",()=>{
            document.getElementById("changeImage").src=el.img_3;
        })

        img4.addEventListener("click",()=>{
            document.getElementById("changeImage").src=el.img_4;
        })
        div.append(li1,li2,li3,li4);


        var div2 = document.createElement("div");
        div2.setAttribute("class","mainImage");
        var mImage = document.createElement("img");
        mImage.setAttribute("id","changeImage")
        mImage.src = el.image;
        div2.appendChild(mImage);


        var div3 = document.createElement("div");
        div3.setAttribute("class","fullInfo");
        var p = document.createElement("p");
        p.innerHTML=el.status;


        var title = document.createElement("h2");
        title.innerHTML=el.title;
        
        var p2= document.createElement("p");
        p2.innerHTML=el.info+" Gives amazing results within the use of just 4 weeks";

        var size =  document.createElement("p");
        size.innerHTML=`Size: 10 mL / 0.33 Fl. Oz. <br>
        Typical Use: Once daily, in the AM`

        var priceBox = document.createElement("div");
        priceBox.setAttribute("id","priceBox");
        var price1 = document.createElement("div");
        
        var rate = document.createElement("span");
        rate.setAttribute("id","g_retailPrice");
        rate.innerHTML=`$${el.price}`
        
        var br1 = document.createElement("br");
        var rateName = document.createElement("span");
        rateName.innerHTML="Retail Price"
        
        var price2 = document.createElement("div");
        
        var rate2 = document.createElement("span");
        rate2.setAttribute("id","g_perkedPrice");
        rate2.innerHTML=`$${el.perk_price}`
        
        var br2 = document.createElement("br");
        var rateName2 = document.createElement("span");
        rateName2.innerHTML="Perked Price"
        price1.append(rate,br1,rateName)
        price2.append(rate2,br2,rateName2)
        priceBox.append(price1,price2)
        var hr1 = document.createElement("hr");
        
        var p3= document.createElement("p");
        p3.innerHTML=`4 interest-free payments of $${Math.floor(el.price/4)} with `;  
        
        var klara = document.createElement("span");
        klara.innerHTML="Klarna. ";
        klara.style.fontWeight="600"
        
        var learn = document.createElement("a");
        learn.innerText="Learn more";
        learn.style.color="#222222";
        p3.append(klara,learn);
        
        var hr2 = document.createElement("hr");
        
        var btn = document.createElement("button");
        btn.setAttribute("id","g_add");
        btn.innerHTML="ADD TO BAG";
        
        var offerdiv = document.createElement("div");
        offerdiv.setAttribute("class","offer60");
        offerdiv.innerHTML=`
        <span>60 Day Money Back Guarantee</span><br>
        <span>Don't love it? It's on us. <a href="#" style="color: #222222;">Learn More</a></span>
        `
        
        var hr3 = document.createElement("hr");
        
        var gdDiv = document.createElement("div");
        gdDiv.setAttribute("id","gd1");
        gdDiv.setAttribute("class","g_details");
        gdDiv.innerHTML=`
        <span>DETAILS</span>
        <i class="fa-solid fa-chevron-down"></i>
        `
        
        
        var gdpara = document.createElement("div");
        gdpara.setAttribute("id","gd1show");
        gdpara.setAttribute("class","g_para1");
        gdpara.innerHTML=`
        <p><span class="g_bold">What it is:</span>  A clinically tested, multi-targeted skincare treatment that instantly* and visibly firms, tightens + smooths wrinkles, crow’s feet, sagging skin, under eye bags and expression lines. Overtime with continued use, targeted area will appear tighter with visibly fewer fine lines. Eco-friendly because it’s refillable! Keep the outer casing and cap for your refill. <br>
        *DISCLAIMER: Instant benefits take effect within approximately five minutes and are temporary. With continued use, benefits start to show at 4 weeks. <br>               
        <span class="g_bold">Why you need it:</span> Aging, diet, lifestyle and UV or pollution exposure are all factors that can lead to an overall thinning of the skin. This treatment visibly plumps skin while improving the appearance of lines and wrinkles. <br>                
        If R+F Instant Targeted Firming Gel™ is part of a PC Perks enrollment order or added to a PC Perks/CRP replenishment order, the subsequent order will be the R+F Instant Targeted Firming Gel™ Refill. Preferred Customers and Consultants can change their orders at any time before it ships. <br>

        ITEM NUMBER: ENFG010</p>
        <hr>
        <h3>KEY CONCERNS</h3>
        <p>Sagging skin around the eyes, under eye bags, and expression lines (including crow’s feet, frown lines (11’s), forehead lines and lines around the mouth.)</p>
        <hr>
        <h3>SKIN TYPE</h3>
        <p>Suitable for Normal, Dry, Oily and Combination</p>
        <hr>
        <h3>KEY BENEFITS</h3>
        <p>Targeted treatment visibly firms, tightens + smooths skin in just 5 minutes*, plus reduces visible signs of aging over time*</p>
        `
        
        var hr4 = document.createElement("hr");

        var gdDiv2 = document.createElement("div");
        gdDiv2.setAttribute("class","g_details");
        gdDiv2.innerHTML=`
        <span>INGREDIENTS</span>
        <i class="fa-solid fa-chevron-down"></i>
        `

        div3.append(p,title,p2,size,priceBox,hr1,p3,hr2,btn,offerdiv,hr3,gdDiv,gdpara,hr4,gdDiv2,)
        
        content.append(div,div2,div3)

    // })
    document.getElementById("gd1").addEventListener("click",()=>{
    document.getElementById("gd1show").classList.toggle("show")
    })
}
            
window.addEventListener("load",showProduct);

