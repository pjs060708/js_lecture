// document.write("js를 시작했어요!");

// // 1. js 대소문자 구분
// // 날짜 객체
// new Date();
// // New date(); <= 컴파일 에러

// // 2. 코드 한 줄 작성 후 세미콜론
// document.write("h1");
// document.write("bye");

// // 3. 큰 따옴표 작은 따옴표 겹침 주의
// // 백슬래쉬를 쓰거나 작은 따옴표를 사용
// // document.write("선생님께서 \"필기를 해\" 라고 하셨다");
// // document.write('선생님께서 "필기를 해" 라고 하셨다');

// // 변수 선언
// var age1 = 18; // 이제는 사용하지 않는다.

// // es6(ECMA2015)
// // 변수 => 재할당(수정) 가능/불가능
// // constant: 상수 => 수정 불가능한 데이터(생성과 동시에 할당)
// const age2 = 18;
// // age2 = 23; (에러 발생)

// // let: 수정 및 재할당이 자유로움
// let age3 = 18;
// age3 = "20살부터 성인";
// console.log(age3); // 브라우저의 cinsole 영역에 문자열 출력

// // js에서 사용하는 자료형

// // 1. 문자형
// let firstName = "박";

// // 문자열 데이터에 html 태그를 포함하여 출력 시 태그로 인식
// let lastName = "<h1>준서</h1>";

// // 2. 숫자형 => Number
// // 문자열이 적혀있지 않으면 자동으로 숫자형으로 저장한다.
// let age4 = 18;
// // 문자열 데이터(숫자만 있는) => Number 지료형으로 변환
// let age5 = Number("18");

// // 문자열 데이터(숫자만 있는) => Number 지료형으로 강제 변환 => Not a Number(NaN)으로 변환
// let age6 = Number("18살");

// // 3. 논리형
// let isLogined = true;
// isLogined = false;

// let check = Boolean(""); // truthy, falsy 의 개념이 존재한다
// // 왠만해서는 값이 들어있다 => true 형변환
// // null, 0, undefined, "", NaN, ... => false 형변환

// // 4. 비어있는 데이터 (null, undefined)
// let tmp; // undefined: 변수에 값을 등록하기 전 상태 (의도 X)
// let tmp2 = null; // null: 변수에 저장된 데이터를 비울 떄 (의도 O)

// // 자료형을 알아낼 떄 => typeof
// // string, number, boolean, undefined => typeof 출력시 본인 자료형 그댜로
// // ! typeof NaN => Number
// // ! typeof null => object(객체) (null이라는 이름의 자료형X)

// // 변수 선언 시 주의 사항
// let $num1, _num2, num3;

// // 연산자
// // 산술 연산자: +, -, *, /, %

// console.log(3 + "3"); // 연산자: 하나라도 문자열이 등장 시 문자열 결합으로 작동

// // 대입 연산자: =, +=, -=, *=, /=, %=
// let test = 2;
// test += 2;
// console.log(test);

// // 증감 연산자: ++, --
// test = 1;
// console.log(test++); // 후위 증감, console.log() 실행 후 값이 증가

// test = 1;
// console.log(++test); // 전위 증감, console.log() 실행 전 값이 증가

// // 비교 연산자: >, <, >=, <=, ==, !=, ===, !==
// // == 보다는 ===이 정확하다
// console.log(3 == "3"); // true/ 숫자를 비교할 경우, 표기된 숫자만 일치하면 true 반환
// console.log(3 === "3"); // false/ 숫자를 비교할 경우, 표기된 숫자 & 자료형까지 일치하면 true 반환

// // 논리 연산자: &&(and), ||(or), !(not)
// // &&: 하나라도 false가 존재하면 false를 반환
// // ||: 하나라도 true가 존재하면 true
// // !: 반대값을 반환
// test = 1;
// // && 나 || 연산자의 평가 결과는 반드시 불리언 값이 아닐 수도 있다.

// // 첫번쨰 피연산자 "dog"의 경우, Truthy 값 => true 평가
// // 두번째 피연산자가 && 연산자 표현식의 평가 결과를 결정
// // 이때의 && 연산자는 논리 연산 결과를 결정하는 두번째 피연산자, "cat"을 그대로 반환
// // (&&, || 둘다 논리 연산의 결과를 결정하는 피연산자의 타입을 변환하지 않고 그대로 반환)
// console.log("dog" && "cat"); // 단축평가 => "cat"

// // 단축 평가: 표현식을 평가하는 도중에 평가 결과가 확정된 경우, 나머지 평가 과정을 생략
// console.log(false || "미완료");

