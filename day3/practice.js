// // 객체 조작

// // 1. 객체 편집: 생성, 복제, 삭제, 변경, 추가

// // $("요소선택").html()
// // 선택한 요소의 하위 요소를 가져와 문자열로 반환하거나 모두 제거하고 새로운 값으로 바꿀때 사용한다
// console.log($("#section_1").html());
// $("#section_1").html("<h3>이제 20분 남았습니다</h3>");

// // $("요소 선택").text()
// // 선택한 요소에 포함되어 있는 전체 텍스틀 가져옴
// console.log($("#section_1").text());
// $("#section_1").text("<p>18분 남았습니다</p>");

// $("요소선택").attr("속성명"): 선택 요소의 속성 값을 가져온다
console.log($("img").attr("src"));

const newImgSrc =
  "data:image/jpeg;base64,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";

// $("요소선택").attr("속성명", "새 값"): 선택 요소의 속성 값을 교체한다
$("img").attr("src", newImgSrc);

// $("요소선택").removeAttr("속성명"): 선택 요소의 지정 속성 제거한다
$("img").removeAttr("alt");

// $("요소선택").addClass("class이름"): 지정한 클래스 값 생성
// $("요소선택").removeClass("class이름"): 지정한 클래스 값 삭재
// $("요소선택").toggleClass("class이름"): 있으면 삭제, 없으면 생성
// $("요소선택").addClass("class이름"): 클래스값이 있으면 true, 없으면 false

$("#p1").addClass("salmon");
$("#p2").removeClass("salmon");
$("#p4").toggleClass("green");

console.log($("#p5").hasClass("inActive"));

// val(): from 요소의 value 속성값을 가져올떄
// val("새값"): from 요소의 value 속성값을 업데이트

console.log($("input").val());
$("input").val("마지막 30분만 열심히 합시다");

// value 속성의 기본값을 알려주는 prop("defaultValue")
console.log($("input").prop("defaultValue"));

// prop(): from 요소(select, checkbox, radio)의 상태 속성값을 가져올 떄
// prop("checked", true): from 요소의 상태 속성값을 업데이트할 때

$("input").prop("checked"); // => 만약 체크된 상태라면 true를 반환하고 아니면 false를 반환한다
$("input").prop("checked", true); // => 체크 상태를 true로 한다(체크로 한다)
$("input").prop("defaultValue"); // => 요소의 초기 value 속성 값
$("input").prop("selectedIndex"); // => selected된 요소의 인덱스 값 반환
$("input").prop("tagName"); // => 태그 이름
$("input").prop("nodeType"); // => 노드 타입

// 요소의 속성을 조작할 때 사용
// CSS box-model 했던 부분을 떠올려봅시다
// $("요소선택").height() // padding, border를 제외한 높이를 반환
// $("요소선택").height(100) // 높이를 재설정
// $("요소선택").width() // padding, border를 제외한 넓이를 반환
// $("요소선택").width(100) // 넓이를 재설정

// $("요소선택").innerHeight() // padding을 포함한 높이를 반환
// $("요소선택").innerHeight(100) // 높이 재설정
// $("요소선택").innderWidth() // padding을 포함한 넓이를 반환
// $("요소선택").innderWidth(100) // 넓이 재설정

// $("요소선택").outerHeight() // padding, border를 포함한 높이를 반환
// $("요소선택").outerHeight(100) // 높이 재설정
// $("요소선택").outerWidth() // padding, border를 포함한 넓이를 반환
// $("요소선택").outerWidth(100) // 넓이 재설정

//------------------------------------------------
// 절댓값
// $("요소선택").position().left() // 선택한 요소의 위치 값을 반환
// $("요소선택").position().right()
// $("요소선택").position().top()
// $("요소선택").position().bottom()

// offset : 선택한 요소가 문서에서 수직/수평으로 얼마나 떨어져 있는지!
// 상댓값
// $("요소선택").offset().left()
// $("요소선택").offset().right()
// $("요소선택").offset().top()
// $("요소선택").offset().bottom()

//-------------------------------------------------
// $("요소선택").scrollLeft() // 브라우저의 수평 스크롤 이동 높잇값 반환
// $("요소선택").scrollTop() // 브라우저의 수직 스크롤 이동 높잇값 반환
