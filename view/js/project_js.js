$("#create_button").on("click", function(){
	if($("#mini_menu").val() == ""){
		$("body").append('<div id="notification_css">Нужно закончить дела с выбранным блоком..</div>');
		$("#notification_css").css({"left": " 30%"});
		$("#notification_css").slideDown(500, function(){
		setTimeout(function(){
			$('#notification_css').slideUp(500, function(){
			$("#notification_css").remove();;
			});	
		}, 700);	
		});
	}else{
		$("#add_menu-category").animate({width:"toggle"},350)
	}
});
$("#buton_call_control_panel_text").on("click", function(){
	if($("#form_create_text").val() == ""){
		$('.button_style_category').remove();
		$("#form_create_text").slideUp(500, function(){
			$('#form_create_text').remove();
		});	
	}else{
$("body").append("<div id='form_create_text'><h1>Панель управление текстом</h1><span id='create_text_input'>Текст</span><span id='create_style_text'>Стили</span><span>Анимация</span><input id='form_create_text_input' type='text' placeholder='Введите ваш текст'><input id='form_create_text_size' type='text' placeholder='Размер'><input id='form_create_text_letter-spacing' type='text' placeholder='Ростояние между символами'><input id='form_create_text_font_family' type='text' placeholder='Шрифт'><input id='form_create_text_color' type='text' placeholder='Цвет'><input id='form_create_text_border' type='text' placeholder='Рамка'><input id='form_create_text_border_radius' type='text' placeholder='Рамка округление'><input id='form_create_text_width' type='text' placeholder='Ширина'><input id='form_create_text_height' type='text' placeholder='Высота'><input id='form_create_text_background_color' type='text' placeholder='Цвет фона'><h6 title='Нажми и начни выставлять в любое место' id='result'></h6></div>");			
	$("#form_create_text").slideDown();
		
	$("#create_text_input").addClass("button_style_category_active");
	$("#form_create_text_input").show();	
		
	}
})
$("body").on("input", "#form_create_text_input", function(){		
	result228 = $("#form_create_text_input").val();// Тут
	$("#result").html(result228);
});
$("body").on("input", "#form_create_text_size", function(){	
	result229 = $("#form_create_text_size").val();
	$("#result").css({"font-size": result229});
});
$("body").on("input", "#form_create_text_letter-spacing", function(){	
	result230 = $("#form_create_text_letter-spacing").val();
	$("#result").css({"letter-spacing": result230});
});	
$("body").on("input", "#form_create_text_font_family", function(){	
	result231 = $("#form_create_text_font_family").val();
	$("#result").css({"font-family": result231});
});
$("body").on("input", "#form_create_text_color", function(){	
	result232 = $("#form_create_text_color").val();
	$("#result").css({"color": result232});	
});
$("body").on("input", "#form_create_text_border", function(){		
	result233 = $("#form_create_text_border").val();
	$("#result").css({"border": result233});
})
$("body").on("input", "#form_create_text_border_radius", function(){	
	result234 = $("#form_create_text_border_radius").val();
	$("#result").css({"border-radius": result234});
})	
$("body").on("input", "#form_create_text_width", function(){	
	result235 = $("#form_create_text_width").val();
	$("#result").css({"width": result235});
})
$("body").on("input", "#form_create_text_height", function(){	
	result236 = $("#form_create_text_height").val();
	$("#result").css({"height": result236});
})
$("body").on("input", "#form_create_text_background_color", function(){	
	result237 = $("#form_create_text_background_color").val();
	$("#result").css({"background-color": result237});
});
$("body").on("click", "#create_text_input", function(){
	$("input").hide();
	$(".button_style_category").remove();
	$("#create_text_input").addClass("button_style_category_active");
	$("#create_style_text").removeClass("button_style_category_active");
	$("#form_create_text_input").show();
});
$("body").on("click", "#create_style_text", function(){
	$("input").hide();
	$("#create_style_text").addClass("button_style_category_active");
	$("#create_text_input").removeClass("button_style_category_active");
	if($('.button_style_category').val() == ""){

	}else{
		$('body').append("<span class='button_style_category button_style_category_active button_js_category_1'>1</span><span class='button_style_category button_js_category_2'>2</span><span class='button_style_category button_js_category_3'>3</span>");
	}	
	$("input").hide();
	$("#form_create_text_size").show();
	$("#form_create_text_letter-spacing").show();
	$("#form_create_text_font_family").show();
	
});
$("body").on("click", ".button_js_category_1", function(){
	$("input").hide();
	$(".button_js_category_1").addClass("button_style_category_active");
	$(".button_js_category_2").removeClass("button_style_category_active");
	$(".button_js_category_3").removeClass("button_style_category_active");
	$("#form_create_text_size").show();
	$("#form_create_text_letter-spacing").show();
	$("#form_create_text_font_family").show();
});
$("body").on("click", ".button_js_category_2", function(){
	$("input").hide();
	$(".button_js_category_2").addClass("button_style_category_active");
	$(".button_js_category_1").removeClass("button_style_category_active");
	$(".button_js_category_3").removeClass("button_style_category_active");	
	
	$("#form_create_text_color").show();
	$("#form_create_text_border").show();
	$("#form_create_text_border_radius").show();
});
$("body").on("click", ".button_js_category_3", function(){
	$("input").hide();
	$(".button_js_category_3").addClass("button_style_category_active");
	$(".button_js_category_2").removeClass("button_style_category_active");
	$(".button_js_category_1").removeClass("button_style_category_active");
	$("#form_create_text_width").show();
	$("#form_create_text_height").show();
	$("#form_create_text_background_color").show();
});
$('body').on("click", "#result", function(){
	$("#result_[0-9]").remove();//Тут нужно придумать регулярные выражения

$("#form_create_text").slideUp(500, function(){
	$('#form_create_text').remove();
});		
	$.ajax({
		url: "http://192.168.1.110?controller=element&method=save_element",
		success: function(res){
			$("[id='result']").each(function (){ 
    			$('body').append($(this).attr("id", "result_"+res+"").removeAttr('title').attr("draggable", "true"));
				$("#result_"+res).css({"position":"absolute", "cursor":"pointer", "display": "inline-block"});
			
			$("#result_"+res).on('drag', function(event){
				var X = event.pageX;
    			var Y = event.pageY;	
				$("#result_"+res).css({"left": X, "top": Y});
				$("#mini_menu").slideUp(500, function(){
					$('#mini_menu').remove();
				});
			});				
			});
			
			$("#form_create_text").slideUp(500, function(){
				$('#form_create_text').remove();
			});	
			
			$("#result_"+res).on("ondragstart", function(){
				return false;
			})		
			$("#result_"+res).on('dragend', function(event){
				var X = event.pageX;
    			var Y = event.pageY;
				
					$("#result_"+res).css({"left": X, "top": Y});
					$("body").append("<div id='mini_menu'><span id='chenge_mini_menu'>Редактировать</span><br><span id='save_mini_menu'>Сохранить</span><br><span id='delete_meni_menu'>Удалить</span></div>");
					$("#mini_menu").css({"position": "absolute", "left": X+45, "top": Y-2});
					$('#mini_menu').slideDown(500, function(){
					
					});
			});
			$('body').on("click", "#delete_meni_menu", function(){	
				$("#form-delete-project_mini_menu").remove();
				$("#close_block_all").remove();
				$("#mini_menu").slideUp();
				$("body").append("<div id='form-delete-project_mini_menu'><h1>Упс.. Возможно вы нажали случайно, вы увереные что хотите удалить выбраный блок?</h1><span id='cancel_delete_block_mini_menu'>Отмена</span><span id='delete_project_mini_menu'>Удалить</span></div>");
				$("body").append("<div id='close_block_all'></div>");
			});
			$('body').on("click", "#cancel_delete_block_mini_menu", function(){		
				$("#form-delete-project_mini_menu").slideUp(500, function(){
					$("#form-delete-project_mini_menu").remove();
					$("#close_block_all").remove();
				});
			});
			$("body").on("click", "#delete_project_mini_menu", function(){
				$("#form-delete-project_mini_menu").slideUp(500, function(){
					$("#form-delete-project_mini_menu").remove();
					$("#close_block_all").remove();
					
			$("#result_"+res).slideUp(500, function(){
				$("#result_"+res).remove();
			});
			$("#mini_menu").slideUp(500, function(){
				$("#mini_menu").remove();
			});				
					
				});			
			});
			
			$("body").on("click", "#chenge_mini_menu", function(){
				$("#block_css_img").remove();
				$("#result_"+res).slideUp(500, function(){
					$("#result_"+res).remove();
				});
				$("#mini_menu").slideUp(500, function(){
					$("#mini_menu").remove();
				});
				$("")
				
		if(typeof result229 !== "undefined"){
			
		}else{
			result229 = "";
		}
		if(typeof result230 !== "undefined"){
			
		}else{
			result230 = "";
		}				
		if(typeof result231 !== "undefined"){
			
		}else{
			result231 = "";
		}
		if(typeof result232 !== "undefined"){
			
		}else{
			result232 = "";
		}	
		if(typeof result233 !== "undefined"){
			
		}else{
			result233 = "";
		}
		if(typeof result234 !== "undefined"){
			
		}else{
			result234 = "";
		}	
		if(typeof result235 !== "undefined"){
			
		}else{
			result235 = "";
		}
		if(typeof result236 !== "undefined"){
			
		}else{
			result236 = "";
		}
		if(typeof result237 !== "undefined"){
			
		}else{
			result237 = "";
		}	
		$("#form_create_text").remove();				
				
$("body").append("<div id='form_create_text'><h1>Панель управление текстом</h1><span id='create_text_input'>Текст</span><span id='create_style_text'>Стили</span><span>Анимация</span><input id='form_create_text_input' type='text' value='"+result228+"' placeholder='Введите ваш текст'><input id='form_create_text_size' type='text' value='"+result229+"' placeholder='Размер'><input id='form_create_text_letter-spacing' value='"+result230+"' type='text' placeholder='Ростояние между символами'><input id='form_create_text_font_family' type='text' value='"+result231+"' placeholder='Шрифт'><input id='form_create_text_color' value='"+result232+"' type='text' placeholder='Цвет'><input id='form_create_text_border' type='text' value='"+result233+"' placeholder='Рамка'><input id='form_create_text_border_radius' type='text' value='"+result234+"' placeholder='Рамка округление'><input id='form_create_text_width' type='text' value='"+result235+"' placeholder='Ширина'><input id='form_create_text_height' value='"+result236+"' type='text' placeholder='Высота'><input id='form_create_text_background_color' value='"+result237+"' type='text' placeholder='Цвет фона'><h6 title='Нажми и начни выставлять в любое место' id='result'></h6></div>");			
			$("#form_create_text").slideDown();	
				
			$("#result").html(result228);	
			$("#create_text_input").addClass("button_style_category_active");
			$("#form_create_text_input").show();
			});
		$("body").on("click", "#save_mini_menu", function(){
			alert("В розработке");
		});	
		}
	});
})


