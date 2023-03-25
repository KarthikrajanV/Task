<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

require '../vendor/autoload.php';
if ($_SERVER['REQUEST_METHOD'] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];
    $name = $_POST['name'];
    $dob = $_POST['dob'];
    $mobile = $_POST['Phone_number'];
    $age = $_POST['age'];
    $dbhost = "localhost";
    $dbuser = "root";
    $dbpass = "";
    $dbname = "guvi";

    $mongoclient = new MongoDB\Client();
    $collection = $mongoclient->guvi->user_details;

    if (!$mysqlconnection = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname)) {
        die("failed to connect!");
    }
    $query1 = "select * from users where email='$email'limit 1";
    $result1 = mysqli_query($mysqlconnection, $query1);
    if (mysqli_num_rows($result1) > 0) {
        echo "this email already exists";
        die;
    }

    $stmt = $mysqlconnection->prepare("INSERT INTO users (email,password) VALUES (?, ?)");
    $stmt->bind_param("ss", $email, $password);
    $result = $stmt->execute();
    $mongoresult = $collection->insertOne(['name' => $name, 'age' => $age, 'mobile' => $mobile, 'dob' => $dob, 'email' => $email]);

    if ($result && $mongoresult) {
        echo "Success";
    } else {
        echo "Failed";
    }

}
?>