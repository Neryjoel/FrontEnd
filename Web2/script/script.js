mensaje = document.getElementById("contrato")
boton = document.getElementById("btn_submit")
terminos = document.getElementById("ch_terminos")

//ocultar el boton de envío

//validar si se marcó el campo de checkbox
function saludar(){
    nombre = prompt("Cómo te llamas?");
    alert("Respete las reglas: "+ nombre)
}