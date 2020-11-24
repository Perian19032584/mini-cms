<html>
<head>
	<title>CMS - GARAGE</title>
	<link rel="stylesheet" href="libs/bootstrap/bootstrap.min.css">
	<? connection_header()?>
	<link rel="shortcut icon" href="view/img/favicon.ico" type="image/x-icon">
	<script src="libs/jquery/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>
	<script src="libs/jquery/jquery.cookie.js"></script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js"></script>
	<script src="libs/bootstrap/bootstrap.min.js"></script>
	<script src="libs/bootstrap/bootstrap.bundle.min.js"></script>
	<script src="//code-ya.jivosite.com/widget/i4KZ9EQYO2" async></script>
</head>	
<body>	

	<div id="header">
		<div class="container-fuild row l">
			<h2 id="style_cms_logo" class="btn">CMS - GARAGE</h2>
	
		
		<div class="col-auto"></div>
			<div class="row"><div class="d dropdown row">
			<h2 id="style_header_text" class="btn dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Мои сайты
	
			<div class="dropdown-menu gfgd" aria-labelledby="dropdownMenuLink">
				<? method_show_sites()?>
				<a id="create_project_one_button" class='dropdown-item'>Создать<img class="float-right icon_button_sittes"  src="view/img/add_item2.png"></a>
			</div>		
			
			
			</div>
			</div>
		<div class="col-auto"></div>
			<div class='jjj row'>
			<h2 id="style_header_text" class="btn x">Написать нам</h2>
			<div class="bag_fix_j1 ml-3"><?
			if($_COOKIE['user']){
				$id = base64_decode($_COOKIE['user']);
				$query = $bd->prepare('SELECT name from user where id=:id');
				$query->bindParam(':id', $id);
				$query->execute();
				$query = $query->fetch(PDO::FETCH_ASSOC);

					echo "<h2 id='style_header_text' class='x name_user btn btn-secondary dropdown-toggle btn-sm fix_problem_css_3' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>";
					echo "<b>".$query['name']."</b>";
					
					echo "<div class='dropdown-menu img_profile_css'>";
					echo "<a class='dropdown-item btn-sm font-weight-bold'><img src='view/img/profile.png'>Профиль</a>";
					echo "<a class='dropdown-item btn-sm font-weight-bold'><img src='view/img/setting.png'>Настройки</a>";
					echo "<a id='exit' class='dropdown-item btn-sm font-weight-bold'><img src='view/img/exit.png'>Выход</a>";
					echo "</div>";
				
			}else{
					echo "<h2 id='style_header_text' class='x name_user btn dropdown-toggle btn-sm fix_problem_css_3 caret-off' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>";
					echo "<b id='sss'>Вход<span class='caret'></span></b>";
					echo "<div class='dropdown-menu img_profile_css d-none'>";
					echo "<a class='dropdown-item btn-sm font-weight-bold'><img src='view/img/profile.png'>Профиль</a>";
					echo "<a class='dropdown-item btn-sm font-weight-bold'><img src='view/img/setting.png'>Настройки</a>";
					echo "<a id='exit' class='dropdown-item btn-sm font-weight-bold'><img src='view/img/exit.png'>Выход</a>";
					echo "</div>";
			}			
			?></h2></div>
			</div>
	
		</div>
		
	</div>
	
	
<div class="container-fluid absolute vv">
		<div class="row"><div class="col-4"></div>

		<div class="col-6"><div class="reg_auth_block">
			<div class="row">
				<h2 id="button_reg">Регистрация</h2>
				<h2 id="button_auth">Авторизация</h2>
			</div></div></div><div class="col-3"></div>
		</div>
	</div>
	<div id="left_block" class="col-2">
		<div class="text-center editing_h1 one"><span id='ss'><?= $r = isset($_COOKIE['project']) ? $r = $_COOKIE['project'] : $r = "Выберите сайт"?></span></div>
		<div id="border_color_css"></div>
		<div class="text-center editing_h2 row call_control_menu"><span class="bbdgreg">Управление</span><img id="ll-img" src="view/img/control_panel.png"></div>
		<div id="content_call" class="text-center editing_h2 row"><span class="bbdgreg">Контент</span><img src="view/img/document.png"></div>
		<div class="text-center editing_h2 row"><span class="bbdgreg">Статистика</span><img src="view/img/statistics.png"></div>
		<div class="text-center editing_h2 row"><span class="bbdgreg">Зароботок</span><img src="view/img/statistics.png"></div>

	</div>
	<? if(isset($_COOKIE['user'])){
		
	   if(isset($_COOKIE['project'])){
	?>
	<div id="control_panel_block-2">
		<div class="container-fuild row l">
			<div class="col-4"></div>
			<div id="control_panel_block" class="col-6">
				<img id="zzd" src="view/img/no-image.png"><div class="block oooda"><h2 id="osxfsww"><?= $r = isset($_COOKIE['project']) ? $r = $_COOKIE['project'] : $r = "Пожалуйста выберите сайт"?></h2></div>
				
				<div class="btn jqesz">
	<div class="dropdown">			
	<a class="btn-success dropdown-toggle btn xlsdffe" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Действие над сайтом</a>
				
		<div class="dropdown-menu">
			<a class='dropdown-item view_project' href='/?view_project'>Просмотр/Редактировать</a>
			<a class='dropdown-item position_cancel'>Удалить</a>
			<a class='dropdown-item position_change_name'>Изменить название</a>
		</div>				
			
	</div>			
			</div>
			</div>
		</div>
	</div>
	<script>
		$(".call_control_menu").addClass('activedd');
		$("#control_panel_block-2").css({"opacity": "0"});
		$("#control_panel_block-2").animate({opacity: "1"}, 500);
	</script>	
	<? }else{?>
	<? $project = array_diff(scandir("project"), [".", ".."]);
		foreach($project as $projectl){
			$projectl = preg_split("/_/", $projectl);
			if(base64_decode($_COOKIE['user']) == $projectl[0]){
				echo '<div class="container-fuild row l no_site content">';
					echo '<div class="col-5 row"></div>';
				echo '<div class="col-xl-5 if_sites_no_block">';
					echo '<h3 class="text-center mt-1">Пожалуйста выберите сайт..</h3>';
				echo '</div></div>';
				$q  = true;	
			}
		}
	
	 if($q != true){?>
	 
<div id="myModal" class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Создайте ваш первый сайт</h5>
        <button type="button" class="close jjd" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input id="input_form_create_project" type="text" class="form-control" placeholder="Напишите название сайта..">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary jjd" data-dismiss="modal">Отмена</button>
        <button type="button" class="btn btn-primary active_create_button_project">Сохранить</button>
</div></div></div></div>
	<script>
		$('#myModal').modal('show');
	</script>
	<? }}}?>





	<? connection_header2()?>
</body>
</html>