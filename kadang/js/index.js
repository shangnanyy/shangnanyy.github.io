$(function(){
	//加载头部
	$('.head-box').load('head.html',function(){
		$.getScript('js/head.js');
	})
	
	//baner轮播
	var banner = $('#banner .banner');
	var banner1 = new Banner(banner);
	banner1.init();
	//楼层
	var floor=$('#main .floor');
	var floorT=$('#main').offset().top; 
	var lis=$('#main .floor ul li');
	var floors=$('#main .floor_main')
	$(window).scroll(function(){
//	console.log(floorT);
//	console.log($(window).scrollTop());
		//吸顶盒
		if($(window).scrollTop()>=floorT){
			floor.css({
				position:'fixed',
				top:0,
				zIndex:2
			});
		}else{
			floor.css({
				position:'static'
				
			});
		};
		//色块跟随
		floors.each(function(k,v){
			var floorsT=$(v).offset().top;
			var floorsB=$(v).offset().top+$(this).outerHeight();
			if($(window).scrollTop()+46>floorsT
				&&
			  $(window).scrollTop()+46<=floorsB){
					lis.eq(k).addClass('current').siblings().removeClass('current');
					return false;
			};
		})
	});
	
})