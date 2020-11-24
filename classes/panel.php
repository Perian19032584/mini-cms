<?php
class panel{
	public function delete_project($data){
		$data = trim(preg_replace("/.*data=/iu", "", $data));
		exec("rm -R project/".$data);//Потом проверик как работает на сервере
	}
	public function chenge_project($data, $strGET){
		$strGET = preg_replace("/.*data=/iu", "", $strGET);
		rename("project/$strGET", "project/$data");
	}
}
