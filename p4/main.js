// Funcion para dibujar un cuadro con asteriscos
function dibujaCuadro(numero) {
    for (var i = 1; i <= numero; i++) {
        var linea = "";

        for (var j = 1; j <= numero; j++) {
            if (i == 1 || i == numero) {
                linea += "*";
            } else {
                if (j == 1 || j == numero) {
                    linea += "*";
                } else {
                    linea += " ";
                }
            }
        }

        console.log(linea);
    }
}

// Funcion para probar dibujar un cuadro con asteriscos
function pruebaDibujaCuadro() {
    var numero = prompt("Ingresa un numero");

    if (isNaN(numero)) {
        alert("Se requiere un valor numerico");
    } else {
        dibujaCuadro(parseFloat(numero));
    }
}
