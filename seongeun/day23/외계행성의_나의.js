// 이전 풀이
function solution(age) {
  return String(age)
    .split("")
    .map((v) => String.fromCodePoint(+v + 97))
    .join("");
}

// 새 풀이
function solution(age) {
  return age.toString().replace(/./g, (match) => "abcdefghijk"[match]);
  // replace의 두 번째 인자 function 매개변수
  // ( 매치된 문자열, 문자열의 인덱스, 전체 문자열 )
}