// // 연산자 우선순위
// // 1. ()
// // 2. ++, --, ! (단항 연산자)
// // 3. 산술
// // 4. 비교
// // 5. 논리
// // 6. 대입
// console.log(3 + 4 * 2);

// // 삼항 조건 연산자
// // 조건식 ? 조건식이 참일때 사용할 결과값 : 거잣일떄 사용할 결과값
// test = 1;
// console.log(test > 1 ? "맞습니다" : "거짓입니다");

// // 제어문: 프로그램의 흐름을 제어
// // 조건을 만족하는 여부에 따라 흐름을 제어하는 조건문: if - else if - else
// // 변수에 일피하는 경우에 따라 코드를 제어하는 선택문: switch
// // 특정 코드를 여러번 반복하서 실행할 수 있는 반복문: for, while, do while

// // 조건문
// if (1 > 3) {
//   // 실행문
// } else if (1 > 2) {
//   // 실행문
// } else if (1 > 1) {
//   // 실행문
// } else {
//   // 실행문
// }

// // 조건식 부분에 true/false가 아닌 요소가 오더리도, truthy/falsy에 따라 처리함
// if ("월요일") {
//   if (true) {
//     console.log("오늘 하루도 얼마 안 남았다.");
//   }
// } else {
//   console.log("falsy한 친구들");
// }

// // 선택문 (switch)
// let flag = 1;

// switch (flag) {
//   case 1:
//     console.log("첫번째 조건");
//     break; // 반복문을 탈출하고 싶을 때
//   case "naver":
//     console.log("두번쨰 조건");
//     break;
//   default:
//     console.log("기본값");
// }

// // 반복문
// // while: 조건식을 만족할 때까지 계속 반복
// flag = 1;
// while (flag < 5) {
//   console.log(flag);
//   flag++;
// }

// // do while: 반드시 한번은 코드를 실행하고 조건식을 검사
// do {
//   console.log(flag);
//   flag++;
// } while (flag < 5);
// // for문: 조건식을 만족할 때까지 계속 반복
// // for(초기값; 조건식; 증감식){  }
// for (let i = 0; i < 10; i++) {
//   if (i % 2 != 0) {
//     continue; // continue: 뒤의 코드 무시, 바로 조건식으로 이동
//   }
//   console.log(i);
// }

// // 객체
// // smartphone.turnOn();
// // console.log(smartphone.company);

// // 자바스크립트의 객체 종류
// // 1. 내장 객체 => String, Date, Array, Math
// // 가장 기본 객체 생성
// const sample = new Object();

// // 날짜 정보 객체
// const date = new Date();
// // gat~~~: 날짜 정보를 가져올 때
// console.log(date.getDay()); // 요일 정보: 0(일요일)~6(토요일)
// console.log(date.getMonth()); // 월 정보: (현재 월-1)
// console.log(date.getTime()); // 1970.1.1~지금까지 경과한 시간
// // set~~~: 날짜 정보를 수정할 때

// // 오늘부터 연말까지 며칠이 남았을까?를 자바스크립트로 계산
// const lastDay = new Date(2023, 11, 31); // 2023/12/31
// let diff = lastDay.getTime() - date.getTime();
// // 1초 = 1000ms, 1분 = 60초, 1시간 = 60분, 1일 = 24시간
// // 1000*60*60*24
// diff = Math.ceil(diff / (1000 * 60 * 60 * 24));
// document.write("<h3>연말까지 " + diff + "일이 남았습니다.</h3>");

// // 수학 객체: Math
// Math.abs(); // 절댓값
// Math.max(2, 3, 4, 5, 6, 199); // 넘겨받은 숫자 중 가장 큰 값
// Math.min(1, 2, 3, 4, 5, 6); // 넘겨받은 숫자 중 가장 작은 값
// Math.pow(2, 4); // 2^4 (숫자, 제곱값)
// Math.random(); // 0~1사이의 난수

// Math.PI;
// Math.sqrt(4); // 제곱근값

// Math.ceil(); // 소숫점 첫번째 자리에서 올림
// Math.round(); // 소숫점 첫번째 자리에서 반올림
// Math.floor(); // 소숫점 첫번째 자리에서 내림

// // 0~10까지의 난수
// console.log(Math.random() * 10);

// // 0~10까지의 정수 난수
// console.log(Math.floor(Math.random() * 11));

// // 120~150사이의 정수 난수
// console.log(Math.floor(Math.random() * 31) + 120);

