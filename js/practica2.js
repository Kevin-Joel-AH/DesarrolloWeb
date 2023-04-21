document.getElementById('id-sun').onclick = function(){
    document.getElementById('page').classList.remove('dark-mode')
    document.getElementById('id-moon').classList.remove('active')
    this.classList.add('active')
}
document.getElementById('id-moon').onclick = function(){
    document.getElementById('page').classList.add('dark-mode')
    document.getElementById('id-sun').classList.remove('active')
    this.classList.add('active')
}

function calif(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var num3 = parseInt(document.getElementById("num3").value);

    var prom = (num1+num2+num3)/3;

    media = "Tu promedio es de: "+ prom;

    if(prom >= 7){
        aprobado = "Usted Aprobo el curso";
    }else{
        aprobado = "Usted Suspendio el curso";
    }

    document.getElementById("media").innerHTML=media;
    document.getElementById("aprobado").innerHTML=aprobado;
}