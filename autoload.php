<?php
include('libs/function.php');
$bd = new PDO('mysql:host=localhost;dbname=sasha_cms', "sasha_sasha", "2580ervint");



function __autoload($classes){
	include_once($_SEVER['DOCUMENT_ROOT']. "classes/$classes.php");
}