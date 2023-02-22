// 직접 선택자
// 전체(*), 아이디(#), 클래스(.), 요소명, 그룹(,) 선택자

// 전체
// $("*").css("border", "1px solid black");

// 아이디
// 체이닝 기법: 선택한 요소에 대해 메서드를 연속해서 사용하는 기법이며 "."을 이용해서 함수를 이어나가고 ";"으로 끝낸다
// $("#title").css("background-color", "red").css("color", "white");

// 클래스
// jQuery는 해당되는 요소를 전부 포함한다
// $(".greet").css("color", "red");

// 요소명 (Tag 이름)
// $("h2").css("color", "blue");

// 그룹 (,)
// $("h2", "h1").css("color", "blue");

// 종속 선택자: 선택한 요소의 id/class 값이 일치하는 요소
// "Tag.class" / "Tag#id", (띄어쓰기를 하연 하위 선택자가 되므로 주의)
// $("h2.greet").css("color", "purple");

// 인접 관계 선택자
