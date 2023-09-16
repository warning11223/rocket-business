<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $message = $_POST["message"];

    $to = "rbru-metrika@yandex.ru";
    $subject = "Новая заявка с вашего сайта";
    $headers = "From: " . $name . "\r\n";
    $headers .= "Reply-To: " . $name . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    $mailBody = "Имя: " . $name . "<br>";
    $mailBody .= "Сообщение: " . $message . "<br>";

    if (mail($to, $subject, $mailBody, $headers)) {
        echo "Сообщение успешно отправлено";
    } else {
        echo "Ошибка при отправке сообщения";
    }
}
?>