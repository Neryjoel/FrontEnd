//uso de ciclo for
//programa que imprime los numeros pares de un rango dado
var numero = prompt("Ingrese un numero","");

var x;
//empezamos en 2 por que no es necesario probar
//con cero o uno
for(x=2;x<=numero;x++){
    //para saber si es par
    //el resto debe ser cero
    if(x%2==0){
        document.write("\t"+x)
    }
}