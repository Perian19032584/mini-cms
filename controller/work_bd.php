<?

$work_bd = new work_bd;

switch($_GET['method']){
	case "create_table_bd":
		$work_bd->create_table_bd($_POST['data']);
	break;
	case "add_bd_table":
		$work_bd->add_bd_table($_POST['data']);
	break;
	case "show_bd_table":
		$work_bd->show_bd_table($_POST['data']);
	break;
	case "delete_string_table":
		$work_bd->detete_table_bd($_POST['data']);
	break;
	case "show_inster_table_add":
		$work_bd->show_inster_table_add($_POST['data']);
	break;
}