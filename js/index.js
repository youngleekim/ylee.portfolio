
$(document).ready(function(){



//스크롤바가 이동될 대마다 스크롤위치값 나타내기
	$(window).scroll(function(){
		$("#txt1").text($(this).scrollTop());
	});

	//top_btn---------------------------------
	$(".top_btn").hide(); //탑버튼 숨기기

	//스크롤이 350이상일때 top버튼 보이게 하고 스크롤을 올리면 다시 숨김
	$(window).scroll(function(){

		if($(this).scrollTop()>350){
			$(".top_btn").fadeIn();
		}else{
			$(".top_btn").fadeOut();
		}
	});


	//top버튼 클릭시맨위로
	//top  버튼
	$(".top_btn a").click(function(){
		$("html,body").animate({"scrollTop":"0"});
		return false;
	});


	//scroll_btn---------------------------------
	$("#scroll_btn").hide();

	//스크롤이 350이상일때 스크롤버튼 보이게 하고 스크롤을 올리면 다시 숨김
	$(window).scroll(function(){

		if($(this).scrollTop()>350){
			$("#scroll_btn").fadeIn();
		}else{
			$("#scroll_btn").fadeOut();
		}
	});


	

	$(window).scroll(function(){
		
		var wscroll=$(this).scrollTop();

		if(wscroll>=600){ /*profile,eduation*/
			$(".gra").css({"transform":"none","opacity":"1"});
		}else{
			$(".gra").css({"transform":"translate(0px,200px)","opacity":"0"});
		}

	});

	$(window).scroll(function(){
		
		var wscroll=$(this).scrollTop();

		if(wscroll>=2699){ /*profile,eduation*/
			$(".inf").css({"transform":"none","opacity":"1"});
		}else{
			$(".inf").css({"opacity":"0"});
		}


		if(wscroll>=5500){/*footer*/
			$(".scales").css({"transform":"none","opacity":"1"});
		}else{
			$(".scales").css({"transform":"scale(0)","opacity":"0"});
		}
	

	});


	/*리스트 이미지 클릭시*/
	$(".panel>li").click(function(){
		
		g_pop=$(this).index();
		$(".g_page span:nth-child(1)").text(g_pop+1); //오른쪽 상단 페이지 넘버
		$("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
		$(".pop>li").eq(g_pop).show(); //g_pop index에 해당하는 팝업보이기
		$("#popup").stop(true,true).fadeIn(); //검정배경

	});


	/*오른쪽 상단 버튼-다음보기*/
	$(".right_btn").click(function(){

		$("#popup").scrollTop(0); /*스크롤 상단으로 올리기*/
		
		if(g_pop<14){
			$(".pop>li").eq(g_pop).stop(true,true).fadeOut(); 
			g_pop++;
	
			$(".g_page span:nth-child(1)").text(g_pop+1); /*페이지 번호*/
			$(".pop>li").eq(g_pop).stop(true,true).fadeIn();			
		}

	});


	/*오른쪽 상단 버튼-이전보기*/
	$(".left_btn").click(function(){

		$("#popup").scrollTop(0); /*스크롤 상단으로 올리기*/
		
		if(g_pop>0){
			$(".pop>li").eq(g_pop).stop(true,true).fadeOut(); 
			g_pop--;
	
			$(".g_page span:nth-child(1)").text(g_pop+1); /*페이지 번호*/
			$(".pop>li").eq(g_pop).stop(true,true).fadeIn();			
		}

	}); 


	/*오른쪽 상단 버튼-닫기*/
	$(".btn_close").click(function(){ //close버튼을 클릭할때
		$("html").css({overflowY:"scroll"});
		$("#popup").stop(true,true).fadeOut();
		$(".pop>li").stop(true,true).hide();
	});




	// .p2
	/*리스트 이미지 클릭시*/
	$(".web-t>.bt1").click(function(){
		
		$("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
		$(".popup4>li:nth-child(1)").next().show(); //g_pop index에 해당하는 팝업보이기
		// $(".popup4>li:nth-child(2)").next().show(); 
		$(".popup4>ul").stop(true,true).fadeIn(); //검정배경

	});


	/*리스트 이미지 클릭시*/
	$(".web-t>span").click(function(){
		
		w_pop=$(this).index();
		$(".g_page span:nth-child(1)").text(w_pop+1); //오른쪽 상단 페이지 넘버
		$("html").css({overflowY:"hidden"}); //기존 html 스크롤 숨기기
		$(".pop1>li").eq(w_pop).show(); //g_pop index에 해당하는 팝업보이기
		$(".pop1").stop(true,true).fadeIn(); //검정배경

	});


	/*오른쪽 상단 버튼-다음보기*/
	$(".right_btn").click(function(){

		$("#popup").scrollTop(0); /*스크롤 상단으로 올리기*/
		
		if(g_pop<14){
			$(".pop>li").eq(g_pop).stop(true,true).fadeOut(); 
			g_pop++;
	
			$(".g_page span:nth-child(1)").text(g_pop+1); /*페이지 번호*/
			$(".pop>li").eq(g_pop).stop(true,true).fadeIn();			
		}

	});


	/*오른쪽 상단 버튼-이전보기*/
	$(".left_btn").click(function(){

		$("#popup").scrollTop(0); /*스크롤 상단으로 올리기*/
		
		if(g_pop>0){
			$(".pop>li").eq(g_pop).stop(true,true).fadeOut(); 
			g_pop--;
	
			$(".g_page span:nth-child(1)").text(g_pop+1); /*페이지 번호*/
			$(".pop>li").eq(g_pop).stop(true,true).fadeIn();			
		}

	}); 


	/*오른쪽 상단 버튼-닫기*/
	$(".btn_close").click(function(){ //close버튼을 클릭할때
		$("html").css({overflowY:"scroll"});
		$("#popup").stop(true,true).fadeOut();
		$(".pop>li").stop(true,true).hide();
	});







	//스크롤버튼 클릭시 이동하는 스크롤거리
	$("#scroll_btn ul .scb1").click(function(){
		$("body,html").animate({scrollTop:"1000px"},700);
	});

	$("#scroll_btn ul .scb2").click(function(){
		$("body,html").animate({scrollTop:"2050px"},700);	
	});

	$("#scroll_btn ul .scb3").click(function(){
		$("body,html").animate({scrollTop:"3234px"},700);	
	});

	$("#scroll_btn ul .scb4").click(function(){
		$("body,html").animate({scrollTop:"4453px"},700);	
	});

	$("#scroll_btn ul .scb5").click(function(){
		$("body,html").animate({scrollTop:"5460px"},700);	
	});

//스크롤 내렸을때 보이는 탑메뉴
	// $(".menu").mouseenter(function(){
	// 	$(this).stop(true,true).slideDown();
	// });

//스크롤 내렸을때 내려오는 탑메뉴2
	// $(window).scroll(function(){

	// 	if ($(this).scrollTop()>100){
	// 		$(".menu").css({"margin-top":"0px","transition":"all 1s"});
	// 	} else {
	// 		$(".menu").css({"margin-top":"-260px","transition":"all 1s"});
	// 	}	

	// });


	//처음에 등장하는 부분
	$(".title").stop(true,true).animate({"left":"150px"});


	var img_w=$(".bl ul li").width(); //이미지의 가로너비
	var img_n=$(".bl ul li").length; //이미지 총 개수 ()없음 1,2,3...
	//currentIndex=0;
	var oldidx=0;
	var index=0;
	
	//index번째 비주얼이미지 출력
	function slideImg(index){

		targetX=-(index*img_w); //움직이는 거리(너비)

		$(".bl ul").animate({left:targetX},600,"easeOutCubic");
		$(".web-t ul").animate({left:targetX},600,"easeOutCubic");
		
		$(".w-slide li").eq(index).stop(true,true).fadeIn(600); //선택된 이미지
		$(".w-slide li").eq(oldidx).stop(true,true).fadeOut(600); //기존이미지
		$(".web-t ul li").eq(index).css({"display":"inline-block"});
		$(".num ul li").eq(oldidx).removeClass("active1");
		$(".num ul li").eq(index).addClass("active1");
		oldidx=index;
	}

	//하단버튼 클릭
	$(".num ul li").click(function(){

		index=$(this).index();
		slideImg(index);
		auto=setInterval(slideAuto,3000); //버튼 클릭안할땐 다시 자동함수 실행

	});


	//.p3



	//imax slide
	var oldidx=0;
	var idx=0;

	//이미지와 버튼이 바뀌는 함수
	function changeImg(idx){//idx는 선택되는 이미지

		if(oldidx!=idx){//기존의 이미지와 선택된 이미지가 다를때...

			$(".num ul li").eq(idx).addClass("active1"); //선택된 하단버튼
			$(".num ul li").eq(oldidx).removeClass("active1"); //기존 하단버튼		
			$(".w-slide li").eq(idx).stop(true,true).fadeIn(600); //선택된 이미지
			$(".w-slide li").eq(oldidx).stop(true,true).fadeOut(600); //기존이미지
			$(".w-slide li").css("transtion","all 1.5s ease-in-out");
		}
		oldidx=idx; //선택된 이미지는 다시 기존이미지로 저장되어 fadeout....

	}

	//.p2
      
      $(".bt1").click(function(){
            $(".popup4").show();
            $("html").css({overflowY:"hidden"});
            return false;
      });
      $(".bt2").click(function(){
            $(".popup4").show();
            $("html").css({overflowY:"hidden"});
            return false;
      });
      $(".bt3").click(function(){
            $(".popup4").show();
            $("html").css({overflowY:"hidden"});
            return false;
      });
      $(".bt4").click(function(){
            $(".popup4").show();
            $("html").css({overflowY:"hidden"});
            return false;
      });
      $(".bt5").click(function(){
            $(".popup4").show();
            $("html").css({overflowY:"hidden"});
            return false;
      });
      $(".bt6").click(function(){
            $(".popup4").show();
            $("html").css({overflowY:"hidden"});
            return false;
      });
      $(".bt7").click(function(){
            $(".popup4").show();
            $("html").css({overflowY:"hidden"});
            return false;
      });
      $(".bt8").click(function(){
            $(".popup4").show();
            $("html").css({overflowY:"hidden"});
            return false;
      });
      $(".bt9").click(function(){
            $(".popup4").show();
            $("html").css({overflowY:"hidden"});
            return false;
      });
      
      

      // 검정배경 클릭시 닫기
	$(".popup4").click(function(){
		$("html").css({"overflow-y":"scroll"});
		$(".popup4").hide();
		return false;
	});


	//mobile popup
      
      $(".m_b .btn1").click(function(){
            
            $(".popup1").show();
            $("html").css({overflowY:"hidden"});
            return false;
            
      });
      
      
      $(".btn_close1").click(function(){
            
            $(".popup1").hide();
            $("html").css({overflowY:"scroll"});
            
      });
      

      // .p4
	$(".menu1").click(function(){ //각 메뉴를 클릭했을때
		$(this).next().show(); //다음 형제인 .pop을 보이게함
		$("html").css({overflowY:"hidden"}); //body스크롤없앰
		return false;
	});	

	$(".close").click(function(){ //close눌렀을때
		$(".pop2").hide(); //.pop을 안보이게 함
		$(".pop3").hide(); //.pop을 안보이게 함
		$("html").css({"overflow-y":"scroll"}); //body스크롤 생김
		return false;
	});	

	// 검정배경 클릭시 닫기
	$(".pop2").click(function(){
		$("html").css({"overflow-y":"scroll"});
		$(".pop2").hide();
		return false;
	});

	// 검정배경 클릭시 닫기
	$(".pop3").click(function(){
		$("html").css({"overflow-y":"scroll"});
		$(".pop3").hide();
		return false;
	})


});