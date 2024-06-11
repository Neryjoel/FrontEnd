document.getElementById("generar").addEventListener("click", function() {
    var numero = parseInt(document.getElementById("numero").value);
    var tablaHTML = "<h2>Tabla de Multiplicar del " + numero + "</h2><table>";
    
    if(numero >= 0) {
        for(var i = 1; i <= 10; i++) {
            tablaHTML += "<tr><td>" + numero + " x " + i + "</td><td>=</td><td>" + (numero * i) + "</td></tr>";
        }
        tablaHTML += "</table>";
        document.getElementById("tabla").innerHTML = tablaHTML;
    } else {
        document.getElementById("tabla").innerHTML = "<p>Por favor, ingrese un número positivo.</p>";
    }
});
