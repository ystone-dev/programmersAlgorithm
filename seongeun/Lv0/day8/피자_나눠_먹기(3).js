// 이전 풀이
function solution(slice, n) {
  return Math.ceil(n / slice);
}

// 새 풀이
function solution(slice, n) {
  let answer = 0;
  for (let i = 0; i < n; i += slice) {
    answer++;
  }
  return answer;
}
