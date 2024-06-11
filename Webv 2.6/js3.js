var num = 1;
var suma = 0;

// Crear un sumador que se detiene cuando el número ingresado es CERO
while (num != 0) {
    num = Number(prompt("Ingrese un N°", ""));
    if (isNaN(num)) {
        alert("Por favor, ingrese un número válido.");
        continue;
    }
    suma += num; 
}
document.write("La suma es: " + suma);
