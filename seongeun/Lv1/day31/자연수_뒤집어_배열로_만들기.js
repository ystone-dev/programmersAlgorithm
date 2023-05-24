// 이전 풀이
function solution(n) {
  return n
    .toString()
    .split("")
    .reverse()
    .map((v) => +v);
}

// 새 풀이
function solution(n) {
  const str = String(n);
  const answer = [];

  for (let i = str.length - 1; i >= 0; i--) {
    answer.push(+str[i]);
  }

  return answer;
}
