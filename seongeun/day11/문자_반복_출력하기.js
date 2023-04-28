// 이전 풀이
function solution(my_string, n) {
  let answer = my_string
    .split("")
    .map((a) => a.repeat(n))
    .join("");

  return answer;
}

// 새 풀이
function solution(my_string, n) {
  return my_string.replace(/\w/g, (string) => string.repeat(n));
  // /\w/g 문자 전역 탐색,
  // 두 번째 인자 콜백 함수로 매치된 문자열 처리
}
