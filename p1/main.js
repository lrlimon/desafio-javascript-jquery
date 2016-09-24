// Funcion para sumar valores capturados
function sumaValores() {
    var suma = 0,
        ingreso = 0;

    do {
        ingreso = prompt("Ingresa un numero");

        if (isNaN(ingreso)) {
            if (ingreso != "fin") {
                alert("Se requiere un valor numerico");
            }
        } else {
            suma += parseFloat(ingreso);
        }
    } while (ingreso != "fin");

    console.log(suma);
}
