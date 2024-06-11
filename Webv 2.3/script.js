document.getElementById('convertir').addEventListener('click', function () {
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var cantidad = document.getElementById('cantidad').value;

    if (from === to) {
        alert('Por favor, seleccione monedas diferentes para realizar la conversión.');
        return;
    } else if (cantidad === "") {
        alert("Rellene la cantidad");
        return;
    }

    // Función para obtener la tasa de cambio desde la tabla
    function getExchangeRate(currency) {
        var rows = document.querySelectorAll('#exchangeRates tbody tr');
        for (var i = 1; i < rows.length; i++) {
            if (rows[i].children[0].dataset.currency === currency) {
                return {
                    compra: parseFloat(rows[i].children[1].innerText),
                    venta: parseFloat(rows[i].children[2].innerText)
                };
            }
        }
        return null;
    }

    var tasaFrom = getExchangeRate(from);
    var tasaTo = getExchangeRate(to);

    if (!tasaFrom || !tasaTo) {
        alert('Tasa de cambio no encontrada para alguna de las monedas seleccionadas.');
        return;
    }

    // Realizar la conversión
    var tasaIntermedia = cantidad * tasaFrom.venta; // Convertir a PYG (guaraní)
    var cambio = tasaIntermedia / tasaTo.compra; // Convertir de PYG a la moneda deseada

    document.getElementById('resultado').innerHTML = 'Resultado: ' + cantidad + ' ' + from.toUpperCase() + ' = ' + cambio.toFixed(2) + ' ' + to.toUpperCase();
});
