<?
switch($_GET['method']){
	case "create_cookie_ajax":
		setcookie('project', $_POST['data'], time()+3600);
		
	break;
	case "show_cookie_ajax":
		echo "123";
		//echo $_COOKIE[$_POST['data']];
	break;	
	case "show_sites":
		method_show_sites();
	break;
}

