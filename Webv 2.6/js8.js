// Función para mostrar la fecha y hora general
function mostrarFecha() {
    setInterval(function() {
        var fecha = new Date();
        
        // Formatear la fecha
        var opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var fechaFormateada = fecha.toLocaleDateString('es-ES', opcionesFecha);
        
        // Formatear la hora
        var horas = fecha.getHours();
        var minutos = fecha.getMinutes();
        var segundos = fecha.getSeconds();
        horas = (horas < 10 ? "0" : "") + horas;
        minutos = (minutos < 10 ? "0" : "") + minutos;
        segundos = (segundos < 10 ? "0" : "") + segundos;
        var horaFormateada = horas + ":" + minutos + ":" + segundos;
        
        // Actualizar el contenido del div
        document.getElementById("fechaYHora").innerHTML = "<b>Hoy es: " + fechaFormateada + "<br>La hora actual es: " + horaFormateada + "</b>";
    }, 1000);
}
