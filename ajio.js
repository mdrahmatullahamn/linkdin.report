function register(event){
    event.preventDefault();
    // getting data from html to js
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    var userData = {name : userName, email : userEmail, password : userPassword }
     
  console.log(userData, "userData")
// starting data from js to ls 
var dataFromLS =JSON.parse(localStorage.getItem("userData")) || [];
console.log(dataFromLS, "dataFromLS")
var flag = false;
for (var i=0; i<dataFromLS.length; i++){
    if(dataFromLS[i].email===userEmail){
        flag= true;
    }
}
if(flag===true){
    alert("email alredy prsent, type another email")
} else if(userPassword.length < 1 && userName.length < 1 && userEmail < 1){
    alert("must fill all fields")
} else if (userPassword.length < 8){
    alert("password more than 8 digits")
} else{
    dataFromLS.push(userData)
    localStorage.setItem("userData", JSON.stringify(dataFromLS));
    document.getElementById("userName").value='';
    document.getElementById("userEmail").value='';
    document.getElementById("userPassword").value='';
    // window.location.href ="login.html";
    alert("Registration done.")



}

    
}
function addToLS(){
    alert("work")
    var proName = document.getElementById("Name").value;
    var proImage = document.getElementById("image").value;
    var proPrice = document.getElementById("price").value;
    var proDetals = document.getElementById("deatls").value;


    var ajioProduct = { name:proName, image:proImage, price:proPrice, deatls:proDetals}
    var proDtaLS = JSON.parse(localStorage.getItem("ajioProduct")) || [];
    console.log(proDtaLS, "proDtaLS")
    proDtaLS.push(ajioProduct)
    localStorage.setItem("ajioProduct", JSON.stringify(proDtaLS));
    alert("done")
}
var gettingEmail;
function forgetPassword() {
    var dataFromLS = JSON.parse(localStorage.getItem("userData"));
    var userEmail = document.getElementById("email").value;
    gettingEmail = userEmail;

    var flag = false;
    for (var i = 0; i < dataFromLS.length; i++) {
        if (dataFromLS[i].email === userEmail) {
            flag = true;
        }
    }
    if (flag === true) {
        var newCode = `<input type="password" id="password" /> <br> <button onclick="newPassword()">set new-passwoed</button>`
        var divFromHtml = document.getElementById("change")
        divFromHtml.innerHTML = newCode;
        alert("set new-password")
        // window.location.href=''

    } else {
        alert("your email not matched")
    }

}
function newPassword() {
    alert("set pass")
    var userPassword = document.getElementById("password").value;
    var dataFromLS = JSON.parse(localStorage.getItem("userData"));
    console.log(dataFromLS, "dataFromLS checek")
    for (var i = 0; i < dataFromLS.length; i++){
        if(dataFromLS[i].email === gettingEmail){
            dataFromLS[i].password = userPassword
        }
    }
    localStorage.setItem("userData", JSON.stringify(dataFromLS));
    gettingEmail = "";
    window.location.href = './login.html';
    alert("passwerd chanded")
}