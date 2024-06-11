var lista = [
    'img/color1.jpg',
    'img/color2.jpg',
    'img/color3.jpg'
];
var indiceActual = 0;

function cambiarImagen(direccion) {
    // Determinar el nuevo índice de imagen
    if (direccion === 'anterior') {
        indiceActual = (indiceActual === 0) ? lista.length - 1 : indiceActual - 1;
    } else {
        indiceActual = (indiceActual === lista.length - 1) ? 0 : indiceActual + 1;
    }
    // Cambiar la imagen principal
    document.getElementsByName("principal")[0].src = lista[indiceActual];
}

function cambiarMiniatuta(indice) {
    // Cambiar la imagen principal al hacer clic en la miniatura
    document.getElementsByName("principal")[0].src = lista[indice];
    // Actualizar el índice actual
    indiceActual = indice;
}
