function log(event){
    event.preventDefault();
    // alert("submit")
    var userName = document.getElementById("name").value;
    var userEmail = document.getElementById("email").value;

    var datals = JSON.parse(localStorage.getItem("udata"));

    var flag = false;
    for(i = 0; i < datals; i++){
        if(datals[i].name === userName && datals[i].email === userEmail){
            flag=true;
        }
    } if(flag===true){
 document.getElementById("name").value='';
 document.getElementById("email").value='';
 alert("complet")


    }else{
        alert("kuchv")
    }


}