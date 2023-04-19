// 숫자 비교하기: https://school.programmers.co.kr/learn/courses/30/lessons/120807
function solution(num1, num2) {
  return num1 === num2 ? 1 : -1;
}

// 나머지 구하기: https://school.programmers.co.kr/learn/courses/30/lessons/120810
function solution(num1, num2) {
  return num1 % num2;
}

// 나이출력: https://school.programmers.co.kr/learn/courses/30/lessons/120820
function solution(age) {
  const year = 2022;
  age -= 1; // 만 나이로 변환

  return year - age;
}

// 두 수의 나눗셈: https://school.programmers.co.kr/learn/courses/30/lessons/120806
function solution(num1, num2) {
  return Math.floor((num1 / num2) * 1000);
}
