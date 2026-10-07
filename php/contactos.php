<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "antonysanchespena572@gmail.com"; // Tu dirección de correo
    $subject = "Nuevo mensaje de contacto: " . strip_tags($_POST['subject']);
    
    $name    = strip_tags($_POST['name']);
    $company = strip_tags($_POST['company']);
    $phone   = strip_tags($_POST['phone']);
    $email   = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $message = strip_tags($_POST['message']);

    $body = "Has recibido un nuevo mensaje desde el formulario de contacto:\n\n";
    $body .= "Nombre: $name\n";
    $body .= "Empresa: $company\n";
    $body .= "Teléfono: $phone\n";
    $body .= "Correo: $email\n\n";
    $body .= "Mensaje:\n$message\n";

    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $body, $headers)) {
        echo "Mensaje enviado exitosamente.";
    } else {
        echo "Error al enviar el mensaje.";
    }
}
?>