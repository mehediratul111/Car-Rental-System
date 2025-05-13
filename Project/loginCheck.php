<?php
    session_start();
    if(isset($_POST['submit'])){
        $email = trim($_POST['email']);
        $password = trim($_POST['password']);

        if($email == "" || $password == ""){
            echo "null email/password!";
        }else if($email == $password){
           
            $_SESSION['status'] = true;
            header('location: home.php');
        }else{
            echo "invalid User!";
        }
    }else{
        echo "Invalid request! Please submit form!";
    }
?>