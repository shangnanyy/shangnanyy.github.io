
$(function(){
//	alert(1)
	var glass={
		lBox:$(".littleBox .lbox"),
		zoomPad:$('.zoomPad'),
		filter: $('.filter'),
		glass:$('.glass'),
		largeWrap: $('.large'),

		init:function(){
			this.lmove();
			this.hover();
			this.move();
		},
		//给大框中动态添加照片
		lmove:function(){
			var that=this;
			this.lBox.on('click','li',function(){
				that.zoomPad.html($(this).html());
				that.largeWrap.children().remove();
				that.largeWrap.html($(this).html());
				$(this).siblings().removeClass('choice');
				$(this).addClass('choice');
			})
		},
		move:function(){
			var that = this;
			this.glass.mousemove(function(e){
				e=e||e.window.event;
				var left=e.clientX-205;
				var toop=e.clientY-140;
//				边界处理
				left = left < 100 ? 100 : (left > 300) ? 300 : left;
				toop = toop < 100 ? 100 : (toop > 300) ? 300 : toop;
				that.filter.css({
					left: left-100, //-100是为了让鼠标在滤镜的中心位置
					top: toop-100
				});
				that.largeWrap.find('img').css({
					left: -2*(left-100),
					top: -2*(toop-100)
				})
			})
		},
		hover:function(){
			var that=this;
			this.glass.mouseenter(function(){
				that.filter.show();
				that.largeWrap.show();
				
			});
			this.glass.mouseleave(function(){
				that.filter.hide();
				that.largeWrap.hide();
			});
		}
	};
	glass.init();
})

		
		
		











