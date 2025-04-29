<?php



if(isset($_POST['submit'])){
    $fullName = trim($_POST['fullName']);
    $dob = trim($_POST['dob']);
    $licenseNumber = trim($_POST['licenseNumber']);
    $preferences = trim($_POST['preferences']);
    $rentalHistory = trim($_POST['rentalHistory']);
    

    if($fullName == "" || $dob == "" || $licenseNumber == "" || $preferences == "" || $rentalHistory == ""){
        echo "Please fill out all fields!";
    }else if(strlen($licenseNumber) >= 5 && strlen($licenseNumber) <= 15){
        echo "Customer profile submitted successfully!";
    }else{
        echo "License Number must be between 5 and 15 characters!";
    }
}else{
    echo "Invalid request! Please submit form!";
}
?>