// // 배열: 여러개의 데이터를 묶어서 저장하고자 할 때
// // 방식 1.
// const arr = new Array();
// arr[0] = 1;
// arr[1] = 2;

// // 방식 2.
// const arr2 = new Array(1, 2);

// // 방식 3.
// const arr3 = [1, 2];

// // Array에서 제공하는 메서드 및 속성
// // join(연결문자): 배열 데이터를 문자 기준으로 이어붙여서 반환
// console.log(arr.join("/"));

// arr.reverse();
// arr.sort();

// let startIdx = 0;
// let endIdx = 1;
// console.log(arr.slice(startIdx, endIdx)); // 첫번째인자~마지막인자 전까지

// arr.concat(arr2); // 배열 2개를 하나로 결합
// arr.pop(); // 마지막 인덱스의 데이터를 반환 후 삭제
// arr.push(3); // 마지막 인덱스에 새로운 데이터 추가

// arr.shift(); // 첫번째 인덱스의 데이터를 반환 후 삭제
// arr.unshift(3); // 첫번째 인덱스에 새로운 데이터 추가

// arr.length; // 배열의 길이 값
// // arr.length=10; // => 배열의 길이를 10칸으로 늘려버림 (empty칸)

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 문자열 String: 문자형 데이터를 객체로 취급

// 문자열 객체 생성
let str1 = "hello";
str1 = new String("hello");

console.log(str1.charAt(1)); // 인덱스 번호에 해당하는 문자 반환
console.log(str1[1]); // 마치 배열처럼 처리 가능

// 문자열에서 왼쪽부터 일치하는 문자를 찾아 제일 먼저 일치하는 문자의 인덱스 번호
// 없으면 -1을 반환
console.log(str1.indexOf("world"));

// 오른쪽에서부터 일치하는 문자를 찾는다
console.log(str1.lastIndexOf("world"));

// 문자열에서 왼쪽으로 일치하는 문자를 찾아 제일 먼저 찾은 문자를 반환
// 없으면 null 반환
console.log(str1.match("world"));

// 왼쪽부터 원하는 문자를 찾아, 제일 먼저 찾은 문자를 치환
// 원본을 건드리지 않고 새로운 문자열 반환
console.log(str1.replace("world", "javascript"));

// indexOf(): 문자열과 일치하는 데이터
// search(): 문자열, 정규 표현식(문자 패턴)과 일치하는 데이터
// 특정 문자를 포함아는 여부 체크 => (ex. 비밀번호에 허용되는 특수문자 시리즈)
console.log(str1.search("world"));

// slice(a[, b]): a개의 문자를 자르고, b번쨰 이후의 문자를 자른후 남은 문자를 반환
// 원본을 건드리지 않고 새로운 문자를 반환
// -1은 뒤에서부터 첫번째 글자
const str = "The quick brown fox jumps over the lazy dog.";

console.log(str.slice(31)); // "the lazy dog."
console.log(str.slice(4, 19)); // "quick brown fox"
console.log(str.slice(-4)); // "dog."
console.log(str.slice(-9, -5)); // "lazy"

// substring(a[, b]): 문자열에서 a~b까지를 반환 (b번째 인덱스는 포함되지 않음)
// substring 역시 원본을 건드리지 않고 새로운 문자열로 반환한다
// 만약 b를 입력하지 않는 경우, 끝까지
console.log(str.substring(4, 9));

// 구분되는 문자를 기준으로 문자 데이터를 쪼개서 새로운 배열에 저장 후 반환
// split 역시 원본은 건드리지 않고, 새로운 배열을 반환한다
const result = str.split(" ");
console.log(result);

// 문자열 => 전부 대문자
// 원본 건드리지 않고 새로운 문자열을 반환한다
console.log(str1.toUpperCase());

// 문자열 => 잔부 소문자
// 원본 건드리지 않고 새로운 문자열을 반환한다
console.log(str1.toLowerCase());

// 글자 수 속성(필드)
console.log(str1.length);

console.log(str1.concat(" 2023!"));
console.log(str1 + " 2023");

// trim(): 문자열의 앞이나 뒤에 오는 공백을 제거하는 기능
// trimStart(): 왼쪽 공백만 제거
// trimEnd(): 오른쪽 공백만 제거
const str2 = "         hello           ";
console.log(str2.trim());

// 2. 브라우저 객체 모델 (BOM)
// window, screen, location, history, navigator ....
// window.location.href = "https://naver.com";

// 3. 문서 객체 모델(DOM): html문서 구조
