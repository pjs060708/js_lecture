// // 이벤트: 유저가 웹사이트에 방문하여 하는 모든 동작을 이벤트라고 한다
// // 이벤트 핸들러: 이벤트가 발생했을 때 코드를 실행시키는 것이다

// // 이벤트 등록: 하나의 이벤트만 등록(listen)하거나 여러개의 이벤트를 등록 할수있다
// // 예시) 요소를 더블 클릭했을 때 / 요소에 마우스 포인터를 올렸을 때
// $("#btn").click(() => {
//   console.log("클릭 되었습다");
// });

// // 로딩 이벤트
// // load(), ready(), error()

// // 마우스 이벤트
// // click(), dblclick()
// // mouseout(), hover(), mouseover()
// // mousedown(), mouseup(), mouseenter(), mouseleave(), mousemove()
// // scroll()

// // 포커스 이벤트
// // focus()
// // focusin(), focusout()
// // blur()
// // change()

// // 키보트 이벤트
// // keypress()
// // keydown(), keyup()

// // 이벤트를 등록하는 방법
// // $("요소선택").이벤트종류(이벤트 핸들러 함수)
// function btnClickHandler() {
//   console.log("클?릭");
// }

// $("#btn").click(btnClickHandler);

// // 그룹 이벤트 등록 메서드
// // 1.
// // $("요소선택").on("이벤트 종류1 이벤트 종류2", function(){})

// // 2.
// // $("요소선택").on({
// //     "이벤트 종류1 이벤트 종류2":function(){}
// // } )

// // 3.
// // $("요소선택").on({
// // "이벤트 종류1" : function(){},
// // "이벤트 종류2" : function(){}
// // })

// // bth요소에 마우스를 올리거나 키보드를 사용해서 버튼에 포커스를 맞출 때
// // 1.
// $("#btn").on("mouseover focus", function () {
//   console.log("이벤트 발생");
// });

// // 2.
// $("#btn").on({
//   "mouseover focus": function () {
//     console.log("이벤트 발생2");
//   },
// });

// // 3.
// $("#btn").on({
//   mouseover: function () {
//     console.log("이벤트 발생3");
//   },
//   focus: function () {
//     console.log("이벤트 발생4");
//   },
// });

// $("#btn").mouseover(function () {});
// $("#btn").focus(function () {});

// // 강제로 이벤트를 발생시키기
// // 사용자에 의해 이벤트가 발생하는 것이 아닌, *핸들러*에 의해서 이벤트를 발생 시킨다

// // 1. $("이벤트 대상").단독 이벤트 등록 메서드();
// // 2. $("이벤트 대상").trigger("이벤트 종류")
// $("$btn").click();
// $("#bth").trigger("click");

// // 이벤트를 제거하는 메서드: off
// // $("이벤트 대상").off("제거할 이벤트의 종류"); // <="이벤트1 이벤트2 이벤트3"
// $("#btn").off("click mouseover focus");

// ----------------------------------------------------------------------------------- //
// 로딩 이벤트
// 유저가 브라우저에서 html 문서를 요청하여 html 문서의 로딩이 완료되는 순간에 발생한다

// ready(): 유조가 사이트를 방문할때 요청한 html 문서(document)의 로딩이 끝난 순간 발생하는 이벤트
// $(document).ready(function () {
//   console.log($("img").height());
// });

// load(): 외붕 연동된 소스(iframe, imjg, video)의 로딩이 끝났을 때
// jQuery 3.0 기중으로 on()을 통해서만 사용 가능하며 단독으로는 사용할 수 없다
// $(window).on("load", function () {
//   console.log($("img").height());
// });

// // 마우스 이벤트
// $("img").click(function () {
//   console.log("쥐를 잡자");
// });

// $("img").dblclick(function () {
//   console.log("찍찍찍");
// });
// // $("img").dblclick(); // 강제 이벤트 발생

// // a 태그나 form 태그의 기본 이벤트를 차단하는 방법
// $("a").click(function (event) {
//   event.preventDefault(); // 기본 이벤트를 차단한다
//   console.log(event);
//   console.log("해당 링크는 사용이 불가능합니다");
// });

// $("button").click(function (event) {
//   event.preventDefault();
//   console.log("제출 버튼이 클릭됨"); // 기본 이벤트 차단 방법 1번째
// });

// $("button").click(function () {
//   console.log("제출 버튼이 클릭되었습니다");
//   return false; // 기본 이벤트 차단 방법 2번째
// });

// // mouseover(), mouseout(), hover() 메서드
// // mouseover(): 선택한 요소에 마우스를 올릴 때마다
// $("a").mouseover(function () {
//   console.log("mouseover() 발생");
// });

// // mouseout(): 선택한 요소에 마우스가 벗어날 때마다
// $("a").mouseout(function () {
//   console.log("mouseout() 발생");
// });

// // mouseover() + mouseout() = hover()
// // hover(): 선택한 요소에서 마우스가 올라가거나 벗어날때 각각
// //         올라갈떄 / 벗어날때 따로 핸들러를 실행시킬 수 있다

