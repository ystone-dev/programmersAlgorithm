// 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.
// unshift(): 새로운 요소를 배열의 맨 앞쪽에 추가하고, 새로운 길이를 반환
// shift(): 배열의 첫 번째 원소를 제거하고, 제거된 요소를 반환
// pop(): 배열에서 마지막 원소를 제거하고 그 요소를 반환
function solution(numbers, direction) {
  if (direction === 'right') {
    numbers.unshift(numbers.pop());
  } else if (direction === 'left') {
    numbers.push(numbers.shift());
  }
  return numbers;
}

// 다른 풀이법
function solution(numbers, direction) {
  direction === 'right'
    ? numbers.unshift(numbers.pop())
    : numbers.push(numbers.shift());
  return numbers;
}
