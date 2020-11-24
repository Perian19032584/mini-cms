<?php
$element = new element;
switch($_GET['method']){
	case "staring_project":
		$element->starting_project($_POST['data']);
	break;
	case "save_element":
		$element->save_element();
	break;
	case "add_img":
		$data = $element->add_img($_FILES["file"]);
		echo json_encode($data);
	break;
	case "remove_img":
		$element->remove_img($_POST['data']);
	break;
	case "unique_identificator":
		echo $element->unique_identificator();
	break;	
}

?>