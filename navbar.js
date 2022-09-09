export const navbar=()=>{
    document.getElementById("navbar").innerHTML=`
    <nav id="v-navbar-I">
        <div class="v-Consult">
            <p><a href=""></a>find a consultant</p>
        </div>
        <div class="v-website-logo">
            <img  src="https://www.rodanandfields.com/en-us/medias/rf-logo.svg?context=bWFzdGVyfGltYWdlc3w3MzczfGltYWdlL3N2Zyt4bWx8aW1hZ2VzL2g2MC9oYWIvODgyMjE0NzE4NjcxOC5zdmd8YjNmMmU2YTg5MTM0NTMzM2Y2ODg2ZmRkZTJhNmY2OWZhYmYyYjk5NWQxODkxODFiYjVkY2MxY2NjOWRlMzA5OA" alt="rodan-logo">
        </div>
        <div id="v-navbar-child">
            <div>
                <a href="#">Search
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                      </svg>
                    </a>
            </div>
            <!-- <div> -->
              <div class="v-center">
              <input type="checkbox" id="show">
              <label for="show" class="show-btn">Sign In <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                  </svg></label>
            <!-- </div> -->

            <!-- Login Pop Up Starts Here -->

              <!-- View Signin Form -->
                <div class="v-container">
                 <label for="show" class="close-btn fas fa-times" title="close"></label>
                 <form action="#">
                    <div class="data">
                       <label>Email</label>
                       <input type="email" required>
                    </div>
                    <div class="data">
                       <label>Password</label>
                       <input type="password" required maxlength="8" minlength="8">
                    </div>
                    <div class="forgot-pass">
                       <a href="#">Forgot Password?</a>
                    </div>
                    <div class="btn">
                       <div class="inner"></div>
                       <button type="submit">login</button>
                    </div>
                    <div class="signup-link">
                       Not a member? <a href="#">Signup now</a>
                    </div>
                 </form>
              </div>
           </div>

           <!-- login popup ends here -->
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                </svg>
              
            </div>
            <div>
                <a href="#">
                <img src="https://cdn-icons-png.flaticon.com/512/206/206626.png" alt="flag-icon-usa" height="20px" width="20px">
                English</a>
            </div>
        </div>
    </nav>
    <!-- Second Navbar Starts Here-->
   <div id="v-navbar-II">
<div>


    <!-- Shop DropDown Button -->
    <div class="dropdown">
      <a href="#" class="dropbtn">SHOP</a>
      <div class="dropdown-content-I v-dropdown">
    <div>

      <div>
        <br>
        <p>SHOP BY CATEGORY</p><br>
        <a href="#">Skincare Regimens </a>
        <a href="#">Lash & Brow</a>
        <a href="#">Eye Creams & Treatments</a>
        <a href="#">Face Serums & Treatmens</a>
        <a href="#">Face Masks</a>
        <a href="#">Moisturizers</a>
        <a href="#">Cleansers & Makeup Removers</a>
        <a href="#">Toners</a>
        <a href="#">Sun Protection</a>
        <a href="#">Tools & Accessories</a>
        <a href="#">Hand & Body</a>
      </div>

      <div>
        <br>
        <p>SHOP BY CONCERN</p><br>
        <a href="">Anti-Aging</a>
        <a href="">Acne,Pores & Blackheads</a>
        <a href="">Dark Spots & Uneven Skin Tone</a>
        <a href="">Sensitivity & Visible Redness</a>
        <a href="">Dull & Tired Skin</a>
        <a href="">Dry Skin</a>
        <a href="">Teen Acne</a>
      </div>

      <div>
        <br>
        <p>SHOP BY PRODUCT </p><br>
        <a href="">Redifine</a>
        <a href="">Reverse</a>
        <a href="">Unblemish</a>
        <a href="">Soothe</a>
        <a href="">Recharge</a>
        <a href="">Spotless</a>
        <a href="">Enhancements</a>
        <a href="">Pro Skincare Tools</a>
        <a href="">Essentials</a>
        <a href="">All Products</a>
      </div>

    </div>

</div>
    </div>

    <!-- Best Seller  Button  -->
    <div class="dropdown">
     <a href="" class="dropbtn" >BEST SELLER</a>
      
    </div>

    <!-- Featured Page Drop DropDown -->

    <div class="dropdown">
      <a href="" class="dropbtn" >FEATURED</a>
      <div class="dropdown-content-II v-dropdown">
<div>
  <div>
    <a href="#">Special Offer</a>
    <a href="#">Before and After</a>
    <a href="#">New Total RF Serum</a>
    <a href="#">Spotless For teens</a>
    <a href="#">Self-Care Essentials</a>
  </div> 
</div>

</div>
    </div>

    <!-- Our Story Page -->

    <div class="dropdown">
      <a href="#" class="dropbtn">OUR STORY</a>
      <div class="dropdown-content-III v-dropdown">
  <div>

  <div>
    <a href="#">R+F Difference</a>
    <a href="#">Personalized Service</a>
    <a href="#">Explore Our Regimens</a>
    <a href="#">Our Founders</a>
    <a href="#">Our Impact</a>
  </div> 

</div>

</div>
    </div>

    <!-- Become a consultant -->
    <div class="dropdown">
     <a class="dropbtn" href="">BECOME A CONSULTANT</a>
    
    </div>

    <!-- Our Story  -->
    <div class="dropdown">
    <a class="dropbtn" href="">BLOG</a>
     
    </div>
    
  </div>
</div>`
}