document.querySelector("form").addEventListener("submit",getdata)

function getdata(){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    localStorage.setItem("Name",name)
    localStorage.setItem("E-mail",email)
    localStorage.setItem("Password",password)

    if(email == ""){
        alert("Please Fill Details");
    }
    else{
        alert("Signup Successful"); 
        window.location.href = "signin.html";
    }
   
}
