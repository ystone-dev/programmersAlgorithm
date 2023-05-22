// 이전 풀이
function solution(n, numlist) {
  return numlist.filter((v) => v % n === 0);
}

// 새 풀이
function solution(n, numlist) {
  return numlist.reduce(
    (acc, cur) => (cur % n === 0 ? [...acc, cur] : acc),
    []
  );
}
