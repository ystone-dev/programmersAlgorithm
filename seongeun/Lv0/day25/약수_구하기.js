// 이전 풀이
function solution(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    n % i || arr.push(i);
  }
  return arr;
}

// 새 풀이
function solution(n) {
  const arr1 = [];
  const arr2 = [];

  for (let i = 1; i <= n ** 0.5; i++) {
    if (n % i === 0) {
      arr1.push(i);
      arr2.push(n / i);
    }
  }

  if (arr1.at(-1) === arr2.at(-1)) arr2.pop();

  return arr1.concat(arr2.reverse());
}
