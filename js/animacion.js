

document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("a");
    
    // Agregar el evento a todos los enlaces
    links.forEach(link => {
        link.addEventListener("click", function(event) {
            // Prevenir la navegación instantánea
            event.preventDefault();
            
            // Añadir la clase fade-out para iniciar la transición
            document.body.classList.add("fade-out");
            
            // Esperar el tiempo de la transición antes de cambiar la página
            setTimeout(() => {
                window.location.href = this.href;
            }, 500); // Este tiempo debe coincidir con la duración en CSS
        });
    });
});
