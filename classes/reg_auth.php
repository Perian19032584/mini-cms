<?php
class reg_auth{
	public function validate_result($data){
		$name = trim($this->validate_name($data['result_name_reg']));
		$email = trim($this->validate_email($data['result_email_reg']));
		$password = trim($this->validate_password($data['result_password_reg']));
	
		global $bd;
		$result = $bd->prepare("SELECT email from user where email='$email'");
		$result->execute();
		$result = $result->fetch(PDO::FETCH_ASSOC);
		if($result == false){
			$bd->query("delete from temporary_user where email='$email'");
			$query = $bd->prepare("INSERT INTO temporary_user(`email`, `time`) VALUES(:email, :date)");
			
			$date = date('H');
			$query->bindParam(':email', $email);
			$query->bindParam(':date', $date);
			$query->execute();
			$data = base64_encode("$name $email $password");
			mail($email, 'Потверждение личности', 'Для продолжение авторизации вам нужно перейти по ссылке http://cms.slavno.net/?controller=reg_auth&method=create_user&data='.$data);
			echo "mistake_no $email";
		}else{
			echo "mistake_user_kol";
		}
	}	
	public function validate_email($email){
		if(preg_match("/[_a-z0-9\.]+(@)[a-z0-9]+(\.[a-z])/iu", $email)){
			return $email;
		}else{
			echo "mistake_email";		
			exit;			
		}
	}
	public function validate_name($name){
		if(preg_match("/[а-я]/iu", $name)){	
			echo "mistake_name_inv_rus";
			exit;
		}else{			
			if(preg_match("/.{4,50}/iu", $name)){
				return $name;
			}else{
				echo "mistake_name_kol";
				exit;	
			}
		
	}
	}
	public function validate_password($password){
		if(preg_match("/.{4,50}/", $password)){
			$result = hash('sha256', md5($password ."$".$time));
			return $result;
		}else{
			echo "mistake_password_kol";
			exit;				
		}
	}
	
	public function create_user($data){
		preg_match_all('/.[^ ]*|/iu', $data, $result);
		$name = trim($result[0][0]);
		$email = trim($result[0][1]);
		$password = trim($result[0][2]);
		
		global $bd;	
		
		$result = $bd->prepare("SELECT id from temporary_user where email=:email");
		$result->bindParam(':email', $email);
		$result->execute();
		$result = $result->fetch(PDO::FETCH_ASSOC);

	if($result != null){
		$query = $bd->prepare("INSERT INTO user(`name`, `email`, `password`) VALUES(:name, :email, :password)");
		$query->bindParam(':name', $name);
		$query->bindParam(':email', $email);
		$query->bindParam(':password', $password);
		$query->execute();
		
	$id = $bd->prepare("SELECT id from user where email=:email");
	$id->bindParam(':email', $email);
	$id->execute();
	$id = $id->fetch(PDO::FETCH_ASSOC);
		
		setcookie("user", base64_encode($id['id']), time()+3600);
		$delete = $bd->prepare("delete from temporary_user where email=:email");
		$delete->bindParam(':email', $email);
		$delete->execute();
		header('Location: http://cms.slavno.net/');
	}
	
	}
	
	public function authorization($data){
		$email = trim($data['result_email_auth']);
		$password = trim(hash('sha256', md5($data['result_password_auth'] ."$".$time)));
	
		global $bd;	

		$result = $bd->prepare("select * from user where email='$email' and password='$password'");//password='$password'
		$result->execute();
		$result = $result->fetch(PDO::FETCH_ASSOC);
		
		if($result != null){
			setcookie("user", base64_encode($result['id']), time()+3600);
			echo "successfully_logged " . $result['name'];		
		}else{
			echo "mistake_user";
		}
	}
	
	
}