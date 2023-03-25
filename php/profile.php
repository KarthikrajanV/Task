<?php
header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

require '../vendor/autoload.php';
if($_SERVER['REQUEST_METHOD']=="POST")
{
   
    $email=$_POST['email'];
    $mongoclient = new MongoDB\Client();
 $collection =  $mongoclient->guvi->user_details;

$result = $collection->find(['email'=>$email]);

  foreach ($result as $userdetails) {
    echo json_encode(array('name'=>$userdetails["name"],'age'=>$userdetails["age"],'mobile'=>$userdetails["mobile"],'email'=>$userdetails["email"]));
};

}