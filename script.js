



function meaning(){

    var name=document.getElementById("input").value
    if(name==""){
        alert("Please Input Your Name!")
    }
    else{
        var text="https://parenting.firstcry.com/baby-names/meaning-of-"
         window.open(text+name)
    }
    
}


