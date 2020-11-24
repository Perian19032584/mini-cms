$("body").on('click', "#create_table_bd", function(){
	
	var name = $("#create_text_bd").val();
	$(".table").remove();
	$("."+name).remove();
	$.ajax({
		url: "http://cms.slavno.net?controller=work_bd&method=create_table_bd",
		type: "POST",
		data: {data: name},
		success: function(res){
			
			$("body").append('<table class="table table-dark append_table v-'+name+'">'+
			'<thead><tr>'+
			'<th scope="row">#</th>'+
			'<th>Имя</th>'+
			'<th>Тип</th>'+
			'<th>По умолчанию</th>'+
			'<th>Управление</th>'+
			'<th class="bag_for_later"><img class="ddd" src="view/img/ddd.png"></th></tr></thead>');
			$('.v-' + name).append(res);
			
			$(".show_content_bd").append("<span class='dropdown-item "+name+"' id='css_app'>"+name+"</span>");
			
		}
	});
});

$("body").on("click", ".ddd", function(){
	var rr = $(this).parents();
	var dd = $(rr[3]).attr('class').split('-');
	
	
	
	var data = $(".id_add").last().attr('class').split(' ');
	var ints = parseInt(data[1]) + 1;

	$('.v-'+dd[2]).append("<tr>"+
		"<th class='id_add "+ints+"'>"+ints+"</th>"+
		'<th class="bag_fix_oo_table"><input type="text" class="zz_width meaning_names" id="inlineFormInputGroupUsername2" placeholder="Название"></th>'+
		'<th class="bag_fix_00_table"><select class="form-control form-control-sm dsdtsdc">'+
			'<option class="fix_problem_js_33" value="int(11)">int(11)</option>'+
			'<option value="varchar(255)">varchar(255)</option>'+
			'<option value="text">text</option>'+
			'<option value="date">date</option>'+
		'</select></th>'+					
		'<th>Ничего</th>'+			
		'<th><img class="img_setting_x remove_time" src="view/img/remove.png"><img class="img_setting_x edit_time" src="view/img/edit.png"></th>'+
		'<th><img class="ddd_css" src="view/img/check_mark.png"></th></tr>');
	
	
	$(".ddd").removeClass("ddd").addClass("ddd_css");
});

$("body").on("click", ".ddd_css", function(){
	if($(".meaning_names").val() != ""){
	var rr = $(this).parents();
	var dd = $(rr[3]).attr('class').split('-');
	var data = {};


	data['meaning_names'] = $(".meaning_names").val();	
	data['dsdtsdc'] = $(".dsdtsdc").val();
	data['name'] = dd[2];
	

	$.ajax({
		url: "http://cms.slavno.net?controller=work_bd&method=add_bd_table",
		type: "POST",
		data: {data: data},
		success: function(res){
			if(res == "success"){
				$(".ddd_css").remove();
				$(".remove_time").addClass("remove_string_table").removeClass("remove_time");
				$(".meaning_names").remove();
				$(".edit_time").removeClass("edit_time");
				$('.dsdtsdc').remove();
				
				
				$(".bag_fix_oo_table").html(data['meaning_names']);
				$(".bag_fix_00_table").html(data['dsdtsdc']);
				$(".bag_fix_oo_table").removeClass('bag_fix_oo_table');
				$(".bag_fix_00_table").removeClass('bag_fix_00_table');
				$(".bag_for_later").append("<img class='ddd' src='view/img/ddd.png'>");
			}
			if(res == "fail"){
				mistake('Запрос был провален');
			}				
		}
	});
	}else{
		mistake('Пожалуйста заполните поле имени');
	}
});

$("body").on("click", ".remove_string_table", function(){
	var rr = $(this).parents();
	var dd = $(rr[3]).attr('class').split('-');
	var data = {};
	var delete_text = $("#css_app");
	
data['dsdtsdc'] = dd['2'];
data['table_name'] = $(rr[1]).find(".for_remove").text();	

	$.ajax({
		url: "http://cms.slavno.net?controller=work_bd&method=delete_string_table",
		type: "POST",
		data: {data: data},
		success: function(res){	
	
			rr[1].remove();
			if ($('.interval').html().trim() === ''){		
				$(".v-" + dd[2]).remove();
				$("."+dd[2]).remove();
			}
		}
	});
});
$("body").on("click", ".remove_time", function(){
	var rr = $(this).parents();
	rr[1].remove();
});

$("body").on("click", ".edit_time", function(){
	mistake('Вы уже работаете над этой таблицой');
});

$("#content_call").on("click", function(){
	if($.cookie('user') && $.cookie('project')){
	$('#control_panel_block-2').slideUp(500, "linear", function(){
		$('#control_panel_block-2').remove();
	});
	$.ajax({
		url: "http://cms.slavno.net?controller=work_bd&method=show_bd_table",
		success: function(res){
	if($('#block_control_bottom_table').length == 0){
		$("body").append('<h2 class="text-center ml-5 if_table_no_selected">Выберите таблицу или создайте её..</h2>');
		$("body").append('<div id="block_control_bottom_table" class="fixed-bottom row">'+
			'<div class="dropdown block_name_bd">'+
			'<button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">'+
			'Базы данных</button>'+
		'<div class="dropdown-menu show_content_bd"></div></div>'+
	'<div class="input-group row col-3">'+
			'<input id="create_text_bd" type="text" class="form-control" placeholder="Добавить таблицу..">'+
			'<div class="input-group-append">'+
				'<button class="btn btn-outline-secondary" id="create_table_bd" type="button">Жмяк</button>'+
	'</div></div></div>');
		
			$("#block_control_bottom_table").animate({left: "17.8%"}, 1000);
			setTimeout(function(){
				$("#block_control_bottom_table").css({'zIndex': 1});
			}, 1000);

			$(".show_content_bd").append(res);
		}		
		}
	});
	
	}
});

$("body").on("click", "#css_app", function(){

	var data = $(this).text();

	$.ajax({					
		url: "http://cms.slavno.net?controller=work_bd&method=create_table_bd",
		type: "POST",
		data: {data: data},
		success: function(res){
			$(".append_table").remove();
			$("body").append('<table class="table table-dark append_table v-'+data+'">'+
			'<thead><tr>'+
			'<th scope="row">#</th>'+
			'<th>Имя</th>'+
			'<th>Тип</th>'+
			'<th>По умолчанию</th>'+
			'<th>Управление</th>'+
			'<th class="bag_for_later"><img class="ddd" src="view/img/ddd.png"></th></tr></thead>');
			$('.v-' + data).append(res);
		}
	});	
});

