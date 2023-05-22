// 이전 풀이
function solution(numbers) {
  numbers.sort((a, b) => a - b);

  return numbers[0] * numbers[1] > numbers[numbers.length - 2] * numbers[numbers.length - 1]
    ? numbers[0] * numbers[1]
    : numbers[numbers.length - 2] * numbers[numbers.length - 1];
}

// 새 풀이
function solution(numbers) {
  numbers.sort((a, b) => a - b);
  return Math.max(numbers[0] * numbers[1], numbers.at(-1) * numbers.at(-2));
  // .at() 메서드 음수 인덱싱 가능, IE 지원 X
}
