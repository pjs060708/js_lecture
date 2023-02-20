document.write("js를 시작했어요!");

// 1. js 대소문자 구분
// 날짜 객체
new Date();
// New date(); <= 컴파일 에러

// 2. 코드 한 줄 작성 후 세미콜론
document.write("h1");
document.write("bye");

// 3. 큰 따옴표 작은 따옴표 겹침 주의
// 백슬래쉬를 쓰거나 작은 따옴표를 사용
// document.write("선생님께서 \"필기를 해\" 라고 하셨다");
// document.write('선생님께서 "필기를 해" 라고 하셨다');

// 변수 선언
var age1 = 18; // 이제는 사용하지 않는다.

// es6(ECMA2015)
// 변수 => 재할당(수정) 가능/불가능
// constant: 상수 => 수정 불가능한 데이터(생성과 동시에 할당)
const age2 = 18;
// age2 = 23; (에러 발생)

// let: 수정 및 재할당이 자유로움
let age3 = 18;
age3 = "20살부터 성인";
console.log(age3); // 브라우저의 cinsole 영역에 문자열 출력

// js에서 사용하는 자료형

// 1. 문자형
let firstName = "박";

// 문자열 데이터에 html 태그를 포함하여 출력 시 태그로 인식
let lastName = "<h1>준서</h1>";

// 2. 숫자형 => Number
// 문자열이 적혀있지 않으면 자동으로 숫자형으로 저장한다.
let age4 = 18;
// 문자열 데이터(숫자만 있는) => Number 지료형으로 변환
let age5 = Number("18");

// 문자열 데이터(숫자만 있는) => Number 지료형으로 강제 변환 => Not a Number(NaN)으로 변환
let age6 = Number("18살");

// 3. 논리형
let isLogined = true;
isLogined = false;

let check = Boolean(""); // truthy, falsy 의 개념이 존재한다
// 왠만해서는 값이 들어있다 => true 형변환
// null, 0, undefined, "", NaN, ... => false 형변환

// 4. 비어있는 데이터 (null, undefined)
let tmp; // undefined: 변수에 값을 등록하기 전 상태 (의도 X)
let tmp2 = null; // null: 변수에 저장된 데이터를 비울 떄 (의도 O)

// 자료형을 알아낼 떄 => typeof
// string, number, boolean, undefined => typeof 출력시 본인 자료형 그댜로
// ! typeof NaN => Number
// ! typeof null => object(객체) (null이라는 이름의 자료형X)

// 변수 선언 시 주의 사항
let $num1, _num2, num3;
