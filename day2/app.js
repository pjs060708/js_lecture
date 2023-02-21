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
// window: 가장 최상위 객체
// document, screen, location, history, navigator ....

// // ULR로 전달받은 페이지를 새 창에 표시해준다
// window.open(
//   "http://www.naver.com",
//   "naver",
//   "width=500, heigth=500, left=50, top=50, scrollbars=no"
// );
// alert(): 메세지를 표시하는 경고창, 확인을 눌러애 다음 코드 진행
// alert("로그인을 먼저 해주세요.");

// prompt("전달할 메세지"[, "기본값"]) => 문자열 데이터 반환
// const userTnput = prompt("여러분의 이름은?", "이름을 입력");

// confirm("전달할 메세지") => boolean 데이터 반환
// const userConfirm = confirm("둘중에 하나만 골라 yes or yes");

// setInterval(함수, 시간): 계속해서 일정 시간 간격으로 함수를 호출
// setTimeout(함수, 시간): 단 한번 일정 시간이 흐른 후 함수를 호출
function sayHello() {
  console.log("넌 못 지나간다");
}

// 전달하는 요소는 함수의 이름(괄호를 붙아면 한번만 발동된다)
const sayHelloOneSec = setInterval(sayHello, 1000);

// clear~를 통해서 함수 제거 가능
clearInterval(sayHelloOneSec);

// screen: 시ㅏ용자의 모니터 정보(pc, 핸드폰, 태블릿)
console.log(screen.width);
console.log(screen.height);

// location: 브라우저와 관련된 현제 URL에 대한 정보, 새로고침 메서드 제공
console.log(location.href); // 현재 접속 중인 URL
console.log(location.host); // 호스트(서버주소) & 포트번호 반환
// location.reload(); // 이렇게만 쓰면 무한 새로고침이 된다

// location.href 지정하여 화면 이동 가능
// location.href = "http://www.naver.com";

// history: 사용자가 방문한 사이트의 기록, 이전 방문, 다음 방문 한번씩 제어 가능
// history.hlength: 방문 기록에 저장된 목록 개수
history.back(); // 이전 방문 사이트로 이동 (만약 없다면 이동을 안한다)
history.forward(); // 다음 방문 사이트로 이동 (만약 없다면 이동을 안한다)

// navigator: 현재 사용자가 사용하는 브라우저의 정보, 운영체제의 정보를 가져올 수 있다
navigator.language; // 현재 유저의 사용 언어를 가져온다
console.log(navigator.onLine); // 유저의 온라인 여부를 실시간으로 반환한다(boolean)

// 3. 문서 객체 모델(DOM): html문서 구조 => jQuery로 처리
