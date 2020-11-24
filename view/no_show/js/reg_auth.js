if(!$.cookie('user')){
if($('.block_regis').length == 0 && $('.block_auth').length == 0){

	$(".vv").css({"display" : "block"});
	$(".vv").animate({
		top: "30%",
	}, 2500);
	 	
	setTimeout(function(){
		$(".block_auth").remove();
	$("#absolute_block_hoster").css({'display': 'none'});
		$(".reg_auth_block").append("<div class='block_auth'>"+
			"<input id='result_email_auth' class='auth' type='text' placeholder='Введите ваш email'>" +
			"<input id='result_password_auth' class='auth' type='password' placeholder='Введите ваш пароль'>" +
			"<button id='auth' class='css_button_reg' title='Нажми чтобы продолжить'>Авторизация</button>"+
		"</div>");
		$("#button_reg").removeClass("active_button-reg_auth");
		$("#button_auth").addClass("active_button-reg_auth");
		$("#button_auth").html(">>>Авторизация<<<");
		$("#button_reg").html("Регистрация");
		$(".reg_auth_block").animate({height: "365px"}, 500);
		$(".block_regis").animate({opacity: 0}, 150);
		$(".block_auth").animate({opacity: 1}, 500);	

	}, 2000);
}
}

 
$('#button_reg').click(function(){	
	$(".block_auth").remove();
	if($(".block_regis").length == 0){
	$(".reg_auth_block").append("<div class='block_regis'>"+
	"<input id='result_name_reg' type='text' placeholder='Введите ваше Имя'>"+
	"<input id='result_email_reg' type='text' placeholder='Введите ваш email'>"+
	"<input id='result_password_reg' type='password' placeholder='Введите ваш пароль'>"+
	"<input id='result_password2_reg' type='password' placeholder='Повторите ваш пароль'>"+
	"<button id='button_reg_now' class='css_button_reg' title='Нажми чтобы продолжить'>Регистрация</button>"+
	"</div>");
	}
	
    $("#button_auth").removeClass("active_button-reg_auth");
	$("#button_reg").addClass("active_button-reg_auth");
	$("#button_reg").html(">>>Регистрация<<<");
	$("#button_auth").html("Авторизация");
	$(".reg_auth_block").animate({height: "510px"}, 500);
	
	setTimeout(function(){
		$(".block_regis").animate({opacity: 1}, 500);
	}, 500)		

});
$('#button_auth').click(function(){	
	setTimeout(function(){
		$(".block_regis").animate({opacity: 0}, 500);
	}, 500);
	setTimeout(function(){
		$(".block_regis").remove();
	}, 1000);	
	$(".block_regis").remove();
	if($(".block_auth").length == 0){
	$(".reg_auth_block").append("<div class='block_auth'>"+
		"<input id='result_email_auth' class='auth' type='text' placeholder='Введите ваш email'>" +
		"<input id='result_password_auth' class='auth' type='password' placeholder='Введите ваш пароль'>" +
		"<button id='auth' class='css_button_reg' title='Нажми чтобы продолжить'>Авторизация</button>"+
	"</div>");
	}
    $("#button_reg").removeClass("active_button-reg_auth");
	$("#button_auth").addClass("active_button-reg_auth");
	$("#button_auth").html(">>>Авторизация<<<");
	$("#button_reg").html("Регистрация");
	$(".reg_auth_block").animate({height: "365px"}, 500);
	setTimeout(function(){
		$(".block_auth").animate({opacity: 1}, 500);
	}, 500);
});

