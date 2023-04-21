meses=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
lasemana=["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
diassemana=["lun","mar","mié","jue","vie","sáb","dom"];

window.onload = function(){
    hoy = new Date();
    diasemhoy = hoy.getDay();
    diahoy = hoy.getDate();
    meshoy = hoy.getMonth();
    anohoy = hoy.getFullYear();
    tit=document.getElementById("titulos");
    f0=document.getElementById("fila0");
    pie=document.getElementById("fechaactual");
    pie.innerHTML+=lasemana[diasemhoy]+", "+diahoy+" de "+meses[meshoy]+" de "+anohoy;
    document.buscar.buscaano.value=anohoy;
    mescal = meshoy;
    anocal = anohoy;
    cabecera()
    primeralinea()
    escribirdias()
}
function cabecera(){
    tit.innerHTML=meses[mescal]+" de "+anocal;
}
function primeralinea(){
    for(i=0;i<7;i++){
        celda0=f0.getElementsByTagName("th")[i];
        celda0.innerHTML=diassemana[i]
    }
}
function escribirdias(){
    primeromes=new Date(anocal,mescal,"1")
    prsem=primeromes.getDay()
    prsem--;
    if (prsem==-1){prsem=6;}
    diaprmes=primeromes.getDate()
    prcelda=diaprmes-prsem;
    empezar=primeromes.setDate(prcelda)
    diames=new Date()
    diames.setTime(empezar);
    for (i=1;i<7;i++){
        fila=document.getElementById("fila"+i);
        for(j=0;j<7;j++){
            midia=diames.getDate()
            mimes=diames.getMonth()
            miano=diames.getFullYear()
            celda=fila.getElementsByTagName("td")[j];
            celda.innerHTML=midia;
            midia=midia+1;
            diames.setDate(midia);
        }
    }
}