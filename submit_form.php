<?php
// Vérification que la requête est bien de type POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Récupération et validation des données du formulaire
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Vérification des champs obligatoires
    if (empty($name) || empty($email) || empty($message)) {
        echo "Erreur : Tous les champs sont obligatoires.";
        exit();
    }

    // Vérification de la validité de l'email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Erreur : Adresse email invalide.";
        exit();
    }

    // Adresse email du destinataire
    $to = "rahalihamza39@gmail.com";

    // Sujet de l'email
    $subject = "Message depuis votre formulaire de contact";

    // Contenu de l'email
    $emailContent = "
        Nom : $name\n
        Email : $email\n
        Message :\n$message
    ";

    // En-têtes de l'email
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Envoi de l'email
    if (mail($to, $subject, $emailContent, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Erreur : Impossible d'envoyer votre message. Veuillez vérifier la configuration du serveur.";
    }
} else {
    // Redirection si la méthode de requête n'est pas POST
    header("Location: index.html");
    exit();
}
?>