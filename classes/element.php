<?php

class element{
	
public function starting_project($data){

	$user = base64_decode($_COOKIE['user']);//Привяжу только по id, думаю нету смысла парится на этим
	
	mkdir("project/". $user . "_" . "$data");
	exit;	
	mkdir("project/$user" . "_" . "$data/controller");
	mkdir("project/$user" . "_" . "$data/classes");
	mkdir("project/$user" . "_" . "$data/view");
	mkdir("project/$user" . "_" . "$data/view/css");
	mkdir("project/$user" . "_" . "$data/view/js");
	mkdir("project/$user" . "_" . "$data/view/img");
	mkdir("project/$user" . "_" . "$data/view/tpl");
	mkdir("project/$user" . "_" . "$data/libs");
	mkdir("project/$user" . "_" . "$data/libs/jquery");
	mkdir("project/$user" . "_" . "$data/libs/bootstrap");
	
	$project_libs_jquery = fopen("project/$user" . "_" . "$data/libs/jquery/jquery.js", "w+");				
	$project_libs_bootstrap_css = fopen("project/$user" . "_" . "$data/libs/bootstrap/bootstrap_css.css", "w+");				
	$project_libs_bootstrap_js = fopen("project/$user" . "_" . "$data/libs/bootstrap/bootstrap_js.js", "w+");				

	$project_autoload = fopen("project/$user" . "_" . "$data/autoload.php", "w+");
	$project_index = fopen("project/$user" . "_" . "$data/index.php", "w+");
	$project_view_index = fopen("project/$user" . "_" . "$data/view/index.php", "w+");
	
	
	copy("libs/jquery/jquery.min.js", "project/$user" . "_" . "$data/libs/jquery/jquery.js");
	copy("libs/bootstrap/bootstrap.min.css", "project/$user" . "_" . "$data/libs/bootstrap/bootstrap_css.css");
	copy("libs/bootstrap/bootstrap.min.js", "project/$user" . "_" . "$data/libs/bootstrap/bootstrap_js.js");

	
	copy("index.php", "project/$user" . "_" . "$data/index.php");	
	copy("autoload.php", "project/$user" . "_" . "$data/autoload.php");
	
	
	$project_view_style = fopen("project/$user" . "_" . "$data/view/css/style.css", "w+");		

$project_view_js = fopen("project/$user" . "_" . "$data/view/js/script.js", "w+");	
	
	
fwrite($project_view_index, '
<title>Редактирование</title>
<link rel="stylesheet" href="libs/bootstrap/bootstrap.min.css">
<link rel="stylesheet" href="project/'.$data.'/view/css/style.css">
<link rel="stylesheet" href="view/css/project_css_text.css">
<link rel="stylesheet" href="view/css/project_css_img.css">
<link rel="stylesheet" href="view/css/project_css_block.css">

<div id="add_menu-category">
	<span id="buton_call_control_panel_text">Текст</span>
	<span id="buton_call_control_panel_img">Фото</span>
	<span id="button_call_control_panel_block">Блок</span>
</div>


<script src="libs/jquery/jquery.min.js"></script>
<script src="view/js/project_js.js"></script>
<script src="view/js/project_js_img.js"></script>
<script src="view/js/project_block.js"></script>

');
	
	
	

}
	
public function unique_identificator(){
	$data =	rand(0, time());
	$data = substr($data, 0, 6);
	return $data;
}	

public function save_element(){
	$data = $this->unique_identificator();
	echo $data;
}
public function add_img($data){
	if($data["type"] == "image/png" || $data["type"] == "image/jpeg"){
		$result["operation"] = 1;
		move_uploaded_file($data["tmp_name"], "view/img/".$data["name"]);
		$result["src"] = "/view/img/".$data['name'];
		$result["id"] = $this->unique_identificator();
		$result["name"] = $data['name'];
		
	}else{
		$result["operation"] = 0;
	}
	return $result;
}
public function remove_img($data){
	$data = preg_replace("/.*name_/iu", "", $data);
	unlink("view/img/".$data);
}	
	
	
}