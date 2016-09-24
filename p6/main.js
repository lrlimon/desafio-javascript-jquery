$(document).ready(
    function() {
        console.log("Pagina cargada !!!");
        var ultimoInicial = parseFloat($("ul>li:last-child").html());   // Conserva el valor del ultimo elemento de la lista

        $(".btn-agregar").on("click",
            function() {
                ultimo = parseFloat($("ul>li:last-child").html());

                if (isNaN(ultimo)) {
                    ultimo = ultimoInicial;
                }

                ultimo++;
                ultimoInicial = ultimo; // Actualiza el valor del ultimo elemento de la vista
                $("ul").last("li").append("<li>" + ultimo + "</li>");
            }
        );

        $(".btn-eliminar").on("click",
            function() {
                if (isNaN(parseFloat($("ul>li:first-child").html()))) {
                    alert("La lista esta vacia !!!");
                } else {
                    $("ul>li:first-child").remove();
                }
            }
        );
    }
);
