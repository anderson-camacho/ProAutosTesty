// loadComponents.js
document.addEventListener("DOMContentLoaded", function () {
    // Cargar la navegación superior
    fetch("generalHtml/topNav.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("top-nav-container").innerHTML = data;
        });

    // Cargar el encabezado
    fetch("generalHtml/header.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("header-container").innerHTML = data;
        });

        // Cargar el carrusel
    fetch("generalHtml/carruselPrincipal.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("carousel-slides-principal").innerHTML = data;
    });

            // Cargar el pie de página
    fetch("generalHtml/serviceSection.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("servicios-container").innerHTML = data;
    });

    // Cargar el pie de página
    fetch("generalHtml/footer.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("footer-container").innerHTML = data;
        });

    // Cargar la sección de venta de vehículos
    fetch("generalHtml/sellerCarSection.html")
        .then((response) => response.text())
        .then((data) => {
            document.getElementById("venta-vehiculos-container").innerHTML = data;
        });

        // Cargar la sección contactame
    fetch("generalHtml/contactForm.html")
    .then((response) => response.text())
    .then((data) => {
        document.getElementById("contact-form-container").innerHTML = data;
    });
    
     // Cargar la sección contactame
     fetch("generalHtml/whatsappBotton.html")
     .then((response) => response.text())
     .then((data) => {
         document.getElementById("whatsapp-botton-container").innerHTML = data;
     });
});
