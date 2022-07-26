$(function(){

	$(".depth1 > li").hover(
		function(){
			$(this)
			.children(".depth2")
			.addClass("on");
		},
		function(){
			$(this)
				.children(".depth2")
				.removeClass("on");
		}
	)

		//slider
		let num = 0; // 이미지 번호(전역변수)

		function changeSlider(img_num) {
			//공식 = 높이값(세로기준) * 이미지 번호
			let img_width = 960 * img_num;
	
			$(".slider .sliders").css({
				transform: `translateX(${-img_width}px)`
			})
		}
	
		// 자동재생
		setInterval(function(){
			num++;
			if(num > 2) {num = 0;}
			changeSlider(num);
		}, 3000)

});