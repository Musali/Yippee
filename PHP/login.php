<?php 

error_reporting(E_ALL);
ini_set('display_errors', 1);

$usernames = $_GET["usernames"];
$password = $_GET["password"];

class User {
	public $success = false;
	public $logins = "";
}

class Logins {
	public $username ="";
	public $psw = "";

}

$user1 = new Logins();

$user1->username = "joe";
$user1->psw="joe123";
$user2 = new Logins();
$user2->username="jane";
$user2->psw="jane999";

if ($usernames == "joe" && $password=="joe123"){
	$user = new User();
	$user->success = true;
	$user->logins = $user1;
}
elseif ($usernames == "jane" && $password=="jane999"){
	$user = new User();
	$user->success = true;
	$user->logins = $user2;
}
else {
	$user = new User();
}

echo json_encode ($user);

?>