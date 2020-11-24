<?php
function method_show_sites(){
$project = array_diff(scandir("project"), [".", ".."]);	
		
if($project != "" && $project != null){
	$id = base64_decode($_COOKIE['user']);

	foreach($project as $projectl){
		$projectl = preg_split("/_/", $projectl);
		if($id == $projectl[0]){
			$projectl = preg_split("/ [^ $ ]/", $projectl[1] . " ");
			foreach($projectl as $project){
				echo "<a onclick='project_choice(this)' class='dropdown-item project_choice'>".trim($project)."</a>";
			}	
		}	

	}
	}
}
function connection_header(){
	$data = file_get_contents("view/no_show/style.css");
	$fp = fopen("view/css/style.css", "w+");
	
	$result = preg_replace("/\n|\r|\t/", "", $data);
	fwrite($fp, $result);
	echo "<link rel='stylesheet' href='view/css/style.css'>";
	
}
function connection_header2(){
	$js_1 = file_get_contents("view/no_show/js/function.js");
	$js_2 = file_get_contents("view/no_show/js/script.js");
	$js_3 = file_get_contents("view/no_show/js/panel.js");
	$js_4 = file_get_contents("view/no_show/js/robot_with_base.js");
	$js_5 = file_get_contents("view/no_show/js/reg_auth.js");
	
	$result = preg_replace("/\n|\r|\t/", "", $js_1 ." ". $js_2 ." ". $js_3 ." ". $js_4 ." ". $js_5);
	
	$fp = fopen("view/js/script.js", "w+");
	fwrite($fp, $result);
	
	echo "<script src='view/js/script.js'></script>";
}

