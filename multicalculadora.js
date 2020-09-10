document.addEventListener('keydown', function (event) {
    if (event.keyCode !== 13)
    return;
    CalcularIMC();CalcularRetangulo();CalcularCirculo()
})
function CalcularIMC(){
    if(MostrarIMC.style.display == "block"){
    var Peso = (document.getElementById("Peso").value)
    var AlturaIMC = (document.getElementById("AlturaIMC").value)
    if(AlturaIMC==0){
        alert("Informar valor diferentes de zero para altura")
    }
    else{
    var IMC = Peso/(AlturaIMC*AlturaIMC)
    IMC=IMC.toString().replace(".", ",");
    document.getElementById('CalculoImc').innerHTML = "IMC = "+IMC;}}
}

function CalcularRetangulo(){
    if(MostrarRetangulo.style.display == "block"){
    var Base = (document.getElementById("Base").value)
    var AlturaRetangulo = (document.getElementById("AlturaRetangulo").value)
    var RETANGULO = Base*AlturaRetangulo
    RETANGULO=RETANGULO.toString().replace(".", ",");
    document.getElementById('CalculoRetangulo').innerHTML = "Área do retângulo = "+RETANGULO;}
}

function CalcularCirculo(){
    if(MostrarCirculo.style.display == "block"){
    var Raio = (document.getElementById("Raio").value)
    var Circulo = (Math.PI * Math.pow(Raio,2))
    Circulo=Circulo.toString().replace(".", ",");
    document.getElementById('CalculoCirculo').innerHTML = "Área do círculo = "+Circulo;}
}


function mostra(){
    var Retangulo = document.getElementById("Retangulo").checked
    var IMC = document.getElementById("IMC").checked
    if(Retangulo==true){
        MostrarRetangulo.style.display = "block";
        MostrarIMC.style.display = "none";
        MostrarCirculo.style.display = "none";
        document.getElementById("CalculoRetangulo").innerHTML = "";
        document.getElementById("Base").value = "";
        document.getElementById("AlturaRetangulo").value = ""; 
    }
    else if (IMC==true){
        MostrarIMC.style.display = "block";
        MostrarRetangulo.style.display = "none";
        MostrarCirculo.style.display = "none"; 
        document.getElementById("CalculoImc").innerHTML = "";
        document.getElementById("Peso").value = "";
        document.getElementById("AlturaIMC").value = ""; 
    }
    else{
        MostrarCirculo.style.display = "block";
        MostrarRetangulo.style.display = "none";  
        MostrarIMC.style.display = "none"; 
        document.getElementById("CalculoCirculo").innerHTML = "";
        document.getElementById("Raio").value = "";
    }
} 