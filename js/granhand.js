$(document).ready(function () {
  //Nav
  /*
  $(".gnb>li>a").on("mouseover", function () {
    $(this).siblings(".snb").stop().slideDown(1000);
  });

  $(".gnb>li>a").on("mouseout", function () {
    $(this).siblings(".snb").stop().slideUp(10);
  });
	

  $(".snb").on("mouseover", function () {
    $(this).stop().show();
  });

  $(".snb").on("mouseout", function () {
    $(this).stop().hide();
  });
 */

  //MainVisual

  var current = 0;
  var $slides = $(".slide");

  $slides.css({ display: "none" });
  $slides.eq(0).css({ display: "block" });

  function fnFade(idx) {
    $slides.fadeOut(3000);
    $slides.eq(idx).fadeIn(3000);
    current = idx;
  }

  function setSlide() {
    if (current == 3) {
      fnFade(0);
    } else {
      fnFade(current + 1);
    }
  }

  setInterval(setSlide, 3000);
  /*
    function action() {
      $(".sliders").animate({
        left: "-2000px"
      }, {
        duration: 50000,
        complete: function () {
          var $clone = $(".sliders>div").first().clone();
  
          $(".sliders").append($clone);
          $(".sliders>div").first().remove();
          $(".sliders").css({ "left": "0px" });
        },
        duration: 10000,
        easing: "swing"
      })
    }
  
    setInterval(action, 1000);
  */

  /*
  var current = 0;
  var $slides = $(".slide");
  $slides.css({ left: "-100%" });
  $slides.eq(0).css({ left: "0px" });

  function fnMove(idx) {
    $slides.eq(current).animate(
      {
        left: "100%",
      },
      {
        duration: 5000,
        start: function () {
          $slides.eq(idx).css({ left: "-100%" });
          $slides.eq(idx).animate({ left: "0" }, 5000);
        },
      }
    );
    current = idx;
  }

  function setSlide() {
    if (current == 3) {
      fnMove(0);
    } else {
      fnMove(current + 1);
    }
  }

  var timer = setInterval(setSlide, 5000);

  $(window).on("blur", function () {
    clearInterval(timer);
  });

  $(window).on("focus", function () {
    timer = setInterval(setSlide, 5000);
  });
  */

  //Tabs

  $(".content").hide();
  $(".content").first().show();
  $(".tabs li").first().addClass("select");

  $(".tabs li").on("click", function () {
    event.preventDefault(); // 링크의 기본작동을 막아서 화면이동하지 않게 한다.
    var active = $(this).find("a").attr("href");

    $(".content").hide();
    $(active).show();
    $(".tabs li").removeClass();
    $(this).addClass("select");
  });

  //Tabs Sliders

  var n = 1;
  function namsan() {
    n++;
    if (n > 5) {
      n = 1;
    }
    $("#namsan")
      .children("img")
      .attr("src", "img/namsan/namsan" + n + ".jpg");
  }

  setInterval(namsan, 2000);

  var m = 1;
  function mapo() {
    m++;
    if (m > 6) {
      m = 1;
    }
    $("#mapo")
      .children("img")
      .attr("src", "img/mapo/mapo" + m + ".jpg");
  }

  setInterval(mapo, 2000);

  var s = 1;
  function seochon() {
    s++;
    if (s > 4) {
      s = 1;
    }
    $("#seochon")
      .children("img")
      .attr("src", "img/seochon/seochon" + s + ".jpg");
  }

  setInterval(seochon, 2000);

  var y = 1;
  function sogyeok() {
    y++;
    if (y > 2) {
      y = 1;
    }
    $("#sogyeok")
      .children("img")
      .attr("src", "img/sogyeok/sogyeok" + y + ".jpg");
  }

  setInterval(sogyeok, 2000);

  var b = 1;
  function bukchon() {
    b++;
    if (b > 4) {
      b = 1;
    }
    $("#bukchon")
      .children("img")
      .attr("src", "img/bukchon/bukchon" + b + ".jpg");
  }

  setInterval(bukchon, 2000);

  //Item mouseover 시

  $(".weimar").on("mouseover", function () {
    $(this).children("img").attr("src", "img/weimar_1.jpeg");
  });

  $(".weimar").on("mouseout", function () {
    $(this).children("img").attr("src", "img/weimar.jpg");
  });

  $(".sopni").on("mouseover", function () {
    $(this).children("img").attr("src", "img/sopni_1.jpeg");
  });

  $(".sopni").on("mouseout", function () {
    $(this).children("img").attr("src", "img/sopni.jpg");
  });

  $(".marne").on("mouseover", function () {
    $(this).children("img").attr("src", "img/marne_1.jpeg");
  });

  $(".marne").on("mouseout", function () {
    $(this).children("img").attr("src", "img/marne.jpg");
  });

  $(".modle").on("mouseover", function () {
    $(this).children("img").attr("src", "img/modle_1.jpeg");
  });

  $(".modle").on("mouseout", function () {
    $(this).children("img").attr("src", "img/modle.jpg");
  });

  // popup 시

  $("#modal").stop().show();

  $("#btn").on("click", function () {
    $("#modal").fadeOut(500);
  });

  //닫기버튼 클릭시 실행되는 팝업창을 닫는 함수
  function closePopup() {
    if ($("input[name='chkbox']").is(":checked") == true) {
      //더보지 않기에 체크했다면
      setCookie("close", "Y", 1); //쿠키이름, 값, 유효기간을 쿠키데이터에 저장한다.
    }
    $("#modal").hide();
  }

  //더보지않기에 체크를 하는 경우 실행되는 함수(쿠키에 정보를 저장하는 함수)
  function setCookie(name, value, exdays) {
    // (쿠키이름, 쿠키값, 종료일)을 매개변수로
    var today = new Date();
    today.setTime(today.getTime() + exdays * 24 * 60 * 60 * 1000); // today변수에 안보여줄 시간(현재시간 + ms로 계산된 하루시간)을 저장
    var expires = "expires=" + today.toUTCString(); // expires 변수에 안보여줄 시간을 날짜로 변환해서 저장
    document.cookie = name + "=" + value + ";" + expires; //쿠키에 쿠키이름 + 쿠키값 + 유효기간을 저장
  }

  //쿠키데이터에 문서의 쿠키값을 저장한다. 만약 더 보지 않기에 체크를 했다면 쿠키이름(close), 값(Y), 유효기간이 저장되어 있다.
  var cookiedata = document.cookie;

  //쿠키데이터에 Y가 없다면('더보지 않기'에 체크를 안했음) 팝업을 보여주고 아니라면 감춤
  if (cookiedata.indexOf("close=Y") < 0) {
    $("#modal").show();
  } else {
    $("#modal").hide();
  }

  //닫기 버튼을 클릭했다면 닫기함수를 실행한다.
  $("#btn").on("click", function () {
    closePopup();
  });

  //시간에 따라 바뀌는 배너
  /*
	function timeDesign(){
		var today=new Date();
		var H=today.getHours();
	
		if(H>=9 && H<18){	// 아침 6시부터 저녁 6시까지
				$("#banner").addClass("day");
		}else{
				$("#banner").addClass("night");
		}
	}
	

	timeDesign();
	setInterval(timeDesign, 1000);
*/

  //chet

  var starPos = $(".chet").offset().top;

  $(window).on("scroll", function () {
    var scrollPos = $("html").scrollTop();
    var newPos = scrollPos + starPos;

    $(".chet").animate(
      {
        top: newPos,
      },
      30,
      "swing"
    );
  });

  $(window).on("scroll", function () {
    $("#info").text($("html").scrollTop());

    var pos = $("html").scrollTop();

    $(".content_text_1")[pos >= 800 ? "addClass" : "removeClass"]("on");

    $(".content_text_2")[pos >= 1400 ? "addClass" : "removeClass"]("on");

    //$(".text-box")[pos>=2900 ? "addClass" : "removeClass"]("on");

    $("g")[pos >= 4000 ? "addClass" : "removeClass"]("on");
  });
});
