$(function(){
	//***********************************************
	//--
	$('.headDiv').find('.searchBtn').click(function(){
		$('.phSearch').fadeToggle(500);
	})
	$('.phSearch').find('.phSearchBg').click(function(){
		$('.phSearch').fadeOut(500);
	})
	//--
	$('.navIco').click(function(){
		$('.navLayer').animate({right: "0",width:"100%"}, 300);
		$('.navIco').css("display","none");
		$('.close').css("display","block");
		})
	$('.close').click(function(){
		$('.navLayer').animate({right: "-100%",width:0}, 300);
		$('.navIco').css("display","block");
		$('.close').css("display","none");
		})
	
	//--
	$('.selTitle').click(function(){
		if(!$('.selTitle').hasClass('on')){
			$('.selCont').slideDown();
			// $('.selTitle span').addClass('on');
			$(this).addClass('on');
		}else{
			$('.selCont').slideUp();
			// $('.selTitle span').removeClass('on');
			$(this).removeClass('on');
		}
	});
	
	//--
	$(".subNav1").click(function(){
		$(this).toggleClass("currentDt").siblings(".subNav1").removeClass("currentDt");
		$(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(300);
	})

});

/****************************/
//----

