// 이전 풀이
function solution(my_string) {
  return my_string
    .split("")
    .map((v) => (v.codePointAt(0) >= 97 ? v.toUpperCase() : v.toLowerCase()))
    .join("");
}
// 유니코드 포인트: A~Z : 65~90, a~z : 97~122

// 새 풀이
function solution(my_string) {
  return my_string.replace(/./g, (cur) =>
    cur === cur.toLowerCase() ? cur.toUpperCase() : cur.toLowerCase()
  );
}
