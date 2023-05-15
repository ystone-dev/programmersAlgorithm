// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.
function solution(n) {
  let mySet = new Set();
  if (n < 3) {
    return 0;
  }
  for (let i = 4; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        mySet.add(i);
      }
    }
  }
  return mySet.size;
}

// 다른 풀이법
function solution(n) {
  return Array(n)
    .fill()
    .map((_, i) => i + 1)
    .filter((i) => {
      let cnt = 0;
      for (let j = 1; j <= i; j++) {
        if (j % i === 0) cnt++;
      }
      return cnt >= 3;
    }).length;
}