// //////////////// mouseover(), mouseout(): 이벤트 버블링이 발생한다
// // 버블링 => 직계 부모요소에서 이벤트가 전달이 되어 내가 target으로 설정한 요소와
// //    실제 이벤트가 발생한 요소가 다를 수 있음(버그 발생 가능성)(그 반대는 캡쳐링이라고 한다)
// // preventDefault 사용 가능
// // $("a").hover(
// //   function () {
// //     console.log("mouseover() 발생시 실행");
// //   },
// //   function () {
// //     console.log("mouseout() 발생시 실행");
// //   }
// // );

// // mouseenter() / mouseleave() 메서드
// // mouseenter(): 대상 요소의 경계 범위에 마우스가 들어올 때
// // mouseleave(): 대상 요소의 경계 범위에서 완전히 빠져나갈때

// // mouseover(), mouseout(): 이벤트 버블링이 발생하지 않는다
// // 내가 설정한 **해당 요소에서만** 이벤트가 발생한다
// // preventDefault 사용 불가능

// $("#box_1").mouseover(() => {
//   console.log("mouseover() 이벤트 발생");
//   $("#box_1").css("background-color", "green");
// });

// $("#box_1").mouseout(() => {
//   console.log("mouseout() 이벤트 발생");
//   $("#box_1").css("background-color", "yellow");
// });

// $("#box_2").mouseenter(() => {
//   console.log("mouseenter() 이벤트 발생");
//   $("#box_2").css("background-color", "violet");
// });

// $("#box_2").mouseleave(() => {
//   console.log("mouseleave() 이벤트 발생");
//   $("#box_2").css("background-color", "salmon");
// });

// mouseup(): 마우스 커서를 뗐을 때
// mousedown(): 마우스 커서를 누를 때
$("h1").mouseup(function () {
  console.log("mouseup() 발생");
});

$("h1").mousedown(function () {
  console.log("mousedown() 발생");
});

// mousemove(): 선택한 요소 안에서 마우스를 움직일 떄 발생

$(document).mousemove(function (event) {
  //   console.log("mousemove() 발생");
  $(".posX").text(event.pageX);
  $(".posY").text(event.pageY);
});

// scroll(): 스크롤 이벤트
// scrollTop(): 스크롤바의 수직위치 반환 (jQuery)
// scrollLeft(): 스크롤바의 수평 위치 반환 (jQuery)
$(window).on("scroll", function () {
  $(".top").text($(this).scrollTop());
  $(".left").text($(this).scrollLeft());
});

// 포커스 이벤트
// 포커스: 마우스로 a / input 태그를 클릭 or Tab 누를 때 생성

// focus(): 대상 요소로 포커스가 이동 시 발생
// blur(): 대상 요소에서 다른 요소로 포커스가 이동시 발생

$("#user_id, #user_pw").on("focus", function () {
  $(this).css("background-color", "salmon");
});

$("#user_id, #user_pw").on("blur", function () {
  $(this).css("background-color", "skyblue");
});

// focusin(): 대상 요소의 하위 요소 중 입력 요소로 포커스가 이동 시
// focusout(): 대상 요소의 하위 요소 중 입력 요소에서 외부 요소로 포커스 이동 시

$("#form1").on("focusin", function () {
  $(this).css("background-color", "salmon");
});

$("#form1").on("focusout", function () {
  $(this).css("background-color", "skyblue");
});

// 키보드 접근성을 고려해서 프론트엔드 코드를 짠다
// 마우스와 키보드 두가지 경우를 고려해서 만든 코드
$("button").on("mouseover focus", function () {});

$("button").on("mouseover blur", function () {});

// change(): 선택한 폼 요소의 value값의 변화를 감지한다
$("select").on("change", function () {
  $(".result").text($(this).val());
});

// 키보드 이벤트
// keydown(): 키보드를 눌렀을 때 (거의 모든 키를 받아옴)
// keyup(): 키보드를 눌렀다 떼는 순간
// keypress(): 키보드를 눌렀을 때 (기능키, F1~F12, ALT, CTRL, Shift 등등의 키에서는 이벤트가 발생하지 않는다)

$("#user_input").keydown(function () {
  console.log($(this), val());
});

// 유저가 방향키를 입력했을 때 해당 방향키 관련 처리
function keyEventhandler(e) {
  let result = "";
  switch (e.keyCode) {
    case 37:
      result = "LEFT";
      break;
    case 38:
      result = "TOP";
      break;
    case 39:
      result = "RIGHT";
      break;
    case 40:
      result = "BOTTOM";
      break;
  }
  console.log(result);
  if (result) $("#user_input").val(result);
  //   return result;
}
$(document).keydown(keyEventhandler);

// 그룹 이벤트 등록 및 삭제
// on(): 2개 이상의 이벤트를 등록
// => 사용 방식에 따라 이벤트를 등록한
//    이후에 동적으로 생성되거나 복제한 요소에도 이벤트가 적용된다

// bind(): 2개 이상의 이벤트를 등록

// delegate(): 선택한 요소의 하위 요소에 이벤트를 등록한다
// => 사용 방식에 따라 이벤트를 등록한
//    이후에 동적으로 생성되거나 복제한 요소에도 이벤트가 적용된다

// one(): 1개 이상의 이벤트를 등록 지정한 이벤트를 1번 발생후 자동 해제한다

// off(): on() 메서드로 등록한 이벤트를 제거한다
// unbind(): bind() 메서드로 등록한 이벤트를 제거한다
// undelegate(): delegate() 메서드로 등록한 이벤트를 제거한다
