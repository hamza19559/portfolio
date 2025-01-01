<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des données du formulaire
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Adresse email du destinataire (votre email)
    $to = "rahalihamza39@gmail.com";

    // Sujet de l'email
    $subject = "Message depuis votre formulaire de contact";

    // Contenu de l'email
    $emailContent = "
        Nom: $name\n
        Email: $email\n
        Message:\n$message
    ";

    // En-têtes de l'email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envoi de l'email
    if (mail($to, $subject, $emailContent, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Erreur : Impossible d'envoyer votre message. Veuillez réessayer plus tard.";
    }
} else {
    echo "Méthode de requête non autorisée.";
}
?>
