function encriptar(){
    var oracion = document.getElementById("textoEncriptado").value.toLowerCase();

    var textocifrado = oracion.replace(/e/img, "enter");
    var textocifrado = textocifrado.replace(/o/img, "ober");
    var textocifrado = textocifrado.replace(/i/img, "imes");
    var textocifrado = textocifrado.replace(/a/img, "ai");
    var textocifrado = textocifrado.replace(/u/img, "ufat");

    document.getElementById("textoDesencriptado").innerHTML = textocifrado;
    //document.getElementById("seccion_2").innerHTML = pag_2;
    document.getElementById("textoDesencriptado").style.display = "show";   
    document.getElementById("textoDesencriptado").style.display = "inherit";
    document.getElementById("botonCopiado").style.display = "show";
    document.getElementById("botonCopiado").style.display = "inherit";
}

function desencriptar(){
    var oracion = document.getElementById("textoEncriptado").value.toLowerCase();

    var textocifrado = oracion.replace(/enter/img, "e");
    var textocifrado = textocifrado.replace(/ober/img, "o");
    var textocifrado = textocifrado.replace(/imes/img, "i");
    var textocifrado = textocifrado.replace(/ai/img, "a");
    var textocifrado = textocifrado.replace(/ufat/img, "u");

    document.getElementById("textoDesencriptado").innerHTML = textocifrado;
}

function copiar(){
    var contenido = document.querySelector("#textoDesencriptado");
    contenido.select();
    document.execCommand("copy");
}