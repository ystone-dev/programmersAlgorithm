// https://school.programmers.co.kr/learn/courses/30/lessons/120862

function solution(numbers) {
  const sortedNumbers = numbers.sort((a, b) => a - b);

  const case_a = sortedNumbers[0] * sortedNumbers[1];
  const case_b =
    sortedNumbers[sortedNumbers.length - 1] *
    sortedNumbers[sortedNumbers.length - 2];

  return case_a > case_b ? case_a : case_b;
}


// 다른 풀이: Math.max()
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(numbers[0]*numbers[1], numbers[numbers.length-1]*numbers[numbers.length-2]);
}
