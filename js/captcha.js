"use strict";

console.log ("start");

let form = document.querySelector ("#form"); //llamar formulario
let input = document.querySelector ("#input-usuario");
let captcha = document.querySelector (".textoSeguridad");
let respuestaTexto = document.querySelector (".respuesta");
let captchaValor = crearCaptcha();

form.addEventListener ("submit", enviarForm) ; //cuando se envia el formulario, entonces "enviarForm"

captcha.innerText = captchaValor;
 
function enviarForm(e){
    //No enviar formulario
    e.preventDefault();

    //agarra los datos del form
    let formData = new FormData(form);
    let nombre = formData.get("nombre");
    let apellido = formData.get("apellido");
    let email = formData.get("email");
    let sexo = formData.get("sexo");
    let password = formData.get("password");

    console.log("Nombre: " + nombre);
    console.log("Apellido: " + apellido);
    console.log("Email: " + email);
    console.log("Sexo: " + sexo);
    console.log("Password: " + password);

    if (input.value==captcha.innerText){
        return respuestaTexto.innerText= "Logueado correctamente"; 
    }   
    else{
        console.log ("valor falso");
        return respuestaTexto.innerText = "Por favor, vuelva a intentarlo";
    }
}

function crearCaptcha (){
    console.log ("random funciona");
    let a = Math.floor((Math.random() * 9) + 1);
    let b = Math.floor((Math.random() * 9) + 1);
    let c = Math.floor((Math.random() * 9) + 1);
    let d = Math.floor((Math.random() * 9) + 1);
    let e = Math.floor((Math.random() * 9) + 1);
    let f = Math.floor((Math.random() * 9) + 1);
    let valor = a +""+ b +""+ c+"" + d +""+ e +""+ f;
    return valor;
}
