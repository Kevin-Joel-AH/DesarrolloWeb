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

function desc(){
    var marca = document.getElementById("marca").value;
    var modelo = document.getElementById("modelo").value;

    if(marca.toLowerCase() == "ford"){
        if(modelo.toLowerCase() == "fiesta"){
            consulta = "El auto tiene un 5% de Descuento";
        }else if(modelo.toLowerCase() == "focus"){
            consulta = "El auto tiene un 10% de Descuento";
        }else if(modelo.toLowerCase() == "raptor"){
            consulta = "El auto tiene un 3% de Descuento";
        }else{
            consulta = "El auto ingresado no existe";
        }
    }else if(marca.toLowerCase() == "nissan"){
        if(modelo.toLowerCase() == "sentra"){
            consulta = "El auto tiene un 7% de Descuento";
        }else if(modelo.toLowerCase() == "versa"){
            consulta = "El auto tiene un 12% de Descuento";
        }else if(modelo.toLowerCase() == "frontier"){
            consulta = "El auto tiene un 4% de Descuento";
        }else{
            consulta = "El auto ingresado no existe";
        }
    }else{
        consulta = "La marca ingresada no existe";
    }

    document.getElementById("consulta").innerHTML=consulta;
}