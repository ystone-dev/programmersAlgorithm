// 이전 풀이
function solution(n) {
  let answer = [];

  for (let i = 0; i <= n; i++) {
    i % 2 ? answer.push(i) : 0;
  }

  return answer;
}

// 새 풀이
function solution(n) {
  return Array.from({ length: Math.ceil(n / 2) }, (_, idx) => 2 * idx + 1);
  // Array.from(유사 배열 객체, 맵핑 함수)
}
