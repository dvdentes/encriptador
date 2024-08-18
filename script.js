const textArea = document.querySelector(".form__input");
const imagenMuneco = document.querySelector(".result__imagen");
const loaderCarga = document.querySelector(".loader");
const resultadoTitulo = document.querySelector(".result__title");
const resultadoTexto = document.querySelector(".result__text");
const botonEncriptar = document.querySelector(".form__btn");
const botonDesencriptar = document.querySelector(".form__btn--secundary");
const botonCopiar = document.querySelector(".result__btn");



const llaves = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];


function encriptarMensaje(mensaje){
    let mensajeEncriptado = "";
    for (let i = 0; i < mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;       

        for(let j = 0; j < llaves.length; j++){
            if(letra === llaves[j][0]){
                encriptada = llaves[j][1];
                break;

            }

        }
        mensajeEncriptado += encriptada;
    }    
    return mensajeEncriptado;
}

function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}

textArea.addEventListener("input", (e)=>{
    imagenMuneco.style.display = "none";    
    loaderCarga.classList.remove("hidden");
    resultadoTitulo.textContent = "Capturando Mensaje.";
    resultadoTexto.textContent = "";
    
});

botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    loaderCarga.classList.add("hidden");
    
});

botonDesencriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeDesencriptado;
    botonCopiar.classList.remove("hidden");
    loaderCarga.classList.add("hidden");
    resultadoTitulo.textContent = "El texto se copio"
    
});

botonCopiar.addEventListener("click", ()=> {
    let copiarTexto = resultadoTexto.textContent;
    navigator.clipboard.writeText(copiarTexto).then(()=> {
    console.log(`Se copio el texto: ${copiarTexto}`);
    resultadoTexto.textContent = "";
    imagenMuneco.style.display = "block";    
    loaderCarga.classList.add("hidden");
    resultadoTitulo.textContent = "El texto se copio"
    botonCopiar.classList.add("hidden");
    resultadoTexto.textContent = "";

    });
});



