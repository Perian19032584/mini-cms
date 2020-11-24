<?php
class work_bd{
	public function create_table($data){	
	global $bd;
		$q = $bd->query('create table user_'.base64_decode($_COOKIE['user']) ."_". $_COOKIE['project']."_" .$data.'(
		id int NOT NULL AUTO_INCREMENT,
		PRIMARY KEY (id)
		)');		
	}	
	public function create_table_bd($data){
	global $bd;

		$this->create_table($data);
		$q = $bd->query("DESCRIBE user_". base64_decode($_COOKIE['user']) ."_". $_COOKIE['project']. "_" .$data);

		echo "<tbody class='interval'>";

		foreach($q as $key => $table){
		
	
			echo "<tr class='id_add $key'><th>" . $key . "</th>";

		$default = ($table['Default'] == null) ? $default = "Ничего" : $table['Default'];

			echo "<th class='for_remove'>".$table['Field']."</th>";
			echo "<th>".$table['Type']."</th>";
			echo "<th>".$default."</th>";
			echo "<th><img class='img_setting_x remove_string_table' src='view/img/remove.png'><img class='img_setting_x' src='view/img/edit.png'></th>";
			echo "</tr>";
		}
		echo "</tbody></table>";
	
	}
	public function add_bd_table($data){
		global $bd;
		$q = $bd->query("ALTER TABLE `user_" .base64_decode($_COOKIE['user'])."_".$_COOKIE['project']."_".$data['name']."` ADD `".$data['meaning_names']."` ".$data['dsdtsdc']." NOT NULL");

		if($q == true){
			echo "success";
		}else{
			echo "fail";
		}

	}
	public function detete_table_bd($data){
		global $bd;
		
		$q = $bd->query("ALTER TABLE `user_". base64_decode($_COOKIE['user']) . "_".  $_COOKIE['project'] . "_" .$data['dsdtsdc']."` DROP `".$data['table_name']."`;");

		if($q == false){
			$q = $bd->query("DROP TABLE `user_". base64_decode($_COOKIE['user']) . "_".  $_COOKIE['project'] . "_" . $data['dsdtsdc']."`;");
		}	
	}
	public function show_bd_table(){
		global $bd;
	
		$q = $bd->query("SHOW TABLES LIKE 'user_".base64_decode($_COOKIE['user']). "_" . $_COOKIE['project']."_%';");
		foreach($q as $rr){
			$tt = explode("_", $rr[0]);
			echo "<span class='dropdown-item ".$tt[3]."' id='css_app'>".$tt[3]."</span>";
		}
	
		
	}

	/*public function show_inster_table_add($data){
		global $bd;
		
		$q = $bd->query("DESCRIBE user_". $data);
		
		echo "<tbody class='interval'>";

		foreach($q as $key => $table){
		
	
			echo "<tr class='id_add $key'><th>" . $key . "</th>";

		$default = ($table['Default'] == null) ? $default = "Ничего" : $table['Default'];

			echo "<th class='for_remove'>".$table['Field']."</th>";
			echo "<th>".$table['Type']."</th>";
			echo "<th><textarea rows='число'></textarea></th>";
			echo "<th><img class='img_setting_x remove_string_table' src='view/img/remove.png'><img class='img_setting_x' src='view/img/edit.png'></th>";
			echo "<th><img class='ddd_css' src='view/img/check_mark.png'></th>";
			echo "</tr>";
		}
		echo "</tbody></table>";		
	}*/
}

