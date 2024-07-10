function encriptar(){
    let texto =document.getElementById("texto").value;
    let tituloMensaje= document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagenEncriptado = document.getElementById("imagenencriptado");
    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");
    if(document.getElementById("texto").value.length != 0){
        document.getElementById("texto").value = textoCifrado;
        imagenEncriptado.src = "./img/trabajo-en-equipo.png";
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
    }else{
        mostrarAlerta();
        imagenEncriptado.src ="./img/alerta.png ";
        tituloMensaje.textContent="Ningun mensaje encontrado";
        parrafo.textContent="Ingresa el texto que deseas encriptar o Desencriptar";
        
    }
}
function desencriptar(){
    let texto = document.getElementById("texto").value;
    let tituloMensaje= document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let imagenEncriptado = document.getElementById("imagenencriptado");

    let textoCifrado = texto
        .replace(/enter/gi,"e")
        .replace(/imes/gi,"i")
        .replace(/ai/gi,"a")
        .replace(/ober/gi,"o")
        .replace(/ufat/gi,"u");
        if(texto.length != 0){
            document.getElementById("texto").value = textoCifrado;
            imagenEncriptado.src = "./img/trabajo-en-equipo.png";
            tituloMensaje.textContent = "Texto desencriptado con exito";
            parrafo.textContent = "";
        }else{
            mostrarAlerta();
            imagenEncriptado.src ="./img/alerta.png ";
            tituloMensaje.textContent="Ningun mensaje encontrado";
            parrafo.textContent="Ingresa el texto que deseas encriptar o Desencriptar";
            
        }
}
function mostrarAlerta() {
    Swal.fire({
        title: 'Ooppss.!',
        text: "Debes incresar un texto",
        icon: 'info',
    });
}

