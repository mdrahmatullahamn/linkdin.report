window.onload=function(){
    // alert("warning")
    var vewier = JSON.parse(localStorage.getItem("ajioProduct"));
    var atdataLS = document.getElementById("ajio2");


    
    var array = []
    for (var i = 0; i < vewier.length; i++) {
        array += `<div class="m10" ><img src="${vewier[i].image}" alt=""><h1>${vewier[i].name}</h1><span>${vewier[i].deatls}</span><p>${vewier[i].price}</p></div>`

    }

    atdataLS.innerHTML = array
    
}