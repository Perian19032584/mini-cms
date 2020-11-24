<?php

if($_SERVER['REQUEST_URI'] == "/?view_project"){
	header("Location: http://cms.slavno.net/project/".base64_decode($_COOKIE['user'])."_".$_COOKIE['project']);
	exit;
}

if($_SERVER['REQUEST_URI'] == "/?test"){
	include_once($_SERVER["DOCUMENT_ROOT"]. "/view/test/index.php");
	exit;
}
error_reporting(0);

include_once($_SERVER["DOCUMENT_ROOT"]. "/autoload.php");
	
if($_GET['controller']){
	if(file_exists("controller/".$_GET["controller"].".php")){
		include_once($_SERVER["DOCUMENT_ROOT"]. "/controller/".$_GET["controller"].".php");
		exit;	
	}else{
		echo "Страница не найдена";
		exit;
	}
} 







/*if($result2[0] == "editing_project_"){
	echo "<a href='/'><span class='exit_editing_and_view_project'>Выйты</span></a>";
	echo "<img id='page' src='../view/img/page.png'>";
	echo "<img id='create_button' src='../view/img/add_item2.png'>";
}
if($result[0] == "view_project_"){
	echo "<a href='/'><span class='exit_editing_and_view_project'>Выйти</span></a>";
}*/

include ("view/index.php");


?>