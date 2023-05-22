// 이전 풀이
function solution(s1, s2) {
  let acc = 0;
  s1.forEach((item) => s2.forEach((item2) => (item === item2 ? acc++ : acc)));
  return acc;
}

// 새 풀이
function solution(s1, s2) {
  return s1.length + s2.length - new Set([...s1, ...s2]).size;
  // Set은 중복 허용 X
  // 배열 1, 2의 길이의 합  - 중복 아닌 길이
}
