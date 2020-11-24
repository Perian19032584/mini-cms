<?php
$reg_auth = new reg_auth();

switch($_GET['method']){
	case "registration":
		$reg_auth->validate_result($_POST['data']);
	break;
	case "create_user":
		$reg_auth->create_user(base64_decode($_GET['data']));
	break;
	case "authorization":
		$reg_auth->authorization($_POST['data']);
	break;

}