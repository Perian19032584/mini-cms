$("body").on("click", "#buton_call_control_panel_img", function(){
	
	$("body").append('<img id="img_cancel_panel_img" src="view/img/cancel.png">');
	$("body").append('<div id="block_create_img"><h6>Выберите фото:</h6><input id="file_img_create" style="color:transparent; width:155px;" type="file"></div>');
	$("body").append('<div id="close_block_all"></div>');
	$("#add_menu-category").animate({width: "toggle"});
	$(".button_style_category").remove();
	$("#form_create_text").slideUp(500, function(){
		$("#form_create_text").remove();
	})
});
$("body").on("click", "#img_cancel_panel_img", function(){
	$("#img_cancel_panel_img").slideUp(500, function(){
		$("#img_cancel_panel_img").remove();
	})
	$("#block_create_img").slideUp(500, function(){
		$("#block_create_img").remove();
		$("#close_block_all").remove();
	});
});
$("body").on("click", "#cancel1", function(){
	$("#block_css_img").animate({width:"toggle"},350, function(){
		$("#block_css_img").remove();
	});
	$("#mini_menu").slideDown();
})
$("body").on("change", "#file_img_create", function(){
	var file_data = $("#file_img_create").prop("files")[0];
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
			if(arr["operation"] == 1){
					$("body").append("<img id='result_img_"+arr['id']+"' draggable='true' class='active_result_img name_"+arr['name']+"' src='"+arr['src']+"'>");
					$("#img_cancel_panel_img").slideUp(500, function(){
						$("#img_cancel_panel_img").remove();
					})
					$("#block_create_img").slideUp(500, function(){
						$("#block_create_img").remove();
						$("#close_block_all").remove();
					});	
					
					$("#result_img_"+arr['id']).css({"position": "absolute"});
					
					$("#result_img_"+arr['id']).on("ondragstart", function(){
						return false;
					});					
					$("#result_img_"+arr['id']).on("drag", function(event){
						 var X = event.pageX;
    					 var Y = event.pageY;	
						
						$("#mini_menu").slideUp(400, function(){
							$("#mini_menu").remove();
						});
						$("#block_css_img").slideUp(400, function(){
							$("#block_css_img").remove()
						})
						$("#result_img_"+arr['id']).css({"left": X - (X/2), "top": Y - (Y/2)});
					});	
				
					$("#result_img_"+arr['id']).on("dragend", function(event){
						 var X = event.pageX;
    					 var Y = event.pageY;
						
						$("#result_img_"+arr['id']).css({"left": X - (X/2), "top": Y - (Y/2)});
						
		$("body").append("<div id='mini_menu'><span id='chenge_mini_menu'>Редактировать</span><br><span id='save_mini_menu'>Сохранить</span><br><span id='delete_meni_menu'>Удалить</span></div>");
						$("#mini_menu").slideDown();
						$("#mini_menu").css({"left": X, "top": Y, "position": "absolute"});
						
					});				
					
	$("body").on("click", "#chenge_mini_menu", function(){
			$("#block_css_img").remove();
			$("#form_create_text").remove();
			$("#mini_menu").slideUp();
			$("body").append('<div id="block_css_img"><img id="cancel1" src="view/img/cancel1.png"><input type="text" id="border_img" placeholder="Рамка"><input type="text" id="border_radius_img" placeholder="Округление"><input type="text" id="width_img" placeholder="Ширина"><input id="height_img" type="text" placeholder="Высота"><input id="opacity_img" type="text" placeholder="Прозрачность"></div>');
			
			$("#block_css_img").css({"display": "none"});
			$("#block_css_img").animate({width:"toggle"}, 400);		
		
		
		
			$("#border_radius_img").on("input", function(){
				var l = $("#border_radius_img").val();
				$("#result_img_"+arr['id']).css({"border-radius": l});
			});
			$("#border_img").on("input", function(){
				var l = $("#border_img").val();
				$("#result_img_"+arr['id']).css({"border": l});
			})
			$("#width_img").on("input", function(){
				var l = $("#width_img").val();
				$("#result_img_"+arr['id']).css({"width": l});
			});
			$("#height_img").on("input", function(){
				var l = $("#height_img").val();
				$("#result_img_"+arr['id']).css({"height": l});
			});	
			$("#opacity_img").on("input", function(){
				var l = $("#opacity_img").val();
				$("#result_img_"+arr['id']).css({"opacity": l});
			});			
	});	
	
	$("body").on("click", "#delete_meni_menu", function(){
		$("#form-delete-project_mini_menu").remove();
		$("#close_block_all").remove();
		$("#result_img_"+arr["id"]).css({"border": "2px solid red"});
		$("#mini_menu").slideUp();
				$("body").append("<div id='form-delete-project_mini_menu'><h1>Упс.. Возможно вы нажали случайно, вы увереные что хотите удалить выбраный блок?</h1><span id='cancel_delete_block_mini_menu'>Отмена</span><span id='delete_project_mini_menu'>Удалить</span></div>");
				$("body").append("<div id='close_block_all'></div>");		
	
	});				
	$("body").on("click", "#cancel_delete_block_mini_menu", function(){
		$("#form-delete-project_mini_menu").slideUp(500, function(){
			$("#form-delete-project_mini_menu").remove();
			$("#close_block_all").remove();
			$("#result_img_"+arr["id"]).css({"border": "none"});
		});
		$("#mini_menu").slideDown();
	})				
	$("body").on("click", "#delete_project_mini_menu", function(){
		var data = $("#result_img_"+arr["id"]).addClass('name_'+arr['name']).attr("class");
		
		$.ajax({
			url: "http://192.168.1.110?controller=element&method=remove_img",
			type: "POST",
			data: {data: data},
			success: function(res){
				$("#mini_menu").remove();
				$("#form-delete-project_mini_menu").slideUp(500, function(){
					$("#form-delete-project_mini_menu").remove();
					$("#close_block_all").remove();
				})
				$("#result_img_"+arr["id"]).slideUp(500, function(){
					$("#result_img_"+arr["id"]).remove();
				})
			}
		
		})
	})
	$("body").on("click", "#save_mini_menu", function(){
		alert("В розработке");
	})
			}else{
			$("body").append('<div id="notification_css">Нужно выбрать фото..</div>');
				$("#notification_css").slideDown(500, function(){
				setTimeout(function(){
					$('#notification_css').slideUp(500, function(){
					$("#notification_css").remove();;
				});	
				}, 700);	
				});
			}
		}
	
	});
});
