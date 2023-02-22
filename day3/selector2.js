// // 탐색 선택자
// // 기본 선택자로 가져온 선택자는 배열에 담겨있다
// // 위치 탐색 선택자: 배열의 인덱스 값을 통해 접근한다

// // first / last 선택자
// $("#menu li:first").css("color", "blue"); // [0]
// $("#menu li:last").css("color", "red"); // [-1] or [배열.length-1]

// // even / odd 선택자
// $("#menu li:even").css("color", "red"); // 짝수, 인덱스는 0부터 시작인걸 주의
// $("#menu li:odd").css("color", "blue"); // 홀수, 인덱스는 0부터 시작인걸 주의

// // nth-child(숫자n) 선택자: 선택한 요소의 무리 중 지정된 숫자의 요소 선택
// $("#menu li:nth-child(2n)").css("color", "black"); // 홀수
// $("#menu li:nth-child(2n+1)").css("color", "white"); // 짝수

// // nth-last-child(숫자) 선택자: 선택한 요소의 무리 중 지정된 숫자의 요소 중에서도 마지막 요소만 선택한다
// $("#menu li:nth-last-child(2)").css("color", "blue");

// // equal = 같다 (eq)
// // less than = 작다 (lt)
// // greater = 더 크다 (gt)

// // eq(index): 선택한 요소 중 지정한 인덱스 요소만
// $("#menu li").ea(2).css("color", "skyblue"); // 아래와 같이 적용된다
// $("#menu li:ea(2)").css("color", "skyblue"); // [2]번쨰 요소

// // lt(index): 선택한 요소 중 지정한 인덱스보다 작은 요소만
// $("#menu li:lt(2)").css("color", "salmon"); // ~[2]번쨰 요소 전까지

// // gt(index): 선택한 요소 중 지정한 인덱스보다 큰 요소만
// $("#menu li:gt(2)").css("color", "violet"); // [2]번쨰 요소 이후~

// // first-of-type / last-of-type: 선택한 요소 중 첫번째 / 마지막 요소만 선택한다
// $("#menu li:first-of-type").css("color", "salmon");
// $("#menu li:last-of-type").css("color", "skyblue");

// // only-child: 부모 욧소애 던 하나뿐인 자식 요소일때만 선택한다
// $("li:only-child").css("border", "1px solid salmon");

// // slice(startIdx, endIdx): 선택한 요소의 구간을 지정한다
// // startIdx는 반드시 포함하여, endIdx는 선택사항이나 대부분 미포함한다
// $("#menu li").slice(1, 3).css("background-color", "salmon");

// /////////////////////// jQuery에서 제공하는 배열 관련 메서드 ///////////////////////

// // 배열에 저장된 데이터만큼 function 반복 실행 (for문 역할)
// // $("요소 선택").each(function)
// // $.each($("요소 선택"), function)

const obj = [
  {
    area: "서울",
    name: "서지텍고학생",
  },
  {
    area: "대전",
    name: "준서",
  },
  {
    area: "부산",
    name: "갈메기",
  },
];

// // 객체가 담겨있는 배열을 순회
// // function(인덱스, 값)
// $(obj).each(function (i, data) {
//   console.log(i + ": ", data);
// });

// // li 태그가 담겨있는 배열을 순회
// $.each($("#menu2 li"), function (i, data) {
//   console.log(i + ": ", data);
// });

// // 매개변수가 1개로 실행하기 위해서 this 키워드를 사용한다
// // 인덱스로 접슨한 데이터 => $(this)
// $.each($("#menu2 li"), function (i) {
//   console.log(i + ": ", $(this));
// });

// $.map(): 배열에 저장된 데이터 수만큼 메서드를 반복 실행
// 메서드에서 >반환된 데이터를 가지고 새로운 배열을 만들어서 반환<

// obj라는 배열에서 area가 "대전"인 요소만 갖는 배열을 생성
// filter 기능과 비슷하지만, 기존 데이터를 응용한 새로운 데이터를 생성할때 좋다
// map함수에 전달하는 콜백함수(데이터, 인덱스) {조건에 맞는 데이터 반환}
const result1 = $.map(obj, function (data, idx) {
  if (data.area == "대전") {
    return data;
  }
});

const result2 = $.map(obj, function (data, idx) {
  if (data.area == "대전") {
    return { ...data, age: 20 };
  }
});

// $.grap(): 배열애 저장된 수만큼 메서드를 반복 실행
// 인덱스 오름차순으로 배열의 데이터를 불러옴

// 메서드의 반환 값이 true면 데이터를 새 배열에 저장해서 새로운 배열을 반환
// filter 기능과 동일하다 (기존 데이터를 필터링할 수만 있고 응용할 순 없다)
const result3 = $.grep(obj, function (data, endIdx) {
  if (data.area == "대전") {
    return false;
  } else {
    return true;
  }
});

// $.inArray(): 배열 안에 데이터가 있는가?
// => 존재한다면 해당 데이터의 인덱스 값
// => 없으면 -1을 리턴 한다
// $.isArray(): 찾고자 하는 데이터가 배열 객체면 true / 아니면 false
// $.merge(targetArr에, subArr): 두 배열을 하나의 객체로 결합
// => targetArr에 subArr요소를 결합해주는 역할

const areas = ["서울", "대전", "부산", "전주"];
const countries = ["한국", "일본", "스페인", "프랑스"];
const tmpObj = { name: "박준서" };

const targetIdx = $.inArray("대전", areas);
console.log($.isArray(areas));

$.merge(areas, countries);

// $("요소").index("찾고자하는 데이터");
const idxNum = $("#menu2 li").index($("#target"));
console.log(idxNum);
