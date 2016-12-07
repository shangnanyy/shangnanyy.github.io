$(function(){
//登录界面
	$('#log').click(function(){
		$('#modal-log').fadeIn();
		$('#modal-log').find('.modal-content').animate({
			right:0
		},400)
	});
	$('.closeLog').click(function(){
		
		$('#modal-log').find('.modal-content').animate({
			right:'-100%'
		},400);
		$('#modal-log').fadeOut();
	})
	$('#head .head-r .head-r-t .head-r-t-r li:first>a').mouseenter(function(){
		$('.myk').show();
		$(this).parent().css({
			'border':'1px solid #999'
			
		})
	});
	$('#head .head-r .head-r-t .head-r-t-r li').mouseleave(function(){
		$('.myk').hide();
		$(this).css({
			'border':0
		})
	})
	  //登录框
	  $('.text').focus(function(){
	  	
	  	$(this).addClass('error');
	  })
	  $('.text').blur(function(){
	  	var val = $(this).val().trim();
		if(val == ''){
			$(this).next().find('p').show();
		}else{
			$(this).next().find('p').hide();
		};
	  	$(this).removeClass('error');
	  });
	  //密码框
	  $('.password').focus(function(){
	  	$(this).addClass('error');
	  });
	  $('.password').blur(function(){
	  	var val = $(this).val().trim();
		if(val == ''||val.length<6||val.length>20){
			$(this).next().find('p').show();
		}else{
			$(this).next().find('p').hide();
		};
	  	$(this).removeClass('error');
	  });
	  //验证码
	  createyanzhen();
	  function createyanzhen(){
	  	var num='0123456789';
	  	var v='';
	  	for(i=0;i<4;i++){
	  	var index=parseInt(Math.random()*10);
	  	v+=num[index];
	 	}
	  	$('.yanzhen').next().html(v);
	  	return v
	  }
	  $('.yanzhen').next().click(function(){
	  	createyanzhen();
	  });
// 注册界面
	$('#reg').click(function(){
		
		$('#modal-reg').fadeIn();
		$('#modal-reg').find('.modal-content').animate({
			right:0
		},400)
	});
	$('.closeLog').click(function(){
		$('#modal-reg').find('.modal-content').animate({
			right:'-100%'
		},400);
		$('#modal-reg').fadeOut();
	})

	 
	
	
	
	
	
	
})