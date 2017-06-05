// IIFE - Immediately Invoked Function Expression
(function () {


  var contador = 140;

  $("#character").text(contador);

  var cargarPagina = function () {
    //Eventos
    $("#twitter-form").submit(agregarTweet);
    $("#message").keyup(validarNumeroDeCaracteres);
    $("#message").keyup(caracteresRestantes);
    // $("#message").keyup(cambiarColor);
  };

  var agregarTweet = function (e) {
    e.preventDefault();
    // Obtener elementos del DOM
    var $botonAgregar= $("#add-button");
    var $mensajeContenedor = $("#message");
    var $publicaciones = $("#posts");
    var mensaje = $mensajeContenedor.val();

    //Crear elementos del DOM
    var $contenedorPublicacion = $("<div class='jumbotron'/>");
    var $parrafo = $("<p />");

    //Agregar elementos
    $parrafo.text(mensaje);
    $contenedorPublicacion.append($parrafo);
    $publicaciones.prepend($contenedorPublicacion);

    // Limpiar textArea
    $mensajeContenedor.val(" ");
    $botonAgregar.attr("disabled", true);
    contador = 140;
    $("#character").text(contador);
  };

  var validarNumeroDeCaracteres = function () {
    var $botonAgregar = $("#add-button");
    if ($(this).val().trim().length > 140) {
      $("#character").text(contador);
      contador--;
      $botonAgregar.attr("disabled", true);
    } else if ($(this).val().trim().length > 0){
      $botonAgregar.removeAttr("disabled");
    } else {
      $botonAgregar.attr("disabled", true);
    }
  };

  var caracteresRestantes = function () {
    var caracteresLimite = 0;
    var caracteresMaximos = 140;
    caracteresLimite = $("#message").val().length;

    var totalCaracteres = caracteresMaximos - caracteresLimite;

    $("#character").text(totalCaracteres);

		if (totalCaracteres == 120 ){
			$("#character").addClass("label-success");
		} if (totalCaracteres == 130){
			$("#character").removeClass("label-success").addClass("label-warning");
		} if (totalCaracteres >=141){
			$botonAgregar.attr("disabled", true);
			$("#character").removeClass("label-warning").addClass("label-danger");
		} if (totalCaracteres < 140){
			$("#character").removeClass("label-danger").addClass("label-warning");
		} if (totalCaracteres <130){
			$("#character").removeClass("label-warning").addClass("label-success");
}
  };



  $(document).ready(cargarPagina);

})();
