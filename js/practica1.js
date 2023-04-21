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

function mayorQue(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;

    if(num1 > num2){
        resultado = "El numero mayor es "+num1;
    }else if(num1 < num2){
        resultado = "El numero mayor es "+num2;
    }else{
        resultado = "Los numeros son iguales"
    }

    document.getElementById("resultado").innerHTML=resultado;
}