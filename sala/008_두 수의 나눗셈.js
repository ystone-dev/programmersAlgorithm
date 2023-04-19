function solution(num1, num2) {
  return Math.floor((num1 / num2) * 1000);
}

// 다른 풀이법
// Math.trunc() 함수는 주어진 값의 소수부분을 제거하고 숫자의 정수부분을 반환한다.
function solution(num1, num2) {
  return Math.trunc((num1 / num2) * 1000);
}
