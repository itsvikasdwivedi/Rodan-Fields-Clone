export const footer=()=>{
    document.getElementById("footer").innerHTML=`
    <div id="footerHead">
            <div>
                <ul >
                    <div id="clickOne" class="firstHead">ABOUT R+F</div>
                    <li>PRESS ROOM</li>
                    <li>COMPANY INFO</li>
                    <li>EXECUTIVE TEAM</li>
                    <li>CAREERS</li>
                    <li>R+F RECYCLING PROGRAM</li>
                    <li>BLOG</li>
                </ul>
            </div>
            <div>
                <ul>
                    <div id="clickTwo" class="firstHead">HELP</div>
                    <li>PRODUCT & HELP CENTER</li>
                    <li>SHIPPING</li>
                    <li>SATISFACTION GUARANTEE</li>
                    <li>PROMOTIONAL TERMS & CONDITIONS</li>
                    <li>R+F FAQS</li>
                    <li>KLARNA</li>
                    <li>SITE MAP</li>
                </ul>
            </div>
            <div>
                <div class="footercontent">Let’s Get Social</div>
                <div class="socialIcons">
                    <i class="fa-brands fa-facebook-f"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-youtube"></i>
                    <i class="fa-brands fa-pinterest-p"></i>
                </div>
            </div>
        </div>
        <div id="footerFoot">
            <div>© 2022 Rodan & Fields</div><ul>
                <li>Privacy Policy</li>
                <li>Terms & Conditions</li>
                <li>Accessibility</li>
                <li>California Supply Chains Act</li>
                <li>DSA Code Of Ethics</li>
                <li>Disclaimer</li>
                <li>Preference Center</li>
            </ul>
        </div>
    `
    document.getElementById("clickOne").addEventListener("click",()=>{
        document.getElementById("clickOne").classList.toggle("click");
    })
    document.getElementById("clickTwo").addEventListener("click",()=>{
        document.getElementById("clickTwo").classList.toggle("clicktwo");
    })
}