
var https = "http://cms.slavno.net";

function notification_css(data){
	$('body').append('<div id="notification_css">'+data+'</div>');
	$('#notification_css').slideDown(500, function(){
		setTimeout(function(){
			$('#notification_css').slideUp(500, function(){
				$("#notification_css").remove();
				setTimeout(function(){
					location.reload();
				}, 100);
			});	
		}, 700);
	});
}
function modal(){
	$("body").append('<div id="myModal" class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">'+
  '<div class="modal-dialog modal-dialog-centered" role="document">'+
    '<div class="modal-content">'+
      '<div class="modal-header">'+
        '<h5 class="modal-title" id="exampleModalLongTitle">Создайте ваш первый сайт</h5>'+
        '<button type="button" class="close jjd" data-dismiss="modal" aria-label="Close">'+
          '<span aria-hidden="true">&times;</span>'+
        '</button>'+
      '</div>'+
      '<div class="modal-body">'+
        '<input type="text" class="form-control" id="input_form_create_project" placeholder="Напишите название сайта..">'+
      '</div>'+
      '<div class="modal-footer">'+
        '<button type="button" class="btn btn-secondary jjd" data-dismiss="modal">Отмена</button>'+
        '<button type="button" class="btn btn-primary active_create_button_project">Сохранить</button>'+
'</div></div></div></div>');
}
function modal2(){
	$("body").append('<div id="myModal2" class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">'+
  '<div class="modal-dialog modal-dialog-centered" role="document">'+
    '<div class="modal-content">'+
      '<div class="modal-header">'+
        '<h5 class="modal-title" id="exampleModalLongTitle">Вы уверены что хотите выйти</h5>'+
        '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
          '<span aria-hidden="true">&times;</span>'+
        '</button>'+
      '</div>'+
      '<div class="modal-footer">'+
        '<button type="button" class="btn btn-secondary" data-dismiss="modal">Отмена</button>'+
        '<button type="button" class="btn btn-primary">Выйти</button>'+
'</div></div></div></div>');
	$('#myModal2').modal('show');	
}

function shows(){
	$("body").append('<div class="container-fluid shows ml-5"><br><br>'+
	'<div class="alert alert-warning text-center col-5 yytr" role="alert">'+
		'Пожалуйста выберите проект, или создайте его..'+
	'</div><div class="alert alert-warning text-center col-5 yytr" role="alert">'+
		'Вы не можете пользоватся СЕЙЧАС нашими вкладками..'+
	'</div><div class="alert alert-warning text-center col-5 yytr" role="alert">'+
		'Ну же скорей создавай и получать хорошую прибыль от своего проекта'+
	'</div><div class="alert alert-warning text-center col-5 yytr" role="alert">'+
		'Мы берем всего 10% от вашего заработка от рекламы..'+
	'</div><div class="alert alert-warning text-center col-5 yytr" role="alert">'+
		'И будьте уверены вы нашли хорошую, добрую, и безопасную cms'+
	'</div><div class="alert alert-warning text-center col-5 yytr create_project_all" role="alert">Cоздать</div></div>');
	
	$('.shows div:eq(0)').slideDown(400, function(){
		$(this).next().slideDown(200, arguments.callee);
	});
}
function shade(data){
		$(data).animate({marginLeft: "-3%"}, 200);
		setTimeout(function(){
			$(data).animate({marginLeft: "3%"}, 200);
		}, 200);
		setTimeout(function(){
			$(data).animate({marginLeft: "-3%"}, 200);
		}, 400);	
		setTimeout(function(){
			$(data).animate({marginLeft: "3%"}, 200);
		}, 600);
		setTimeout(function(){
			$(data).animate({marginLeft: "0%"}, 100);
		}, 800);	
}
function mistake(data){
	var audio = new Audio;
		audio.src = "/view/audio/mistake.mp3";
		audio.play();
		
	$('body').append("<div id='mistake_block'>"+
		"<h2>"+ data +"</h2>"+
	"</div>");
		
	$("#mistake_block").animate({top: "0%"}, 800);

	setTimeout(function(){
		$("#mistake_block").animate({top: "-20%"}, 1200);
	}, 2000);

	setTimeout(function(){
		$("#mistake_block").remove();
	}, 3000);
}	
function create_cookie_ajax(data){
	$.ajax({
		url: https+"?controller=main&method=create_cookie_ajax",
		type: "POST",
		data: {data: data},
	});
}
function show_cookie_ajax(data){
	var result = $.ajax({
		url: https+"?controller=main&method=show_cookie_ajax",
		type: "POST",
		data: {data: data},
		success: function(res){
			return res;
		}
	});
}
