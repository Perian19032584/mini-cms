$("#button_call_control_panel_block").on("click", function(){
	$("#add_menu-category").animate({width: "toggle"});
	$("body").append('<div id="block_create_block"><h5>Создания блоков</h5><img id="cancel2" src="view/img/cancel2.png"><span>Добавить текст</span><label><input title="" id="add_img_block" type="file"><span id="create_img_block">Добавить фото</span></label><span>Добавить блок</span><h4 id="result_block_see">Редактировать</h4><h4 title="Если понравился и будем еще использовать сохранить">Сохранить</h4><h4>Удалить</h4></div>');
	
	
	$("body").append('<div id="close_block_all"></div>');
	$.ajax({
		url: "http://192.168.1.110?controller=element&method=unique_identificator",
		success: function(res){
			$("body").append('<div id="block_result_'+res+'"></div>');
			$("body").on("click", "#cancel2", function(){
				$("#block_create_block").slideUp(500, function(){
					$("#block_create_block").remove();
					$("#close_block_all").remove();
					$("#block_result_"+res).remove();
				})
			});
			$.cookie("main_block", res);
			$("#chenge_block").append($("#block_result_"+$.cookie("main_block")));
			
			
		}
	})
})

$("body").on("click", "#result_block_see", function(){
	$("#block_create_block").animate({width: "toggle"});
	$("#chenge_block").animate({width: "toggle"});
	
});
$("body").on("click", "#cancel3", function(){
	$("#chenge_block").animate({width: "toggle"})
	$("#block_create_block").animate({width: "toggle"});
})

$("body").on("input", "#add_img_block", function(){
	var file_data = $("#add_img_block").prop("files")[0];
	var form_data = new FormData();

	form_data.append("file", file_data);
	$.ajax({
		url: "http://192.168.1.110?controller=element&method=add_img",
		cache: false,
		type: "POST",
		data: form_data,
		processData: false, 
        contentType: false,		
		success: function(res){	
			arr=$.parseJSON(res);
			if(arr['operation'] == 1){
				$("#block_result_"+$.cookie("main_block")).append('<img src="'+arr['src']+'">');
				setTimeout(function(){
					$("#result_block_see").css({"color": "red"});
				}, 300);
				$("#result_block_see").css({"color": "black"});
			}else{
				$("body").append('<div id="notification_css">Нужно выбрать фото..</div>');
				$("#notification_css").slideDown(500, function(){
					
				setTimeout(function(){
					$('#notification_css').slideUp(500, function(){
					$("#notification_css").remove();
				});	
				}, 700);	
				});
			}
		}
	});
});	
	

