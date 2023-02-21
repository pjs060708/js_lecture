// // 문자열 String: 문자형 데이터를 객체로 취급

// // 문자열 객체 생성
// let str1 = "hello";
// str1 = new String("hello");

// console.log(str1.charAt(1)); // 인덱스 번호에 해당하는 문자 반환
// console.log(str1[1]); // 마치 배열처럼 처리 가능

// // 문자열에서 왼쪽부터 일치하는 문자를 찾아 제일 먼저 일치하는 문자의 인덱스 번호
// // 없으면 -1을 반환
// console.log(str1.indexOf("world"));

// // 오른쪽에서부터 일치하는 문자를 찾는다
// console.log(str1.lastIndexOf("world"));

// // 문자열에서 왼쪽으로 일치하는 문자를 찾아 제일 먼저 찾은 문자를 반환
// // 없으면 null 반환
// console.log(str1.match("world"));

// // 왼쪽부터 원하는 문자를 찾아, 제일 먼저 찾은 문자를 치환
// // 원본을 건드리지 않고 새로운 문자열 반환
// console.log(str1.replace("world", "javascript"));

// // indexOf(): 문자열과 일치하는 데이터
// // search(): 문자열, 정규 표현식(문자 패턴)과 일치하는 데이터
// // 특정 문자를 포함아는 여부 체크 => (ex. 비밀번호에 허용되는 특수문자 시리즈)
// console.log(str1.search("world"));

// // slice(a[, b]): a개의 문자를 자르고, b번쨰 이후의 문자를 자른후 남은 문자를 반환
// // 원본을 건드리지 않고 새로운 문자를 반환
// // -1은 뒤에서부터 첫번째 글자
// const str = "The quick brown fox jumps over the lazy dog.";

// console.log(str.slice(31)); // "the lazy dog."
// console.log(str.slice(4, 19)); // "quick brown fox"
// console.log(str.slice(-4)); // "dog."
// console.log(str.slice(-9, -5)); // "lazy"

// // substring(a[, b]): 문자열에서 a~b까지를 반환 (b번째 인덱스는 포함되지 않음)
// // substring 역시 원본을 건드리지 않고 새로운 문자열로 반환한다
// // 만약 b를 입력하지 않는 경우, 끝까지
// console.log(str.substring(4, 9));

// // 구분되는 문자를 기준으로 문자 데이터를 쪼개서 새로운 배열에 저장 후 반환
// // split 역시 원본은 건드리지 않고, 새로운 배열을 반환한다
// const result = str.split(" ");
// console.log(result);

// // 문자열 => 전부 대문자
// // 원본 건드리지 않고 새로운 문자열을 반환한다
// console.log(str1.toUpperCase());

// // 문자열 => 잔부 소문자
// // 원본 건드리지 않고 새로운 문자열을 반환한다
// console.log(str1.toLowerCase());

// // 글자 수 속성(필드)
// console.log(str1.length);

// console.log(str1.concat(" 2023!"));
// console.log(str1 + " 2023");

// // trim(): 문자열의 앞이나 뒤에 오는 공백을 제거하는 기능
// // trimStart(): 왼쪽 공백만 제거
// // trimEnd(): 오른쪽 공백만 제거
// const str2 = "         hello           ";
// console.log(str2.trim());

// // 2. 브라우저 객체 모델 (BOM)
// // window: 가장 최상위 객체
// // document, screen, location, history, navigator ....

// // // ULR로 전달받은 페이지를 새 창에 표시해준다
// // window.open(
// //   "http://www.naver.com",
// //   "naver",
// //   "width=500, heigth=500, left=50, top=50, scrollbars=no"
// // );
// // alert(): 메세지를 표시하는 경고창, 확인을 눌러애 다음 코드 진행
// // alert("로그인을 먼저 해주세요.");

// // prompt("전달할 메세지"[, "기본값"]) => 문자열 데이터 반환
// // const userTnput = prompt("여러분의 이름은?", "이름을 입력");

// // confirm("전달할 메세지") => boolean 데이터 반환
// // const userConfirm = confirm("둘중에 하나만 골라 yes or yes");

