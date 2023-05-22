// 이전 풀이
function solution(array) {
  const arr = [];
  arr.push(Math.max(...array), array.indexOf(Math.max(...array)));
  return arr;
}

// 새 풀이
function solution(array) {
  return array.reduce((acc, cur, idx) =>
    Math.max(...array) === cur ? [cur, idx] : acc
  );
}
