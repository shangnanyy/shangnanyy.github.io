
function Banner(banner){
	this.main=banner;
	console.log(this.main);
	this.imgWrap=banner.find('.img-wrapper');
	this.imgs = this.imgWrap.find('img');
	this.arrow = banner.find('.arrow');
	this.wrapper = banner.find('.circle').find('.circle-wrapper');
	this.now=0;
	this.next=0;
	this.timer = null;
	this.interval = 1400;
}

	Banner.prototype={
		constructor: Banner,
		/*初始化*/
		init:function(){
			var that=this;
			this.imgs.eq(0).show();
			this.autoPlay();
			this.arrowPlay();
			this.handlePlay();
			
			/*箭头初始化*/
			this.main.mouseenter(function(){
				clearInterval(that.timer);
				that.arrow.stop(true).fadeIn();
				that.arrow.mouseenter(function(){
					$(this).css('opacity',1);
				});
				that.arrow.mouseleave(function(){
					$(this).css('opacity',0.5);
				});
			});
			this.main.mouseleave(function(){
				that.autoPlay();
				that.arrow.fadeOut();
			});
			//初始化小圆圈
			var content = '';
			for(var i=0; i<this.imgs.length; i++){
				content += '<span class="circle-item" data-index="'+i+'"></span>';
			}
			this.wrapper.html(content);
			this.wrapper.find('span').eq(0).addClass('active');
		},
		/*自动轮播*/
		autoPlay:function(){
			var that=this;
			this.timer=setInterval(function(){
				that.next++;
				that.imgSwitch();
			},this.interval)
		},
		//手动轮播
		handlePlay:function(){
			var that=this;
			this.wrapper.on('click','.circle-item',function(){
				that.next = $(this).attr('data-index');
				that.imgSwitch();
			});
		},
		//箭头点击事件
		arrowPlay:function(){
			var that=this;
			this.arrow.eq(0).click(function(){
				if(that.next == 0){
					that.next = that.imgs.length-1;
				}else{
					that.next--;
				}
				that.imgSwitch();
			});
			this.arrow.eq(1).click(function(){
				that.next++; 
 				that.next %= that.imgs.length; 
 				that.imgSwitch();
			});
			
			
		},
		imgSwitch:function(){
			this.next%=this.imgs.length;
			this.imgs.eq(this.now).stop(true).fadeOut();
			this.imgs.eq(this.next).stop(true).fadeIn();
			this.wrapper.find('span').eq(this.next).addClass('active').siblings().removeClass('active');
			this.now=this.next;
		}

	}