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
				zIndex:1
			});
			floors.css({
				paddingTop:46
			});
		}else{
			
			floor.css({
				position:'static'
				
			});
			floors.css({
				paddingTop:0
			});
		};
		//色块跟随
		var flag = true;
		floors.each(function(key,val){
			
			var floorsT=$(val).offset().top;
			var floorsB=$(val).offset().top+$(this).outerHeight();
			if(!flag){
				return;
			}
			if($(window).scrollTop()>floorsT
				&&
			  $(window).scrollTop()<=floorsB){
					lis.eq(key).addClass('current').siblings().removeClass('current');
					return false;
			};
		})
		$('#main .floor>ul').on('click','li',function(){
			flag = false;
			$(this).addClass('current').siblings().removeClass('current');
			var t=floors.eq($(this).index()).offset().top;
			$('html,body').stop(true).animate({
				scrollTop:t
			},function(){
				flag = true;
			});
		})
	});
	
	//二级导航
	var content = $('#banner .manu_hot .tag_content .tag-con-item');
	$('#banner .hot .manu_hot .tag_nav dl dt').mouseenter(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
		content.parent().show();
		content.eq($(this).index()).show().siblings().hide();
	});
	content.parents('.manu_hot').mouseleave(function(){
		content.parent().hide();
		$(this).find('dt').removeClass('hover');
	})
	
})