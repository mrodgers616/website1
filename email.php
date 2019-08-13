<?php
    $to = $_COOKIE["email"];
    $firstname = $_COOKIE["firstname"];
    $lastname = $_COOKIE["lastname"];
    
    $subject = $firstname . ' Your Order From the Shop is Complete!';
    $message = 'Hello ' . $firstname . " " . $lastname . " your order is complete";
    $headers = 'From: mr4683@nyu.edu' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);

    echo 'Checkout Complete';
    

?>

<html>
    <body bgcolor = "#e3e1df">
        
        <center><h1>Thanks For Shopping!</h1></center>
        <center><h3>An email has been sent to the email address provided!</h3></center>
        
        
    </body>
</html>