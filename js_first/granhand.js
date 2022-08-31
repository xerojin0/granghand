$(document).ready(function () {

  //Nav

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

  //MainVisual
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
  var current = 0;
  var $slides = $(".slide");
  $slides.css({ "left": "-100%" });
  $slides.eq(0).css({ "left": "0px" });

  function fnMove(idx) {
    $slides.eq(current).animate({
      left: "100%"
    }, {
      duration: 5000,
      start: function () {
        $slides.eq(idx).css({ "left": "-100%" });
        $slides.eq(idx).animate({ left: "0" }, 5000);
      }
    });
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


  //Tabs


  $(".content").hide();
  $(".content").first().show();
  $(".tabs li").first().addClass("select")

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
    $("#namsan").children("img").attr("src", "img/namsan/namsan" + n + ".jpg");
  }

  setInterval(namsan, 2000);

  var m = 1;
  function mapo() {
    m++;
    if (m > 6) {
      m = 1;
    }
    $("#mapo").children("img").attr("src", "img/mapo/mapo" + m + ".jpg");
  }

  setInterval(mapo, 2000);

  var s = 1;
  function seochon() {
    s++;
    if (s > 4) {
      s = 1;
    }
    $("#seochon").children("img").attr("src", "img/seochon/seochon" + s + ".jpg");
  }

  setInterval(seochon, 2000);

  var y = 1;
  function sogyeok() {
    y++;
    if (y > 2) {
      y = 1;
    }
    $("#sogyeok").children("img").attr("src", "img/sogyeok/sogyeok" + y + ".jpg");
  }

  setInterval(sogyeok, 2000);

  var b = 1;
  function bukchon() {
    b++;
    if (b > 4) {
      b = 1;
    }
    $("#bukchon").children("img").attr("src", "img/bukchon/bukchon" + b + ".jpg");
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

	var x = screen.width;
	var y = screen.height;

	var posX = (x/2)-200;
	var posY = (y/2)-200;

	function fnAd(){
	window.open("popup.html","ad","left=" + posX + ",top=" + posY + ",width=410,height=410");
	}

	fnAd();


	//시간에 따라 바뀌는 배너

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

});


