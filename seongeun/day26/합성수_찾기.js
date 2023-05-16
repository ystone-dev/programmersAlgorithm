// 이전 풀이
function solution(n) {
  let result = 0;
  for (let i = 4; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        result++;
        break;
      }
    }
  }
  return result;
}

// 새 풀이
function solution(n) {
  const arr = Array(n)
    .fill(0)
    .filter((_, idx) => {
      for (let i = 2; i < idx; i++) {
        if ((idx + 1) % i === 0) {
          return true;
        }
      }
    });

  return arr.length;
}
