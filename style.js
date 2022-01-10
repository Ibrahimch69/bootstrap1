let mail = prompt("mail")
    let motpasse = prompt("motpasse");

    if( mail=="ibrahim" && motpasse=="abcdef"){
            alert("bienvenu");
            document.location.href="dashboard.html"; 
    }else{
        alert("erreur")
        document.location.href="index.html"; 
    }  