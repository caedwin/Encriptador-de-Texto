var t2Visible = document.getElementById('textArea');
var muneco = document.getElementById('muñeco');
var btnCopiar = document.getElementById('btnCopiar');
var text2 = document.getElementById('texto2');
var text3 = document.getElementById('nota2');
var texto = document.querySelector("#textoACopiar").value;



function encriptar(){  

    
    var texto = document.querySelector("#textoACopiar").value;
    if(texto==''){
        alert("No se encontró texto a encriptar");
        return;
        
    }else{
        
        var textoCifrado = texto.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");

        document.querySelector("#textArea").value = textoCifrado;
        document.querySelector("#textoACopiar").value;
        
        };return ocultar(), teclaMarcada();
        
    };
   
// Boton desencriptar
function desencriptar (){ 
    var texto = document.querySelector("#textoACopiar").value; 
    if(texto==""){
        alert("No se encontró texto para desencriptar");
        return;
    }else{
    var textoCifrado = texto.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
    
    document.querySelector("#textArea").value = textoCifrado; 
    document.querySelector("#textoACopiar").value;
    }return ocultar()
}

//Boton copiar

function copiarAlPortapapeles() {
    var textCopiado = document.createElement("input");
        textCopiado.setAttribute("value", window.getSelection().toString());
        console.log(textCopiado)
        document.body.appendChild(textCopiado);
        textCopiado.select();
        document.execCommand("copy");
        document.body.removeChild(textCopiado);
        if(textCopiado.value == ""){
            alert('selecione el área a copiar');
            return;
        }         
};

function ocultar(){
    const apagado = 'none'; prendido = 'inline';
    muneco.style.display = apagado;
    t2Visible.style.display = prendido;
    text2.style.visibility = 'hidden';
    text3.style.visibility = 'hidden';
    btnCopiar.style.visibility = 'visible';
 
}

var eventoControlado = false;
window.onload = function() { document.onkeypress = mostrarInformacionCaracter;
document.onkeyup = mostrarInformacionTecla; }
function mostrarInformacionCaracter(evObject) {
    var elCaracter = String.fromCharCode(evObject.which);
    if (evObject.which < 97 || evObject.which > 122) {    
        evObject.preventDefault();
        alert("Por favor usa únicamente letras minúsculas.")
    }
    eventoControlado=true;
}

function mostrarInformacionTecla(evObject) {
                var teclaPulsada = evObject.keyCode;
                if (teclaPulsada == 20) {
                     alert('Pulsó la tecla caps lock (act/des mayúsculas). Por favor usa únicamente letras minúsculas');}
                else if (teclaPulsada == 16) { 
                    alert('Pulsó la tecla shift. Por favor usa únicamente letras minúsculas.');}
                else if (eventoControlado == false) { 
                    alert('Pulsó una de las teclas especiales. Por favor usa únicamente letras minúsculas.');}

}