// // setInterval(함수, 시간): 계속해서 일정 시간 간격으로 함수를 호출
// // setTimeout(함수, 시간): 단 한번 일정 시간이 흐른 후 함수를 호출
// function sayHello() {
//   console.log("넌 못 지나간다");
// }

// // 전달하는 요소는 함수의 이름(괄호를 붙아면 한번만 발동된다)
// const sayHelloOneSec = setInterval(sayHello, 1000);

// // clear~를 통해서 함수 제거 가능
// clearInterval(sayHelloOneSec);

// // screen: 시ㅏ용자의 모니터 정보(pc, 핸드폰, 태블릿)
// console.log(screen.width);
// console.log(screen.height);

// // location: 브라우저와 관련된 현제 URL에 대한 정보, 새로고침 메서드 제공
// console.log(location.href); // 현재 접속 중인 URL
// console.log(location.host); // 호스트(서버주소) & 포트번호 반환
// // location.reload(); // 이렇게만 쓰면 무한 새로고침이 된다

// // location.href 지정하여 화면 이동 가능
// // location.href = "http://www.naver.com";

// // history: 사용자가 방문한 사이트의 기록, 이전 방문, 다음 방문 한번씩 제어 가능
// // history.hlength: 방문 기록에 저장된 목록 개수
// history.back(); // 이전 방문 사이트로 이동 (만약 없다면 이동을 안한다)
// history.forward(); // 다음 방문 사이트로 이동 (만약 없다면 이동을 안한다)

// // navigator: 현재 사용자가 사용하는 브라우저의 정보, 운영체제의 정보를 가져올 수 있다
// navigator.language; // 현재 유저의 사용 언어를 가져온다
// console.log(navigator.onLine); // 유저의 온라인 여부를 실시간으로 반환한다(boolean)

// 3. 문서 객체 모델(DOM): html문서 구조 => jQuery에서 진행할 것이다

// 함수: js 코드의 묶음, function 키워드를 사용하거나, arrow 함수 형태
// 데이터를 전달받아 사용할 수 있으며, 실행 결과를 반환할 수도 있다

// 호이스팅(hoisting): "물건을 끌어올린다" 사전적 정의
// 함수를 정의하기 전에, 먼저 호출해도 문제는 없다
sayHi1();
// sayHi2();
// sayHi3();

// 1. 함수 정의 방법
function sayHi1() {
  console.log("Hi1");
}

// 2. 익명 함수
var sayHi2 = function () {
  console.log("Hi~2");
};

// 3. 화살표 함수
// 편리하나 arguments 객체를 생성하지 못한다
const sayHi3 = () => {
  console.log("Hi~~3");
};

// 4. Function 생성자 // 좋지 않다.알고는 있되 쓰지 말자
// const sayHi4 = new Function("name", 'console.log("Hi~~~4")');

// 매개변수: 함수를 실행하기 위해 필요한 값을 함수 외부에서 내부로 전달하기 위해 사용

//  매개변수 parameter => 함수를 정의할 때 선언, 함수 내부에서 변수처럼 사용
//  인수 arguments => 함수를 호출할 때 지정, 개수, 타입에 제한을 받지않는다.

// 함수 선언문
function add(x, y) {
  console.log(x, y); // 전달받은 값이 없다면 undefined, 있으면 그 값으로
  // undefined를 받지않으려면 ↓
  x = x || 0;
  y = y || 0;
  // 인수가 과할시 저장되는 객체 ↓
  //   console.log(arguments);
  return x + y;
}

// 함수 호출
// console.log(add(1, 2));

// JS에서의 함수 => 매개변수의 개수 체크와 인수의 개수를 체크 하지않는다

// 인수가 부족할 경우 => 함수 내부에서는 부족한 데이터를 undefined로 처리한다
// console.log(add(1, 2));

// 매개변수의 기본 값을 사용
// 기본값: 매개변수에 인수 전달이 되지 않을때나 undefined일때만 적용
function add2(x = 0, y = 0) {
  console.log(x, y); // 전달받은 값이 없다면 undefined, 있으면 그 값으로
  //   console.log(arguments);
  return x + y;
}

