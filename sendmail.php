<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;
    use PHPMailer\PHPMailer\SMTP;

    require 'PHPMailer/src/Exception.php';
    require 'PHPMailer/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'PHPMailer/language');
    $mail->Host = "smtp.yandex.ru";

    // optional
    // used only when SMTP requires authentication  
    $mail->SMTPAuth = true;
    $mail->Username = 'diertojiev@yandex.ru';
    $mail->Password = 'Teakwondo2019@';


    $mail->setFrom('diertojiev@yandex.ru', "DIOR's site");
    $mail->addAddress("diertojiev@yandex.ru");
    $mail->Subject = "Привет, это DIOR";

    $body = '<h1>Это супер письмо!</h1>';

    if(trim(!empty($_POST['firstName']))){
        $body.="<p><strong>Имя:</strong>".$_POST['firstName'].'</p>';
    }
    if(trim(!empty($_POST['lastName']))){
        $body.="<p><strong>Фамилия:</strong>".$_POST['lastName'].'</p>';
    }
    if(trim(!empty($_POST['phoneNumber']))){
        $body.="<p><strong>Номер тел.:</strong>".$_POST['phoneNumber'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.="<p><strong>E-mail:</strong>".$_POST['phoneNumber'].'</p>';
    }
    if(trim(!empty($_POST['carType']))){
        $body.="<p><strong>Тип машины:</strong>".$_POST['carType'].'</p>';
    }
    if(trim(!empty($_POST['experience']))){
        $body.="<p><strong>Опыт:</strong>".$_POST['carType'].'</p>';
    }
    if(trim(!empty($_POST['cities']))){
        $body.="<p><strong>Город:</strong>".$_POST['carType'].'</p>';
    }
    if(trim(!empty($_POST['additionalInfo']))){
        $body.="<p><strong>Доп. информация:</strong>".$_POST['additionalInfo'].'</p>';
    }

    $mail->Body = $body;

    if(!$mail->send()) {
        $message = 'Ошибка!';
    } else {
        $message = 'Данные отправлены!';
    };

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>