$("body").on("click", "#button_reg_now", function(){
	var param = {};
	
	param['result_name_reg'] = $("#result_name_reg").val();
	param['result_email_reg'] = $("#result_email_reg").val();
	param['result_password_reg'] = $("#result_password_reg").val();
	param['result_password2_reg'] = $("#result_password2_reg").val();
	
	if(param['result_name_reg'] != "" && param['result_email_reg'] != "" && param['result_password_reg'] != "" && param['result_password_reg'] != ""){
	if(param['result_password_reg'] == param['result_password2_reg']){
	
 	$.ajax({
		url: https+"?controller=reg_auth&method=registration", 
		type: 'POST',
		data: {data: param},
		success: function(res){
			var data = res.split(" ");
			if(data[0] == "mistake_no"){
	
				$('.block_regis').animate({top: "100%"}, 2000);
				$('.vv').animate({top: "100%"}, 2000);
					
				setTimeout(function(){
					$('.block_regis').remove();
					$('.reg_auth_block').remove();
					$(".vv").css({"display" : "none"});
				}, 2000);
				$('body').append("<div class='container-fuild row l' id='bag_js_fix_1'>"+
				"<div class='col-4'></div>"+
				"<div id='pozdravlenia' class='col-5 btn ml-5'>"+
					"<h2>Осталось совсем чучуть</h2>"+
					"<span class='pozdravlenia_text'>Мы выслали вам на почту "+ data[1] +"<br> зашифрованную ссылку..</span><br>"+
					"<span class='pozdravlenia_text'>Нажимая на её вы автоматически будете зарегистрированы..</span><br>"+
					"<span class='pozdravlenia_text2'>Спасибо что выбираете нас</span>"+
					"<span class='pozdravlenia_text2'>Ссылка работает 12 часов</span>"+
					"</div></div>");
					$('#bag_js_fix_1').animate({top: "+35%"}, 3000);
					
	
				
			}
			if(res == "mistake_name_inv_rus"){
				mistake('Для дальнейшей работы на нужно имя на Английском');
			}
			if(res == "mistake_name_kol"){
				mistake('Количество символов имя, должно быть от 4 до 50');
			}
			if(res == "mistake_password_kol"){
				mistake('Количество символов пароля, должно быть от 4 до 50');
			}			
			if(res == "mistake_email"){
				mistake('Некорректный email');
			}
			if(res == "mistake_user_kol"){
				mistake('Данный аккаунт уже занят');
			}
			if(res == "mistake_user_kol"){
				mistake('Данный аккаунт уже занят');
			}			
		}
	});
	
	}else{
		mistake('Пароли не совпадают');
	}
	}else{
		mistake('Пожалуйста заполните все данные');
	}
});

$('body').on('click', '#auth', function(){
	var param = {};
	
	param['result_email_auth'] = $("#result_email_auth").val();
	param['result_password_auth'] = $("#result_password_auth").val();
	
	if(param['result_email_auth'] != "" && param['result_password_auth'] != ""){
		$.ajax({
			url: https+"?controller=reg_auth&method=authorization",
			type: 'POST',
			data: {data: param},
			success: function(res){
				var data = res.split(" ");

				if(data[0] == 'successfully_logged'){
					$(".vv").animate({top: "100%"}, 2200);
					$(".block_auth").animate({top: "100%"}, 2000);	
					setTimeout(function(){
						$(".block_auth").remove();
						$(".reg_auth_block").remove();
						$(".vv").remove();
					}, 2000);
					
				$.ajax({
					url: https+"?controller=main&method=show_sites",
					success: function(res){
						if(res == ""){
							modal();
						setTimeout(function(){
							$('#myModal').modal('show');
						}, 2000);		
							
							
						}else{				
							$("body").append('<div class="container-fuild row l no_site content">'+
							'<div class="col-4"></div>'+		
							'<div class="col-xl-5 if_sites_no_block">'+
							'<h3 class="text-center mt-1">Пожалуйста выберите сайт..</h3>'+
							'</div></div>');	
							
							$(".no_site").css({'top': '-35%'});
							$(".no_site").animate({top: '43%'}, 3800);
							$(".gfgd").append(res);
						}
					}
				});
					
					setTimeout(function(){ 
						$("#sss").html(data[1]);
						$(".d-none").removeClass('d-none');
						$('.caret-off').addClass('btn-secondary');
					}, 1500);
					
				}
				if(res == 'mistake_user'){
					mistake('Данный аккаунт не существует, или вы не правильно ввели данные');
				}
			}
		});
	}else{
		mistake('Пожалуйста заполните всё данные');
	}
});