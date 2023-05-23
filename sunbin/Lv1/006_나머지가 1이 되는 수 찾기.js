function solution(n) {
  for (let i = 0; i <= n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}


// 다른 풀이: Array, fill, map
function solutionB(x, n) {
  return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
