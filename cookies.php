<?php
    $cookie_name1 = "firstname";
    $cookie_value = $_POST["firstname"];
    setcookie($cookie_name1, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day

    $cookie_name2 = "lastname";
    $cookie_value = $_POST["lastname"];
    setcookie($cookie_name2, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day

    $cookie_name3 = "email";
    $cookie_value = $_POST["email"];
    setcookie($cookie_name3, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day

    
    header("Location: inventoryFinal.php");
        
?>