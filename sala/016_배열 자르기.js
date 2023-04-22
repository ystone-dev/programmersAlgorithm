function solution(numbers, num1, num2) {
  return numbers.slice(num1, num2 + 1);
}

// slice와 splice의 차이점
// slice(start, end)
// splice(start, deleteCount, item1, item2,...)

// splice를 활용한 풀이법
function solution(numbers, num1, num2) {
  return numbers.splice(num1, num2 - num1 + 1);
}
