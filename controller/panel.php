<?php
$panel = new panel;

switch($_GET['method']){
	case "delete_project":
		$panel->delete_project($_GET['data']);
		exit;
	break;	
	case "chenge_project":
		$panel->chenge_project($_POST['data'], $_POST['strGET']);
		exit;
	break;			
}


