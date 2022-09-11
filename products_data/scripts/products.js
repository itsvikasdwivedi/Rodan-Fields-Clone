import { footer } from "../../footer.js";
import { navbar } from "../../navbar.js";

footer();
navbar();

localStorage.setItem("filter_key",JSON.stringify([]));
    var five_star = `<div id="five-star">
            <div><img src="rating-image/full_star.svg"></div>
            <div><img src="rating-image/full_star.svg"></div>
            <div><img src="rating-image/full_star.svg"></div>
            <div><img src="rating-image/full_star.svg"></div>
            <div><img src="rating-image/full_star.svg"></div>
        </div>`;
    
    var four_star = `<div id="four-star">
            <div><img src="rating-image/full_star.svg"></div>
            <div><img src="rating-image/full_star.svg"></div>
            <div><img src="rating-image/full_star.svg"></div>
            <div><img src="rating-image/full_star.svg"></div>
            <div><img src="rating-image/blank_star.svg"></div>
        </div>`

    var three_star = `<div id="three-star">
            <div><img src="rating-image/full_star.svg"></div>
            <div><img src="rating-image/full_star.svg"></div>
            <div><img src="rating-image/full_star.svg"></div>
            <div><img src="rating-image/blank_star.svg"></div>
            <div><img src="rating-image/blank_star.svg"></div>
        </div>`
    const fetchingdata= async (min=0,max=24) =>{
        if(max>84){
            max = max-84+min;
        }
        if(min!==84){
            let res = await fetch(`https://clone-of-rodan.herokuapp.com/product?_start=${min}&_end=${max}`);
            let obj = await res.json();
            display_products(obj,min,max);
        }
    }    
    const display_products = (data,min,max) => {
        console.log(data);
        data.forEach((element,index) => {
            let card = document.createElement("div");
            card.setAttribute("class","card");

            let upper = document.createElement("div");
            upper.setAttribute("class","upper");
                let img_div =  document.createElement("div");
                img_div.setAttribute("class","img-div");
                    let image = document.createElement("img");
                    image.setAttribute("src",element.image);
                    image.setAttribute("alt",index);
                img_div.append(image);

                let sts = document.createElement("div");
                sts.setAttribute("class","status");
                sts.innerText = element.status;

                let ttl = document.createElement("div");
                ttl.setAttribute("class","title");
                ttl.innerText = element.title;

                let ifo = document.createElement("div");
                ifo.setAttribute("class","info");
                ifo.innerText = element.info;

                let prc = document.createElement("div");
                prc.setAttribute("class","price");
                prc.innerText = "$"+element.price;

                var rating_wrapper = document.createElement("div");
                rating_wrapper.setAttribute("class","rating-wrapper");

                    let rtgstar = document.createElement("div");
                    rtgstar.setAttribute("class","rating-star");
                    if(element.rating==""){
                        rating_wrapper.style.display = "none";
                    }
                    else{
                        if(Number(element.rating)<3.5){
                            rtgstar.innerHTML = three_star;
                        }
                        else if(Number(element.rating)<4){
                            rtgstar.innerHTML = four_star;
                        }
                        else{
                            rtgstar.innerHTML = five_star;
                        }
                        
                    }
                    let rtg = document.createElement("div");
                    rtg.setAttribute("class","rating");
                    rtg.innerText = element.rating;

                    let vt = document.createElement("div");
                    vt.setAttribute("class","votes");
                    vt.innerText = element.rating_votes;
                rating_wrapper.append(rtgstar,rtg,vt);
            upper.append(img_div,sts,ttl,ifo,prc,rating_wrapper);

            let lower = document.createElement("div");
            lower.setAttribute("class","lower");
                let addtobagbtn = document.createElement("button");
                addtobagbtn.setAttribute("id","addtobag");
                addtobagbtn.innerText = "ADD To BAG"
            lower.append(addtobagbtn);
            upper.addEventListener("click",function(){
                card_pressing_func(element.Id);
            })
            addtobagbtn.addEventListener("click",function(){
                button_pressing_func(element.Id);
            })
            card.append(upper,lower);
            document.getElementById("products").append(card);

        });
        if(max!==84){

            document.getElementById("result").innerHTML = "";

            let resultdata = document.createElement("div");
            resultdata.innerText = "Showing " + max + " of 84";
            let btn = document.createElement("button");
            btn.innerText = "SEE MORE";
            btn.addEventListener("click",function(){
                fetchingdata(max,max+24);
            })
            document.getElementById("result").append(resultdata,btn);
        }
        else{
            document.getElementById("result").innerHTML = null;
        }
        
        
    }
    fetchingdata();
    // filter code start
    let upper = document.createElement("div");
    upper.setAttribute("id","upper");

        let click_data_sep = document.createElement("div");
        click_data_sep.setAttribute("id","click_data_sep");

            let heading_icon_sep = document.createElement("div");
            heading_icon_sep.setAttribute("id","click_data_sep");
                let h3 = document.createElement("h3");
                h3.setAttribute("id","filter_para");
                h3.innerText = "FILTER BY";

                let icon_box = document.createElement("div");
                icon_box.setAttribute("id","icon_box");
                //     let icon_img = document.createElement("img");
                //     img.setAttribute("src","abc");
                //     img.setAttribute("alt","icon");
                // icon_box.append(icon_img);
            heading_icon_sep.append(h3,icon_box);

            let click_desc_div = document.createElement("div");
            click_desc_div.setAttribute("id","click_desc_div");

        click_data_sep.append(heading_icon_sep,click_desc_div);
    upper.append(click_data_sep);

    document.getElementById("filter").append(upper);
    //lower portion of filter
    
    let lower = document.createElement("div");
    lower.setAttribute("id","lower");
    /* //firstfi portion filter */
        let first_filter_div1 = document.createElement("div");
        first_filter_div1.setAttribute("class","filter_div1");
        //1
            let f_div1 = document.createElement("div");
            f_div1.setAttribute("class","f_div");
                let f_check1 = document.createElement("input");
                f_check1.setAttribute("type","checkbox");
                f_check1.addEventListener("change",function(){
                    filter_products("Regimen","category",f_check1.checked);
                });
                let f_label1 = document.createElement("label");
                f_label1.setAttribute("class","f_label");
                f_label1.innerText = "Regimen";
            f_div1.append(f_check1,f_label1);
        //2
            let f_div2 = document.createElement("div");
            f_div2.setAttribute("class","f_div");
                let f_check2 = document.createElement("input");
                f_check2.setAttribute("type","checkbox");
                f_check2.addEventListener("change",function(){
                    filter_products("Face Serums","category",f_check2.checked);
                });
                let f_label2 = document.createElement("label");
                f_label2.setAttribute("class","f_label");
                f_label2.innerText = "Face Serums";
            f_div2.append(f_check2,f_label2);
        //3
            let f_div3 = document.createElement("div");
            f_div3.setAttribute("class","f_div");
                let f_check3 = document.createElement("input");
                f_check3.setAttribute("type","checkbox");
                f_check3.addEventListener("change",function(){
                    filter_products("Eyes","category",f_check3.checked);
                });
                let f_label3 = document.createElement("label");
                f_label3.setAttribute("class","f_label");
                f_label3.innerText = "Eyes";
            f_div3.append(f_check3,f_label3);
        //4
        let f_div4 = document.createElement("div");
            f_div4.setAttribute("class","f_div");
                let f_check4 = document.createElement("input");
                f_check4.setAttribute("type","checkbox");
                f_check4.addEventListener("change",function(){
                    filter_products("Face Masks","category",f_check4.checked);
                });
                let f_label4 = document.createElement("label");
                f_label4.setAttribute("class","f_label");
                f_label4.innerText = "Face Masks";
            f_div4.append(f_check4,f_label4); 
        //5
            let f_div5 = document.createElement("div");
            f_div5.setAttribute("class","f_div");
                let f_check5 = document.createElement("input");
                f_check5.setAttribute("type","checkbox");
                f_check5.addEventListener("change",function(){
                    filter_products("Hand & Body","category",f_check5.checked);
                });
                let f_label5 = document.createElement("label");
                f_label5.setAttribute("class","f_label");
                f_label5.innerText = "Hand & Body";
            f_div5.append(f_check5,f_label5);
        //6
            let f_div6 = document.createElement("div");
            f_div6.setAttribute("class","f_div");
                let f_check6 = document.createElement("input");
                f_check6.setAttribute("type","checkbox");
                f_check6.addEventListener("change",function(){
                    filter_products("Sun Protection","category",f_check6.checked);
                });
                let f_label6 = document.createElement("label");
                f_label6.setAttribute("class","f_label");
                f_label6.innerText = "Sun Protection";
            f_div6.append(f_check6,f_label6);
        //7
            let f_div7 = document.createElement("div");
            f_div7.setAttribute("class","f_div");
                let f_check7 = document.createElement("input");
                f_check7.setAttribute("type","checkbox");
                f_check7.addEventListener("change",function(){
                    filter_products("Pro Skincare Tools","category",f_check7.checked);
                });
                let f_label7 = document.createElement("label");
                f_label7.setAttribute("class","f_label");
                f_label7.innerText = "Pro Skincare Tools";
            f_div7.append(f_check7,f_label7);
        //8
            let f_div8 = document.createElement("div");
            f_div8.setAttribute("class","f_div");
                let f_check8 = document.createElement("input");
                f_check8.setAttribute("type","checkbox");
                f_check8.addEventListener("change",function(){
                    filter_products("Accessories","category",f_check8.checked);
                });
                let f_label8 = document.createElement("label");
                f_label8.setAttribute("class","f_label");
                f_label8.innerText = "Accessories";
            f_div8.append(f_check8,f_label8);
        //9
        let f_div9 = document.createElement("div");
            f_div9.setAttribute("class","f_div");
                let f_check9 = document.createElement("input");
                f_check9.setAttribute("type","checkbox");
                f_check9.addEventListener("change",function(){
                    filter_products("Special Offers","category",f_check9.checked);
                });
                let f_label9 = document.createElement("label");
                f_label9.setAttribute("class","f_label");
                f_label9.innerText = "Special Offers";
            f_div9.append(f_check9,f_label9);
        first_filter_div1.append(f_div1,f_div2,f_div3,f_div4,f_div5,f_div6,f_div7,f_div8,f_div9);
    
    /* // first */
        let first_filter = document.createElement("div");
        first_filter.setAttribute("class","parent_filter")
            let heading1 = document.createElement("div");
            heading1.setAttribute("class","heading");
                let h4_1 = document.createElement("h4");
                h4_1.innerText = "Category";
                let drop_icon_div1 = document.createElement("div");
                drop_icon_div1.setAttribute("class","drop_icon_div");
                // drop_icon_div1.style.display = "flex";
                    // let drop_icon1 = document.createElement("img");
                    // drop_icon1.setAttribute("src","svg_image/expand_more.svg.svg");
                    // drop_icon1.setAttribute("alt","icon");
                    var drop_icon1 = document.createElement("input");
                    drop_icon1.setAttribute("type","checkbox");
                    drop_icon1.setAttribute("id","check");
                    var lab1 = document.createElement("label");
                    lab1.setAttribute("for","check");
                    lab1.innerHTML = "<img src='svg_image/expand_more.svg.svg' width='25px' height='25px'>";
                    drop_icon1.addEventListener("change",function(){
                        change_bg();
                    })
                    function change_bg(){
                        if(drop_icon1.checked){
                            lab1.innerHTML = "<img src='svg_image/expand_less.svg.svg' width='25px' height='25px'>";
                            document.querySelector(".filter_div1").style.display = "none";
                        }
                        else{
                            lab1.innerHTML ="<img src='svg_image/expand_more.svg.svg' width='25px' height='25px'>";
                            document.querySelector(".filter_div1").style.display = "block";

                        }
                    }
                drop_icon_div1.append(drop_icon1,lab1);
                // drop_icon_div1.addEventListener("click",function(){
                //     dispaly_heading1_filter();
                // });
            heading1.append(h4_1,drop_icon_div1);
            let display_filter1 = document.createElement("div");
            display_filter1.setAttribute("class","display_filter");
            display_filter1.append(first_filter_div1);
        first_filter.append(heading1,display_filter1);
    //second portion filter div all checkbox
    let sec_filter_div1 = document.createElement("div");
        sec_filter_div1.setAttribute("class","filter_div2");
        //1
            let s_div1 = document.createElement("div");
            s_div1.setAttribute("class","f_div");
                let s_check1 = document.createElement("input");
                s_check1.setAttribute("type","checkbox");
                s_check1.addEventListener("change",function(){
                    filter_products("Fine Lines & Wrinkles","skin_concern",s_check1.checked);
                });
                let s_label1 = document.createElement("label");
                s_label1.setAttribute("class","f_label");
                s_label1.innerText = "Fine Lines & Wrinkles";
            s_div1.append(s_check1,s_label1);
        //2
            let s_div2 = document.createElement("div");
            s_div2.setAttribute("class","f_div");
                let s_check2 = document.createElement("input");
                s_check2.setAttribute("type","checkbox");
                s_check2.addEventListener("change",function(){
                    filter_products("Lifting & Firming","skin_concern",s_check2.checked);
                });
                let s_label2 = document.createElement("label");
                s_label2.setAttribute("class","f_label");
                s_label2.innerText = "Lifting & Firming";
            s_div2.append(s_check2,s_label2);
        //3
            let s_div3 = document.createElement("div");
            s_div3.setAttribute("class","f_div");
                let s_check3 = document.createElement("input");
                s_check3.setAttribute("type","checkbox");
                s_check3.addEventListener("change",function(){
                    filter_products("Dull & Tired Skin","skin_concern",s_check3.checked);
                });
                let s_label3 = document.createElement("label");
                s_label3.setAttribute("class","f_label");
                s_label3.innerText = "Dull & Tired Skin";
            s_div3.append(s_check3,s_label3);
        //4
        let s_div4 = document.createElement("div");
            s_div4.setAttribute("class","f_div");
                let s_check4 = document.createElement("input");
                s_check4.setAttribute("type","checkbox");
                s_check4.addEventListener("change",function(){
                    filter_products("Acne & Breakouts","skin_concern",s_check4.checked);
                });
                let s_label4 = document.createElement("label");
                s_label4.setAttribute("class","f_label");
                s_label4.innerText = "Acne & Breakouts";
            s_div4.append(s_check4,s_label4); 
        //5
            let s_div5 = document.createElement("div");
            s_div5.setAttribute("class","f_div");
                let s_check5 = document.createElement("input");
                s_check5.setAttribute("type","checkbox");
                s_check5.addEventListener("change",function(){
                    filter_products("Dark Spots & Uneven Skin Tone","skin_concern",s_check5.checked);
                });
                let s_label5 = document.createElement("label");
                s_label5.setAttribute("class","f_label");
                s_label5.innerText = "Dark Spots & Uneven Skin Tone";
            s_div5.append(s_check5,s_label5);
        //6
            let s_div6 = document.createElement("div");
            s_div6.setAttribute("class","f_div");
                let s_check6 = document.createElement("input");
                s_check6.setAttribute("type","checkbox");
                s_check6.addEventListener("change",function(){
                    filter_products("Sensitivity & Visible Redness","skin_concern",s_check6.checked);
                });
                let s_label6 = document.createElement("label");
                s_label6.setAttribute("class","f_label");
                s_label6.innerText = "Sensitivity & Visible Redness";
            s_div6.append(s_check6,s_label6);
        //7
        let s_div7 = document.createElement("div");
            s_div7.setAttribute("class","f_div");
                let s_check7 = document.createElement("input");
                s_check7.setAttribute("type","checkbox");
                s_check7.addEventListener("change",function(){
                    filter_products("Pores & Blackheads","skin_concern",s_check7.checked);
                });
                let s_label7 = document.createElement("label");
                s_label7.setAttribute("class","f_label");
                s_label7.innerText = "Pores & Blackheads";
            s_div7.append(s_check7,s_label7);
        //8
        let s_div8 = document.createElement("div");
            s_div8.setAttribute("class","f_div");
                let s_check8 = document.createElement("input");
                s_check8.setAttribute("type","checkbox");
                s_check8.addEventListener("change",function(){
                    filter_products("Dry Skin","skin_concern",s_check8.checked);
                });
                let s_label8 = document.createElement("label");
                s_label8.setAttribute("class","f_label");
                s_label8.innerText = "Dry Skin";
            s_div8.append(s_check8,s_label8);
        sec_filter_div1.append(s_div1,s_div2,s_div3,s_div4,s_div5,s_div6,s_div7,s_div8);

    //second;
    let second_filter = document.createElement("div");
            let heading2 = document.createElement("div");
            heading2.setAttribute("class","heading");
                let h4_2 = document.createElement("h4");
                h4_2.innerText = "SKIN CONCERN";
                let drop_icon_div2 = document.createElement("div");
                drop_icon_div2.setAttribute("class","drop_icon_div");
                    // let drop_icon2 = document.createElement("img");
                    // drop_icon2.setAttribute("src","svg_image/expand_more.svg.svg");
                    // drop_icon2.setAttribute("alt","icon");
                     var drop_icon2 = document.createElement("input");
                    drop_icon2.setAttribute("type","checkbox");
                    drop_icon2.setAttribute("id","check2");
                    var lab2 = document.createElement("label");
                    lab2.setAttribute("for","check2");
                    lab2.innerHTML = "<img src='svg_image/expand_more.svg.svg' width='25px' height='25px'>";
                    drop_icon2.addEventListener("change",function(){
                        change_bg2();
                    })
                    function change_bg2(){
                        if(drop_icon2.checked){
                            lab2.innerHTML = "<img src='svg_image/expand_less.svg.svg' width='25px' height='25px'>";
                            document.querySelector(".filter_div2").style.display = "none";

                        }
                        else{
                            lab2.innerHTML ="<img src='svg_image/expand_more.svg.svg' width='25px' height='25px'>";
                            document.querySelector(".filter_div2").style.display = "block";

                        }
                    }
                drop_icon_div2.append(drop_icon2,lab2);
                // drop_icon_div2.addEventListener("click",function(){
                //     dispaly_heading2_filter();
                // });
            heading2.append(h4_2,drop_icon_div2);
            let display_filter2 = document.createElement("div");
            display_filter2.setAttribute("class","display_filter");
            display_filter2.append(sec_filter_div1);
        second_filter.append(heading2,display_filter2);
    //third portion filter div all checkbox
    let third_filter_div1 = document.createElement("div");
        third_filter_div1.setAttribute("class","filter_div3");
        //1
            let t_div1 = document.createElement("div");
            t_div1.setAttribute("class","f_div");
                let t_check1 = document.createElement("input");
                t_check1.setAttribute("type","checkbox");
                t_check1.addEventListener("change",function(){
                    filter_products("Face","application_area",t_check1.checked);
                });
                let t_label1 = document.createElement("label");
                t_label1.setAttribute("class","f_label");
                t_label1.innerText = "Face";
            t_div1.append(t_check1,t_label1);
        //2
            let t_div2 = document.createElement("div");
            t_div2.setAttribute("class","f_div");
                let t_check2 = document.createElement("input");
                t_check2.setAttribute("type","checkbox");
                t_check2.addEventListener("change",function(){
                    filter_products("Eyes","application_area",t_check2.checked);
                });
                let t_label2 = document.createElement("label");
                t_label2.setAttribute("class","f_label");
                t_label2.innerText = "Eyes";
            t_div2.append(t_check2,t_label2);
        //3
            let t_div3 = document.createElement("div");
            t_div3.setAttribute("class","f_div");
                let t_check3 = document.createElement("input");
                t_check3.setAttribute("type","checkbox");
                t_check3.addEventListener("change",function(){
                    filter_products("Eyelashes","application_area",t_check3.checked);
                });
                let t_label3 = document.createElement("label");
                t_label3.setAttribute("class","f_label");
                t_label3.innerText = "Eyelashes";
            t_div3.append(t_check3,t_label3);
        //4
        let t_div4 = document.createElement("div");
            t_div4.setAttribute("class","f_div");
                let t_check4 = document.createElement("input");
                t_check4.setAttribute("type","checkbox");
                t_check4.addEventListener("change",function(){
                    filter_products("Body","application_area",t_check4.checked);
                });
                let t_label4 = document.createElement("label");
                t_label4.setAttribute("class","f_label");
                t_label4.innerText = "Body (6)";
            t_div4.append(t_check4,t_label4); 
        //5
            let t_div5 = document.createElement("div");
            t_div5.setAttribute("class","f_div");
                let t_check5 = document.createElement("input");
                t_check5.setAttribute("type","checkbox");
                t_check5.addEventListener("change",function(){
                    filter_products("Hands","application_area",t_check5.checked);
                });
                let t_label5 = document.createElement("label");
                t_label5.setAttribute("class","f_label");
                t_label5.innerText = "Hands";
            t_div5.append(t_check5,t_label5);
        //6
            let t_div6 = document.createElement("div");
            t_div6.setAttribute("class","f_div");
                let t_check6 = document.createElement("input");
                t_check6.setAttribute("type","checkbox");
                t_check6.addEventListener("change",function(){
                    filter_products("Lips","application_area",t_check6.checked);
                });
                let t_label6 = document.createElement("label");
                t_label6.setAttribute("class","f_label");
                t_label6.innerText = "Lips";
            t_div6.append(t_check6,t_label6);
       
        third_filter_div1.append(t_div1,t_div2,t_div3,t_div4,t_div5,t_div6);
    
    //third
    let third_filter = document.createElement("div");
            let heading3 = document.createElement("div");
            heading3.setAttribute("class","heading");
                let h4_3 = document.createElement("h4");
                h4_3.innerText = "APPLICATION AREA";
                let drop_icon_div3 = document.createElement("div");
                drop_icon_div3.setAttribute("class","drop_icon_div");
                    // let drop_icon3 = document.createElement("img");
                    // drop_icon3.setAttribute("src","svg_image/expand_more.svg.svg");
                    // drop_icon3.setAttribute("alt","icon");
                    var drop_icon3 = document.createElement("input");
                    drop_icon3.setAttribute("type","checkbox");
                    drop_icon3.setAttribute("id","check3");
                    var lab3 = document.createElement("label");
                    lab3.setAttribute("for","check3");
                    lab3.innerHTML = "<img src='svg_image/expand_more.svg.svg' width='25px' height='25px'>";
                    drop_icon3.addEventListener("change",function(){
                        change_bg3();
                    })
                    function change_bg3(){
                        if(drop_icon3.checked){
                            lab3.innerHTML = "<img src='svg_image/expand_less.svg.svg' width='25px' height='25px'>";
                            document.querySelector(".filter_div3").style.display = "none";

                        }
                        else{
                            lab3.innerHTML ="<img src='svg_image/expand_more.svg.svg' width='25px' height='25px'>";
                            document.querySelector(".filter_div3").style.display = "block";

                        }
                    }
                drop_icon_div3.append(drop_icon3,lab3);
                // drop_icon_div3.addEventListener("click",function(){
                //     dispaly_heading3_filter();
                // });
            heading3.append(h4_3,drop_icon_div3);
            let display_filter3 = document.createElement("div");
            display_filter3.setAttribute("class","display_filter");
            display_filter3.append(third_filter_div1)
        third_filter.append(heading3,display_filter3);
    //fourth portion filter div all checkbox
    let fourth_filter_div1 = document.createElement("div");
        fourth_filter_div1.setAttribute("class","filter_div4");
        //1
            let fourth_div1 = document.createElement("div");
            fourth_div1.setAttribute("class","f_div");
                let fourth_check1 = document.createElement("input");
                fourth_check1.setAttribute("type","checkbox");
                fourth_check1.addEventListener("change",function(){
                    filter_products("Redefine","product_line",fourth_check1.checked);
                });
                let fourth_label1 = document.createElement("label");
                fourth_label1.setAttribute("class","f_label");
                fourth_label1.innerText = "Redefine";
            fourth_div1.append(fourth_check1,fourth_label1);
        //2
            let fourth_div2 = document.createElement("div");
            fourth_div2.setAttribute("class","f_div");
                let fourth_check2 = document.createElement("input");
                fourth_check2.setAttribute("type","checkbox");
                fourth_check2.addEventListener("change",function(){
                    filter_products("Reverse","product_line",fourth_check2.checked);
                });
                let fourth_label2 = document.createElement("label");
                fourth_label2.setAttribute("class","f_label");
                fourth_label2.innerText = "Reverse";
            fourth_div2.append(fourth_check2,fourth_label2);
        // //3
        //     let fourth_div3 = document.createElement("div");
        //     fourth_div3.setAttribute("class","f_div");
        //         let fourth_check3 = document.createElement("input");
        //         fourth_check3.setAttribute("type","checkbox");
        //         fourth_check3.addEventListener("change",function(){
        //             filter_products("Unblemish","product_line",fourth_check3.checked);
        //         });
        //         let fourth_label3 = document.createElement("label");
        //         fourth_label3.setAttribute("class","f_label");
        //         fourth_label3.innerText = "Unblemish (9)";
        //     fourth_div3.append(fourth_check3,fourth_label3);
        // //4
        let fourth_div4 = document.createElement("div");
            fourth_div4.setAttribute("class","f_div");
                let fourth_check4 = document.createElement("input");
                fourth_check4.setAttribute("type","checkbox");
                fourth_check4.addEventListener("change",function(){
                    filter_products("Soothe","product_line",fourth_check4.checked);
                });
                let fourth_label4 = document.createElement("label");
                fourth_label4.setAttribute("class","f_label");
                fourth_label4.innerText = "Soothe";
            fourth_div4.append(fourth_check4,fourth_label4); 
        //5
            let fourth_div5 = document.createElement("div");
            fourth_div5.setAttribute("class","f_div");
                let fourth_check5 = document.createElement("input");
                fourth_check5.setAttribute("type","checkbox");
                fourth_check5.addEventListener("change",function(){
                    filter_products("Spotless","product_line",fourth_check5.checked);
                });
                let fourth_label5 = document.createElement("label");
                fourth_label5.setAttribute("class","f_label");
                fourth_label5.innerText = "Spotless";
            fourth_div5.append(fourth_check5,fourth_label5);
        //6
            let fourth_div6 = document.createElement("div");
            fourth_div6.setAttribute("class","f_div");
                let fourth_check6 = document.createElement("input");
                fourth_check6.setAttribute("type","checkbox");
                fourth_check6.addEventListener("change",function(){
                    filter_products("Recharge","product_line",fourth_check6.checked);
                });
                let fourth_label6 = document.createElement("label");
                fourth_label6.setAttribute("class","f_label");
                fourth_label6.innerText = "Recharge";
            fourth_div6.append(fourth_check6,fourth_label6);
        //7
            let fourth_div7 = document.createElement("div");
            fourth_div7.setAttribute("class","f_div");
                let fourth_check7 = document.createElement("input");
                fourth_check7.setAttribute("type","checkbox");
                fourth_check7.addEventListener("change",function(){
                    filter_products("Enhancements","product_line",fourth_check7.checked);
                });
                let fourth_label7 = document.createElement("label");
                fourth_label7.setAttribute("class","f_label");
                fourth_label7.innerText = "Enhancements";
            fourth_div7.append(fourth_check7,fourth_label7);
        //8
            let fourth_div8 = document.createElement("div");
            fourth_div8.setAttribute("class","f_div");
                let fourth_check8 = document.createElement("input");
                fourth_check8.setAttribute("type","checkbox");
                fourth_check8.addEventListener("change",function(){
                    filter_products("Dermacosmetics","product_line",fourth_check8.checked);
                });
                let fourth_label8 = document.createElement("label");
                fourth_label8.setAttribute("class","f_label");
                fourth_label8.innerText = "Dermacosmetics";
            fourth_div8.append(fourth_check8,fourth_label8);
        //9
            let fourth_div9 = document.createElement("div");
            fourth_div9.setAttribute("class","f_div");
                let fourth_check9 = document.createElement("input");
                fourth_check9.setAttribute("type","checkbox");
                fourth_check9.addEventListener("change",function(){
                    filter_products("Essentials","product_line",fourth_check9.checked);
                });
                let fourth_label9 = document.createElement("label");
                fourth_label9.setAttribute("class","f_label");
                fourth_label9.innerText = "Essentials";
            fourth_div9.append(fourth_check9,fourth_label9);
        fourth_filter_div1.append(fourth_div1,fourth_div2,fourth_div4,fourth_div5,fourth_div6,fourth_div7,fourth_div8,fourth_div9);
    
    //fourth
    let fourth_filter = document.createElement("div");
            let heading4 = document.createElement("div");
            heading4.setAttribute("class","heading");
                let h4_4 = document.createElement("h4");
                h4_4.innerText = "PRODUCT LINE";
                let drop_icon_div4 = document.createElement("div");
                drop_icon_div4.setAttribute("class","drop_icon_div");
                    // let drop_icon4 = document.createElement("img");
                    // drop_icon4.setAttribute("src","svg_image/expand_more.svg.svg");
                    // drop_icon4.setAttribute("alt","icon");
                    var drop_icon4 = document.createElement("input");
                    drop_icon4.setAttribute("type","checkbox");
                    drop_icon4.setAttribute("id","check4");
                    var lab4 = document.createElement("label");
                    lab4.setAttribute("for","check4");
                    lab4.innerHTML = "<img src='svg_image/expand_more.svg.svg' width='25px' height='25px'>";
                    drop_icon4.addEventListener("change",function(){
                        change_bg4();
                    })
                    function change_bg4(){
                        if(drop_icon4.checked){
                            lab4.innerHTML = "<img src='svg_image/expand_less.svg.svg' width='25px' height='25px'>";
                            document.querySelector(".filter_div4").style.display = "none";
                        }
                        else{
                            lab4.innerHTML ="<img src='svg_image/expand_more.svg.svg' width='25px' height='25px'>";
                            document.querySelector(".filter_div4").style.display = "block";

                        }
                    }
                drop_icon_div4.append(drop_icon4,lab4);
                // drop_icon_div4.addEventListener("click",function(){
                //     dispaly_heading4_filter();
                // });
            heading4.append(h4_4,drop_icon_div4);
            let display_filter4 = document.createElement("div");
            display_filter4.setAttribute("class","display_filter");
            display_filter4.append(fourth_filter_div1)
        fourth_filter.append(heading4,display_filter4);
    lower.append(first_filter,second_filter,third_filter,fourth_filter);
    document.getElementById("filter").append(lower);
   
    // display first filter list function
    function filter_products(a,b,c){
        console.log(a,b);
        var temp=[];
        temp.push([a,b]);
        if(c){
            let arr = JSON.parse(localStorage.getItem("filter_key")) || [];
            arr.push([a,b]);
            localStorage.setItem("filter_key",JSON.stringify(arr));
            display_products_data();
        }
        else{
            console.log("onchange",a,b,c);
            let arr = JSON.parse(localStorage.getItem("filter_key")) || [];
            for(var i=0;i<arr.length;i++){
                if(arr[i][0]==temp[0][0] && arr[i][1]==temp[0][1]){
                    arr.splice(i,1);
                    break;
                }
            }
            
            localStorage.setItem("filter_key",JSON.stringify(arr));
            display_products_data();
        }
    }
    var display_products_data = async() => {
        document.getElementById("products").innerHTML= null;
        document.getElementById("result").innerHTML = null;
        let res = await fetch(`https://clone-of-rodan.herokuapp.com/product`);
        var obj = await res.json();
        console.log(obj);
        var filters = JSON.parse(localStorage.getItem("filter_key")) || [];
        if(filters.length==0){
            fetchingdata();
        }
        else{
        //filter
            const filteredArray = obj.filter(ele => {
                var result = false;
                for(var key of filters){
                    var d = key[0];    
                    var e = key[1];
                    
                    if (ele[e] == d){
                        console.log("ele",ele[e]);
                        result = true;
                        // break;
                    }
                }
                // for(var i=0;i<filters.length;i++){
                //     var a = filters[i][0];
                //     var b = filter[i][1];
                //     if(ele[`${b}`] ==a){

                //     }

                
                // }
                return result;  
            });
            console.log("filtered",filteredArray);
            filteredArray.forEach((element,index) => {
                let card = document.createElement("div");
                card.setAttribute("class","card");

                let upper = document.createElement("div");
                upper.setAttribute("class","upper");
                    let img_div =  document.createElement("div");
                    img_div.setAttribute("class","img-div");
                        let image = document.createElement("img");
                        image.setAttribute("src",element.image);
                        image.setAttribute("alt",index);
                    img_div.append(image);

                    let sts = document.createElement("div");
                    sts.setAttribute("class","status");
                    sts.innerText = element.status;

                    let ttl = document.createElement("div");
                    ttl.setAttribute("class","title");
                    ttl.innerText = element.title;

                    let ifo = document.createElement("div");
                    ifo.setAttribute("class","info");
                    ifo.innerText = element.info;

                    let prc = document.createElement("div");
                    prc.setAttribute("class","price");
                    prc.innerText = "$"+element.price;

                    var rating_wrapper = document.createElement("div");
                    rating_wrapper.setAttribute("class","rating-wrapper");

                        let rtgstar = document.createElement("div");
                        rtgstar.setAttribute("class","rating-star");
                        if(element.rating==""){
                            rating_wrapper.style.display = "none";
                        }
                        else{
                            if(Number(element.rating)<3.5){
                                rtgstar.innerHTML = three_star;
                            }
                            else if(Number(element.rating)<4){
                                rtgstar.innerHTML = four_star;
                            }
                            else{
                                rtgstar.innerHTML = five_star;
                            }
                            
                        }
                        let rtg = document.createElement("div");
                        rtg.setAttribute("class","rating");
                        rtg.innerText = element.rating;

                        let vt = document.createElement("div");
                        vt.setAttribute("class","votes");
                        vt.innerText = element.rating_votes;
                    rating_wrapper.append(rtgstar,rtg,vt);
                upper.append(img_div,sts,ttl,ifo,prc,rating_wrapper);
                let lower = document.createElement("div");
                lower.setAttribute("class","lower");
                    let addtobagbtn = document.createElement("button");
                    addtobagbtn.setAttribute("id","addtobag");
                    addtobagbtn.innerText = "ADD To BAG"
                lower.append(addtobagbtn);
                card.append(upper,lower);
                upper.addEventListener("click",function(){
                    card_pressing_func(element.Id);
                })
                addtobagbtn.addEventListener("click",function(){
                    button_pressing_func(element.Id);
                })
                document.getElementById("products").append(card);

            });
            //total reaults filter
            let resultdata = document.createElement("div");
            resultdata.innerText = "Showing " +`${filteredArray.length}`+ " Results";
            document.getElementById("result").append(resultdata);

        }   
}
function card_pressing_func(id){
    localStorage.setItem("card-press-data",id);
    window.location.href="../productInfo.html"
}
function button_pressing_func(id){
    var get_button_pressing = JSON.parse(localStorage.getItem("button-press-data")) || [];
    get_button_pressing.push(id);
    console.log(get_button_pressing);
    localStorage.setItem("button-press-data",JSON.stringify(get_button_pressing));
    window.location.href ="../cart page/cart.html";
}
