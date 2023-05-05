// 이전 풀이
function solution(str1, str2) {
  return str1.includes(str2) ? 1 : 2;
}

// 새 풀이
function solution(str1, str2) {
  return str1.search(str2) >= 0 ? 1 : 2;
}