// 매개변수는 최대 세개를 넘지 않는것이 좋으며 만약 넘어간다면 객체를 이용하여서 전달하는것이 좋다
const student = {
  name: "Jun Seo",
  age: 18,
  height: 170,
  score: 100,
};

function printStudent(student) {
  student.name = "Pank Jun Seo";
  console.log(student.name);
}
printStudent(student);

// 인수가 과하면 => 무시(버리지 않고, arguments 객체에 저장한다)
// console.log(add(1, 2, 3));

// 화살표 함수 조금 더 자세히 - Rest
const multply = (x, y) => x * y;

// 만약 매개변수가 1개인 경우, 괄호 생략 가능
// 함수의 몸체가 1줄인 경우, {} 생략 가능
const func1 = (x) => console.log(x);

// 만약 매개변수가 없으면, 괄호 반드시 적어줘야 함
const func2 = () => {};

// const errorFunc3 = (id, pw) => {id, pw};

const func3 = (id, pw) => ({
  id,
  pw,
});
console.log(func3("js", "1111"));

// 화살표 함수 vs 일반 함수
// 1. 중복된 매개변수 이름 선언 여부
function f1(a, a) {
  return a + a;
}

// 화살표 함수는 중복된 매개변수 이름을 허용하지 않는다
// const arrowF1 = (a, a) => a + a;

// 화살표 함수는 this, arguments, super을 사용하지 못한다
// this: 자기 자신(객체 본인)
// super: 부모(객체가 상속받는 부모 객체)

// arguments를 사용할 수 없다? => 가변 인자가 불가능? => XXXX
// 화살표 함수: <Rest 파라미터> 방식을 사용
// Rest 파라미터: 함수에 전달된 인수들을 "배열"로 전달받는 방법
// rest는 반드시 마지막 요소임 단 1개만 사용 가능하다
function f2(...params) {
  //   console.log(params);
  return params.filter((date) => date >= 5);
}
console.log(f2(1, 2, 3, 4, 5, 6, 7));

// spread 문법 => "..."
// 하나로 뭉쳐져 있는 여러 값의 집합을 펼쳐서 개뱔적인 값의 목록으로 만든다
// spread 사용 가능한 대상: Array, String, DOM 컬렉션, arguments 등등등
// for...of 반복문이 사용 가능한, 순회할 수 있는 이터러블에서 사용 가능하다

console.log(...[1, 2, 3]);
console.log(..."goodbye");
// console.log(...{ name: "js", age: 18 }); // 객체는 for...of 반복문이 불가능하다

// 스프레드 문법의 결과는 값이 아니기 때문에 아래 코드는 오류가 난다
// const list = ...[1, 2, 3];

// 1. 함수 호출 시 인수에서 사용하는 경우
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Math.max(numbers)); // 숫자가 아닌 값이 넘어와서 판단되지 않는다
console.log(Math.max(...numbers));

// 2. 배열 내부에서 사용하는 경우
// concat 대신
console.log([1, 2].concat([3, 4])); // 예전 방식
const arr = [...[1, 2], ...[3, 4]]; // 현재 방식
console.log(arr);

// splice를 더 좋게 사용하기
// splice: 어떤 배열의 중간에 다른 배열의 요소를 추가하거나 제거하기 위해 사용
const arr1 = [1, 4];
const arr2 = [2, 3];

// [1, 2, 3, 4]를 만들기
arr1.splice(1, 0, arr2); // [1, [2, 3],4]
arr1.splice(1, 0, ...arr2); // [1, 2, 3, 4]

// 배열의 복사를 위해 slice를 사용했음
// 동일한 값을 갖는, 완전히 새로운 배열을 생성하는 것
const origin = [10, 20];
const copy = origin.slice(); // 과거의 배열 복사

const tremdCopy = [...origin]; // 현재의 배열 복사

// 객체 내부에서 사용하는 경우
const obj1 = { x: 1, y: 2 };
const copyObj1 = { ...obj1 };

const merged = { x: 1, y: 2, ...{ a: 3, b: 4 } };
