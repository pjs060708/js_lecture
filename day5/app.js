// Effect 메서드
// $("요소선택").effect메서드(효과 소요 시간, 가속도, 콜백 함수)
// 효과 소요 시간: 1)slow / normal / fast => 문자열 중 선택 2) 1000(1초) / 500(0.5초) => ms단위
// 가속도: "swing"(시작과 끝은 느리지만 중간은 빠르다) / "linear" (모두 일정한 속도)
// 콜백 함수: 효과가 끝난 뒤 실행할 함수, 생략 가능하다

// $(".box").slideUp(2000, "linear", () => {
//   alert("좋은 아침입니다");
// });

// 숨김 관련
// hide(): 요소 숨긴다
// fadeOut(): 점점 투명해지다가 사라진다
// slideUp(): 요소가 위로 접히면서 숨겨진다

// 노출 관련
// show(): 숨겨진 요소 노출된다
// fadeIn(): 숨겨진 요소가 점점 선명해진다
// slideDown(): 숨겨진 요소가 아래로 펼쳐진다

// 노출 및 숨김
// toggle(): hide <=> show
// fadeToggle(): fadeIn <=> fadeOut
// slideTogg(): slideDown <=> slideUp

// fadeTo(): 지정한 투명도 저용(css - opacity와 같다)
// $("요소선택").fadeTo(효과 소요 시간, 투명도, 콜백함수)
// 투명도: 0에서 1 사이의 값(1에 가까울수록 선명하다)

$(".btn2").hide();

$(".btn1").on("click", function () {
  $(".box").slideUp(1000, "linear", function () {
    $(".btn1").hide();
    $(".btn2").show();
  });
});

$(".btn2").on("click", function () {
  $(".box").fadeIn(1000, "swing", function () {
    $(".btn1").show();
    $(".btn2").hide();
  });
});

$(".btn3").on("click", function () {
  $(".box").slideToggle(1000, "linear");
});

$(".btn4").on("click", function () {
  $(".box").fadeTo("fast", 0.3);
});

$(".btn5").on("click", function () {
  $(".box").fadeTo("slow", 1);
});

// 애니메이션(모션) 메서드
// animate(): 선택한 요소에 대해 다양한 motion 적용 가능
// $("요소선택").animate({CSS속성: 값, ...}, 적용 시간, 가속도, 콜백 함수)

// btn1을 클릭했을 때 text1 요소를 폰트 사이즈 30px로 증가,
// 왼쪽에서부터 마진값을 500px
// 2초, 일정한 속도로 동작하도록
// animate() 작업이 종료되면 "모션 완료"라는 알림창을 띄워주세요
$(".btn6").on("click", function () {
  $("text1").animate(
    {
      marginLeft: "500px",
      fontsize: "30px",
    },
    2000,
    "linear",
    () => {
      alert("모션 완료");
    }
  );
});

// btn7을 클릭했을때
// text2 요소를 왼쪽에서 부터 마진값을 50px씩 추가하세요
// 1초 동안, 기본 값 적용(기본값은 swing이다)
// 콜백함수 없음
$(".btn7").on("click", function () {
  $("text2").animate(
    {
      marginLeft: "+=50px",
    },
    1000
  );
});

// 애니메이션 효과 제어 메서드
// effect / animate 등의 동작을 제어
// 애니메이션은 Queue형식으로 First In First Out의 구조를 가진다
// 먼저 호출된 요소가 먼저 실행

// stop(): 현재 실행중인 효과를 모두 정지
// $("요소선택").spot(): 현재 실행중인 효과를 모두 정지.
//                       Queue에 남은 요소는 계속 실행한다

// $("요소선택").stop(clearQueue[true|false], finish[true|false])
// 기본 값은 false이다
// clearQueue(): true => 큐에서 대기중인 요소를 모두 제거
// finish(): true => 진행중인 애니메이션을 강제 종료

// delay(): 애니메이션의 실행 지연
// $("요소선택").delay(ms단위 지연 시간).animate();

$(".text1").animate({ marginLeft: "100px" }, 1000);
$(".text2").delay(2000).animate({ marginLeft: "100px" }, 1000);

function moveElement() {
  $(".text3").animate({ marginLeft: "+=50px" }, 1000);
  $(".text4").animate({ marginLeft: "+=50px" }, 1000);
  $(".text4").stop();

  $(".text5").animate({ marginLeft: "+=50px" }, 1000);
  $(".text5").stop(true, true);
}

$(".btn8").on("click", moveElement);

// queue(): 큐(Queue)에 적용된 애니메이션 함수를 반환
//          or 큐에 지정한 함수를 추가한다
//          메서드 실행 시 실행 이후의 모든 애니니메션 취소

// $("요소선택").queue(): 큐에 들어있는 함수 반환
// $("요소선택").queue(function() {}): 새로운 함수를 큐에 참가

// dequeue(): queue() 메서드 실행 이후 적용된 애니메이션 메서드가 취소X해중
// $("요소선택").dequeue(): 취소가 되지 않도록 해준다

// $(".text6")
//   .animate({ marginLeft: "200px" }, 1000)
//   .animate({ marginTop: "200px" }, 1000)
//   .queue(() => {
//     $(this).css({ color: "red" });
//     $(this).dequeue(); // 뒤의 animate() 2개를 실행 시키기위해서
//   })
//   .animate({ marginLeft: 0 }, 1000)
//   .animate({ marginTop: 0 }, 1000);

// clearQueue(): 진행 중인 애니메이션을 제외하고 큐에서 대기하는 모든 요소 제거
$(".text6")
  .animate({ marginLeft: "100px" }, 1000)
  .animate({ marginLeft: "200px" }, 1000)
  .animate({ marginLeft: "300px" }, 1000);
$(".text7")
  .animate({ marginLeft: "100px" }, 1000)
  .animate({ marginLeft: "200px" }, 1000)
  .animate({ marginLeft: "300px" }, 1000);
// $("text7").clearQueue();

// finish() : 선택한 요소의 진행중인 애니메이션을 강제로 완료시점으로 보낸 후 종료
// 단순 CSS 적용 모습처럼 보임!
$("text7").finish();
