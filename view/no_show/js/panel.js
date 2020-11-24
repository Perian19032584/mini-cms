$('body').on('click', '.position_cancel', function(){
	$('body').append('<div id="form-delete-project">'+
	'<h1>Вы увереные что хотите удалить весь проект?</h1>'+
	'<span id="cancel_delete_project">Отмена</span>'+
	'<span id="delete_project">Удалить</span></div>');	
	$('body').append('<div id="close_block_all"></div>');	
});
$('body').on('click', '#cancel_delete_project', function(){
	$('#form-delete-project').slideUp(500, function(){
		$('#form-delete-project').remove();
		$('#close_block_all').remove();
	});
});
$('body').on('click', '#delete_project', function(){
	var strGET = window.location.search.replace( '?', ''); 
	$.ajax({
		url: https+"?controller=panel&method=delete_project",
		data: {data: strGET},
		success: function(res){
			$('#form-delete-project').slideUp(500, function(){
				$('#form-delete-project').remove();
				$('#close_block_all').remove();	 			
			});
			notification_css("Успешно было удалено");	
		}
	
	});
});
$('body').on('click', '.position_change_name', function(){
	$('body').append('<div id="change_name_form">'+
	'<input type="text" id="input_form_change_project" placeholder="Изменить название на:">'+
	'<span id="cancel_change_project">Отмена</span><span id="change_project">Изменить</span></div>');
	$('body').append('<div id="close_block_all"></div>');
});
$('body').on('click', '#cancel_change_project', function(){
	$('#change_name_form').slideUp(500, function(){
		$('#change_name_form').remove();
		$('#close_block_all').remove();
	});
});

$('body').on('input', '#input_form_change_project', function(){
	if($('#input_form_change_project').val().length <=3){
		$('#change_project').css("background-color", "silver");
		$('#change_project').css("color", "black");
		$('#change_project').removeClass('active_change_button_project');
	}else{
		$('#change_project').css("background-color", "green");
		$('#change_project').css("color", "white");
		$('#change_project').addClass('active_change_button_project');
	}
});
$('body').on('click', '.active_change_button_project', function(){
	var data = $("#input_form_change_project").val();
	var strGET = window.location.search.replace( '?', ''); 
	$.ajax({
		url: https+"?controller=panel&method=chenge_project",
		type: "POST",
		data: {data: data, strGET},
		success: function(res){
			
			
$('#change_name_form').slideUp(500, function(){
	$('#change_name_form').remove();
	$('#close_block_all').remove();	
	notification_css("Успешно было изменено");				
				
});
	}
	});
});

$("body").on("click", ".call_control_menu", function(){
	$(".if_table_no_selected").remove();
	$("#block_control_bottom_table").css({"zIndex": "-1"});
	$("#block_control_bottom_table").animate({left: "-30%"}, 1000);
	if($.cookie('project')){
	setTimeout(function(){
		$("#block_control_bottom_table").remove();
$("body").append('<div id="control_panel_block-2">'+
		'<div class="container-fuild row l">'+
			'<div class="col-4"></div>'+
			'<div id="control_panel_block" class="col-6">'+
				'<img id="zzd" src="view/img/no-image.png"><div class="block oooda"><h2 id="osxfsww">'+$.cookie('project')+'</h2></div>'+
			'<div class="btn jqesz"><div class="dropdown">'+		
	'<a class="btn-success dropdown-toggle btn xlsdffe" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Действие над сайтом</a>'+
		'<div class="dropdown-menu">'+
			'<a class="dropdown-item" href="/view_project">Просмотр</a>'+
			'<a class="dropdown-item" href="/editing_project">Редактирование</a>'+
			'<a class="dropdown-item position_cancel">Удалить</a>'+
			'<a class="dropdown-item position_change_name">Изменить название</a>'+
		'</div></div></div></div></div></div>');
	$("#control_panel_block-2").hide();
	$('#control_panel_block-2').slideDown(500, "linear");	
	}, 900);
	}
});
$("body").on("click", "#exit", function(){
	alert('Привет, я выход');
});

$(".editing_h2").on('click', function(){
	$(".activedd").removeClass('activedd');
	$(this).addClass('activedd');
	if(!$.cookie('project')){
		shade(".if_sites_no_block");
	}
	if(!$.cookie('user')){
		shade(".vv");
		setTimeout(function(){
			$(".activedd").removeClass('activedd');
		}, 800);
	}
});
