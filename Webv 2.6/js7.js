var num = 1;

function cambiofondo() {
    setInterval(fondo, 1000);
}

function fondo() {
    num++;
    // Alternar entre las dos imágenes
    var imagen = "url(img/color" + (num % 2 + 1) + ".jpg)";
    document.body.style.backgroundImage = imagen;
}
