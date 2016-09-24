// Funcion para copiar un arreglo
function copiaArreglo(arr) {
    var arrNuevo = [];

    for (var i = 0; i < arr.length; i++) {
        arrNuevo[i] = arr[i];
    }

    return arrNuevo;
}

// Funcion para probar copia de arreglo
function pruebaCopiaArreglo() {
    var arr1 = [3, 2, 6, 9, 5, 4],
        arr2 = copiaArreglo(arr1);

    console.log("Arreglo 1 (antes): " + arr1);
    console.log("Arreglo 2 (antes): " + arr2);

    arr1[2] = 7;
    arr1[5] = 1;
    arr2[1] = 0;
    arr2[4] = 8;

    console.log("Arreglo 1 (despues): " + arr1);
    console.log("Arreglo 2 (despues):" + arr2);
}
