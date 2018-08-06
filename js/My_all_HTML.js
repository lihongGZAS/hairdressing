$(function(){
//点击 收缩搜索查询区域
	$("#my_display_click").click(function(){
		var clicks = $("#click_hidden").css("display");
		if(clicks == "none"){
		$("#click_hidden").slideDown(200);
		}else{
			$("#click_hidden").slideUp(200);
		}
	});
	
//点击 单行明细查询
	$(".click_refer").click(function(){
		$("#show_reder_out").fadeIn(200);
		
	});
//上下 收缩
	$("#slide_down_up").click(function(){
		var dis_slide = $(this).parents(".refer_top").siblings(".refer_table").css("display");
		if(dis_slide == "none"){
			$(this).children("i").removeClass("fa-caret-up").addClass("fa-caret-up");
			$(this).parents(".refer_top").siblings(".refer_table").slideDown(300);
			if($("#show_reder_in").css("width") == "600px"){
				$("#show_reder_in").css("height","400px");
			}else{
				$("#show_reder_in").css("height","100%");
			}
			
		}else{
			$(this).children("i").removeClass("fa-caret-up").addClass("fa-caret-down");
			$(this).parents(".refer_top").siblings(".refer_table").slideUp(300);
			$("#show_reder_in").css("height","70px");
		}
	});
//信息框 最大化
	$("#max_window").click(function(){
		var cls = $("#show_reder_in").attr("class");
		if(cls == "show_reder_in_min"){
			$("#show_reder_in").removeClass("show_reder_in_min").addClass("show_reder_in_max");
			$("#show_reder_in").attr("class","show_reder_in_max");
		}else{
			$("#show_reder_in").removeClass("show_reder_in_max").addClass("show_reder_in_min");
			$("#show_reder_in").attr("class","show_reder_in_min");
		}
		if($("#show_reder_in").css("width") == "600px"){
			$("#show_reder_in").css("height","400px");
		}else{
			$("#show_reder_in").css("height","100%");
		}
	});
	
//信息框 最小化
	$("#min_window").click(function(){
		$("#show_reder_out").css("display","none");
	});
//关闭窗口
	$("#close_window").click(function(){
		$("#show_reder_out").css("display","none");
	});
});