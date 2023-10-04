$(function () {
    // Oculta todas las secciones excepto la de Inicio al cargar la página
    $("#eventos, #contactos, #login").hide();

    // Maneja el clic en los enlaces del navbar
    $(".nav-link").click(function (e) {
        e.preventDefault(); // Evita que se desplace automáticamente a la sección

        // Obtén el ID de la sección a la que se debe desplazar desde el texto del enlace
        var targetSectionId = $(this).text().toLowerCase();

        // Oculta todas las secciones
        $("#index, #eventos, #contactos, #login").hide();

        // Muestra la barra de navegación
        $(".navbar").show();

        // Si el enlace es "Inicio", muestra solo la sección de Inicio
        if (targetSectionId === "inicio") {
            $("#index").show();
        } else {
            // Para los demás enlaces, muestra la sección correspondiente
            $("#" + targetSectionId).show();
        }
    });

});
$(function () {
    $(".card-text").hide(); // Oculta todos los card-text al principio

    $(".btn-toggle").click(function () {
        // Encuentra el elemento card-text correspondiente utilizando el índice del botón
        var index = $(this).index(".btn-toggle");
        $(".card-text").eq(index).toggle(); // Alternar mostrar u ocultar el texto correspondiente
    });
});

