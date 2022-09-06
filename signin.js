document.querySelector("form").addEventListener("submit",login)

    function login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if(email == localStorage.getItem("E-mail")){
        if(password == localStorage.getItem("Password")){
            alert("Login Successful");
        }
        else{
            alert("Wrong Password");
        }
    }
    else{
        alert("Wrong Email");
    }
}