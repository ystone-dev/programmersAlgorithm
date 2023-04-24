// 배열 자르기: https://school.programmers.co.kr/learn/courses/30/lessons/120833
// 이전 풀이
function solution(numbers, num1, num2) {
  return numbers.filter((_, idx) => idx >= num1 && idx <= num2);
}


// 새 풀이
function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

// 머쓱이보다 키 큰사람: https://school.programmers.co.kr/learn/courses/30/lessons/120585
// 이전 풀이
function solution(array, height) {
  return array.reduce((acc, cur) => (cur > height ? (acc += 1) : acc), 0);
}

// 새 풀이
function solution(array, height) {
  return array.filter((v) => v > height).length;
}
