// Constructor de objeto Telefono
function Telefono(numero, marca, color) {
   this.numero = numero;
   this.marca = marca;
   this.color = color;
   this.contadorLlamadas = 0;
   this.numerosMarcados = [];

   this.marcar = function(numeroX) {
       this.numerosMarcados[this.contadorLlamadas++] = numeroX;
   };
}

// Funcion para probar constructor de objeto Telefono
function pruebaTelefono() {
    var miNumero = new Telefono("8123517792", "Telcel", "Negro"),
        otroNumero = new Telefono("8184352176", "Movistar", "Gris");

    console.log(miNumero);
    console.log("Llamadas realizadas: " + miNumero.contadorLlamadas);

    miNumero.marcar("8184352176");
    console.log("Llamadas realizadas: " + miNumero.contadorLlamadas);
    console.log("Numeros marcados: " + miNumero.numerosMarcados);

    miNumero.marcar("8185228954");
    console.log("Llamadas realizadas: " + miNumero.contadorLlamadas);
    console.log("Numeros marcados: " + miNumero.numerosMarcados);

    console.log(otroNumero);
    console.log("Llamadas realizadas: " + otroNumero.contadorLlamadas);

    otroNumero.marcar("8123517792");
    console.log("Llamadas realizadas: " + otroNumero.contadorLlamadas);
    console.log("Numeros marcados: " + otroNumero.numerosMarcados);

    otroNumero.marcar("8185228954");
    console.log("Llamadas realizadas: " + otroNumero.contadorLlamadas);
    console.log("Numeros marcados: " + otroNumero.numerosMarcados);

    otroNumero.marcar("8374094519");
    console.log("Llamadas realizadas: " + otroNumero.contadorLlamadas);
    console.log("Numeros marcados: " + otroNumero.numerosMarcados);
}
