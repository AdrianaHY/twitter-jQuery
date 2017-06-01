// IIFE - Immediately Invoked Function Expression
(function () {
	var contador = 0;

	var cargarPagina = function () {
		// Envío de Twitter
		$("#twitter-form").submit(agregarToDo);
		$("#message").keyup(validarContenido);
	};

	var agregarToDo = function (e) {
		e.preventDefault();
		// Para obtener los datos
		var $contenedor = $("#posts");
		var $mensajeContenedor = $("#message");
		var $botonAgregar = $("#add-button");
		var mensaje = $mensajeContenedor.val();


		// Para crear elementos
		var $postContenedor = $("<article />", { "class": "jumbotron" });
		var $postTexto = $("<label />");

		var identificador = "marcador-" + contador;

		// Para personalizar elementos

		$postTexto.attr("for", identificador);
		$postTexto.text(mensaje);

		// Para agregarlos al DOM
		$postContenedor.append($postTexto);
		$contenedor.prepend($postContenedor);

		// Para borrar el contenido del textarea
		$mensajeContenedor.val("");

		contador++;
	};

    //Para eliminar el tweet creado
	var eliminarToDo = function () {
		$(this).parent().remove();
	};

	// Cuando carga la página
	$(document).ready(cargarPagina);
})();
