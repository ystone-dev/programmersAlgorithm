// 각도기: https://school.programmers.co.kr/learn/courses/30/lessons/120829
function solution(angle) {
  if (angle < 90) {
    return 1;
  } else if (angle === 90) {
    return 2;
  } else if (angle < 180) {
    return 3;
  } else {
    return 4;
  }
}

// 짝수의 합: https://school.programmers.co.kr/learn/courses/30/lessons/120831
function solution(n) {
  // 짝수로 만들기
  n % 2 && n--;
  // 등차수열 공식
  // 항의 개수 * (첫 항 + 마지막 항) / 2
  return ((n / 2) * (2 + n)) / 2;
}

// 배열의 평균값: https://school.programmers.co.kr/learn/courses/30/lessons/120817
function solution(numbers) {
  // 배열 요소의 합 / 배열의 길이
  return numbers.reduce((acc, cur) => acc + cur) / numbers.length;
}

// 양꼬치: https://school.programmers.co.kr/learn/courses/30/lessons/120830
function solution(n, k) {
  const lamb = n * 12000;
  const drink = (k - Math.trunc(n / 10)) * 2000;
  return lamb + drink;
}
