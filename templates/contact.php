<?php

$recipient = 'johanneskammler@gmail.com';
$redirect = 'success.html';

switch ($_SERVER['REQUEST_METHOD']) {
    case ("OPTIONS"):
        header("Access-Control-Allow-Origin: *");
        header("Access-Control-Allow-Methods: POST");
        header("Access-Control-Allow-Headers: content-type");
        exit;
    case ("POST"):
        header("Access-Control-Allow-Origin: *");

        $subject = "Contact From " . $_POST['name'];
        $headers = "From:  noreply@developerakademie.com";

        mail($recipient, $subject, $_POST['e-mail'], $_POST['message'], $headers);
        header("Location: " . $redirect); 

        break;
    default:
        header("Allow: POST", true, 405);
        exit;
}