document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita la recarga de la página

    // Mostrar alerta de carga
    Swal.fire({
        title: 'Enviando mensaje...',
        text: 'Por favor espera un momento.',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    // Capturar datos del formulario
    const formData = new FormData(this);

    // Envío por AJAX hacia send_mail.php
    fetch('send_mail.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        if (data.trim() === "exito") {
            Swal.fire({
                icon: 'success',
                title: '¡Mensaje enviado!',
                text: 'Nos pondremos en contacto contigo muy pronto.',
                confirmButtonColor: '#6d5ce7'
            });
            document.getElementById('contactForm').reset(); // Limpiar campos
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error al enviar',
                text: 'Ocurrió un inconveniente. Inténtalo de nuevo.',
                confirmButtonColor: '#d33'
            });
        }
    })
    .catch(error => {
        Swal.fire({
            icon: 'error',
            title: 'Error de conexión',
            text: 'No se pudo establecer conexión con el servidor.',
            confirmButtonColor: '#d33'
        });
    });
});