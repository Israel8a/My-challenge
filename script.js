var inputtext = document.querySelector(".text-area");
var mensaje = document.querySelector(".resultado");
var mensaje2 = document.querySelector(".resultado2");
var btcopiar = document.querySelector("#copiar");

function btencriptar(){
    var textoencriptado = encriptar(inputtext.value);
    mensaje.value = textoencriptado;
    document.getElementById("copiar").style.display = "block";
    document.getElementById("borrar").style.display = "none";
    document.getElementById("desencriptar2").style.display = "none";
    if(textoencriptado==0){
        document.getElementById("borrar").style.display = "block"; 
        document.getElementById("copiar").style.display = "none";
    }
}
function encriptar(string){
    var matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]] 
    string = string.toLowerCase();
    for(var i = 0;i< matrizCodigo.length;i++){
        if(string.includes(matrizCodigo[i][0])){
            string = string.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
    }
}
    return string;
}
function btdesencriptar(){
    var textodesencriptado = desencriptar(inputtext.value);
    mensaje2.value = textodesencriptado;
    document.getElementById("desencriptar2").style.display = "block";
    document.getElementById("copiar").style.display = "none";
    document.getElementById("borrar").style.display = "none";
    if(textodesencriptado==0){
        document.getElementById("borrar").style.display = "block"; 
        document.getElementById("desencriptar2").style.display = "none";
    }
}
function desencriptar(text){
    var Codigodesencriptar=[["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    text = text.toLowerCase();
    for(var e = 0;e<Codigodesencriptar.length;e++){
        if(text.includes(Codigodesencriptar[e][0])){
            text = text.replaceAll(Codigodesencriptar[e][0],Codigodesencriptar[e][1])
        }
    }
    return text;
}
function copiar(){
    var mensajeEncriptado = mensaje.value;
    navigator.clipboard.writeText(mensajeEncriptado);
}