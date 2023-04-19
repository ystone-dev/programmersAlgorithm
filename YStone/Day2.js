// 숫자 비교하기
// 문제 설명
// 정수 num1과 num2가 매개변수로 주어집니다. 두 수가 같으면 1 다르면 -1을 retrun하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ num1 ≤ 10,000
// 0 ≤ num2 ≤ 10,000

const solution = (num1, num2) => {
  if (num1 === num2) {
    return 1;
  } else {
    return -1;
  }
};

const solution = (num1, num2) => {
  return num1 === num2 ? 1 : -1;
};

// 나머지 구하기
// 문제 설명
// 정수 num1, num2가 매개변수로 주어질 때, num1를 num2로 나눈 나머지를 return 하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 < num1 ≤ 100
// 0 < num2 ≤ 100

const solution = (num1, num2) => num1 % num2;

// 나이 출력
// 문제 설명
// 머쓱이는 40살인 선생님이 몇 년도에 태어났는지 궁금해졌습니다. 나이 age가 주어질 때, 2022년을 기준 출생 연도를 return 하는 solution 함수를 완성해주세요.

// 제한사항
// 0 < age ≤ 120
// 나이는 태어난 연도에 1살이며 1년마다 1씩 증가합니다.

const solution = (age) => 2022 - age + 1;

// 두 수의 나눗셈
// 문제 설명
// 정수 num1과 num2가 매개변수로 주어질 때, num1을 num2로 나눈 값에 1,000을 곱한 후 정수 부분을 return 하도록 soltuion 함수를 완성해주세요.

// 제한사항
// 0 < num1 ≤ 100
// 0 < num2 ≤ 100

const solution = (num1, num2) => Math.floor((num1 / num2) * 1000);
