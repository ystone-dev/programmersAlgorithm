// 이전 풀이
function solution(num, k) {
  return num.toString().includes(k) ? num.toString().indexOf(k) + 1 : -1;
}

// 새 풀이
function solution(num, k) {
  return String(num).indexOf(k) + 1 || -1;
}
