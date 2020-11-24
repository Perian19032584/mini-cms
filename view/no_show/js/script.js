$('#create_project_one_button').on('click', function(){
		$('body').append('<div class="container-fluid row ewewfdnejusd">'+
		'<div class="col-1 row"></div>'+
		'<div id="form_create_project" class="col-4">'+
			'<input id="input_form_create_project" type="text" placeholder="Название вашего сайта">'+
			'<div class="button_form_create_project row">'+
			'<div class="col-7"><span id="button_color_cancel" class="btn">Отмена</span></div>'+
			'<span class="btn active_create_button_project">Создать</span>'+
		'</div></div></div>');
		$('.no_site').animate({top: "100%"}, 1800);
		$('.ewewfdnejusd').animate({top: "35%"}, 2500);
});
$('.carousel').carousel();


$('body').on('click', '.active_create_button_project', function(){
	var name_project = $("#input_form_create_project").val();
	
	if(name_project != ""){
	$('#myModal').modal('hide');
	
	$.ajax({
		url: https+"?controller=element&method=staring_project",
		type: "POST",
		data: {data: name_project},
		success: function(res){
			$(".gfgd").append("<a onclick='project_choice(this)' class='dropdown-item project_choice'>"+name_project+"</a>");
			project_choice("<a onclick='project_choice(this)' class='dropdown-item project_choice'>"+name_project+"</a>");
			$(".call_control_menu").addClass("activedd");
		}
	});
	}else{
		mistake('Пожалуйста введите название сайта..');
	}
});
$('body').on('click', ".jjd", function(){
	shows();
});
$("body").on("click", ".create_project_all", function(){
	
	$('.shows div:eq(0)').slideUp(400, function(){
		$(this).next().slideUp(200, arguments.callee);
	});
	setTimeout(function(){
		$(".shows").remove();
		$('#myModal').modal('show');	
	}, 1400);
	
});
$('body').on('click', '#button_color_cancel', function(){
	$('#form_create_project').slideUp(500, function(){
		$('#form_create_project').remove();
		$('#close_block_all').remove();
	});
});
$('.dropdown-toggle').dropdown();

function project_choice(obj){

	var t = $(obj).text();
	$("body").removeClass("activedd");
	create_cookie_ajax(t);
	
	$('#ss').remove();
	$('#osxfsww').remove();
	$('.one').append('<span id="ss">'+t+'</span>');
	$('.oooda').append('<h2 id="osxfsww">'+t+'</h2>');
	
	$('.no_site').animate({top: "100%"}, 1800);
	setTimeout(function(){
		$('.no_site').remove();
	}, 1900);
	
	if($("#control_panel_block-2").length == 0){
	$('.activedd').removeClass("activedd");
	
	$('.call_control_menu').addClass("activedd");
	
	$("#block_control_bottom_table").css({"zIndex": "-1"});
	$("#block_control_bottom_table").animate({left: "-30%"}, 1000);
	setTimeout(function(){
		$("#block_control_bottom_table").remove();
	}, 1000);
	$(".if_table_no_selected").remove();
	$("body").append('<div id="control_panel_block-2">'+
		'<div class="container-fuild row l">'+
		'<div class="col-4"></div><div id="control_panel_block" class="col-6">'+
		'<img id="zzd" src="view/img/no-image.png">'+
		'<div class="block oooda"><h2 id="osxfsww">'+t+'</h2></div>'+
	'<div class="btn jqesz"><div class="dropdown">'+			
	'<a class="btn-success dropdown-toggle btn xlsdffe" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Действие над сайтом</a>'+
		'<div class="dropdown-menu">'+
			'<a class="dropdown-item" href="/view_project_'+t+'">Просмотр</a>'+
			'<a class="dropdown-item" href="/editing_project_'+t+'">Редактирование</a>'+
			'<a class="dropdown-item position_cancel">Удалить</a>'+
			'<a class="dropdown-item position_change_name">Изменить название</a>'+
	'</div></a></div></div></div></div></div>');
	$("#control_panel_block-2").hide();
	$('#control_panel_block-2').slideDown(500, "linear");	
	}
	
}

$('.developing').on('click', function(){
	alert('в разработке');
});