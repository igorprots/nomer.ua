d<?php

    require_once('phpmailer/PHPMailerAutoload.php');
    $mail = new PHPMailer;
    $mail->CharSet = 'utf-8';

    $name = $_POST['user_name'];
    $phone = $_POST['user_phone'];
    $number = $_POST['user_number'];

    //$mail->SMTPDebug = 3;                               // Enable verbose debug output

    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';                                                                                              // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'protsxe51@gmai.com'; // Ваш логин от почты с которой будут отправляться письма
    $mail->Password = 'cgfhnfr1234'; // Ваш пароль от почты с которой будут отправляться письма
    $mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

    $mail->setFrom('protsxe51@gmai.com'); // от кого будет уходить письмо?
    $mail->addAddress('ihor.protsenko@rogmax.com');     // Кому будет уходить письмо 
    //$mail->addAddress('ellen@example.com');               // Name is optional
    //$mail->addReplyTo('info@example.com', 'Information');
    //$mail->addCC('cc@example.com');
    //$mail->addBCC('bcc@example.com');
    //$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    //$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
    $mail->isHTML(true);                                  // Set email format to HTML

    $mail->Subject = 'Заявка с тестового сайта';
    $mail->Body    = '' . $name . ' оставил заявку, его телефон ' . $phone . '<br>Выбраный номер ' . $number;
    $mail->AltBody = '';

    if (!$mail->send()) {
        echo '<div class="error">Вы не ввели ваши номер.</div>';
    } else {
        header('location: thankyou.html');
    }
