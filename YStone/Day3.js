// 각도기
// 문제 설명
// 각에서 0도 초과 90도 미만은 예각, 90도는 직각, 90도 초과 180도 미만은 둔각 180도는 평각으로 분류합니다. 각 angle이 매개변수로 주어질 때 예각일 때 1, 직각일 때 2, 둔각일 때 3, 평각일 때 4를 return하도록 solution 함수를 완성해주세요.

// 예각 : 0 < angle < 90
// 직각 : angle = 90
// 둔각 : 90 < angle < 180
// 평각 : angle = 180
// 제한사항
// 0 < angle ≤ 180
// angle은 정수입니다.

const solution = (angle) => {
  if (angle < 90) {
    return 1;
  } else if (angle === 90) {
    return 2;
  } else if (angle === 180) {
    return 4;
  } else {
    return 3;
  }
};

// 짝수의 합
// 문제 설명
// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// 0 < n ≤ 1000

const solution = (n) => {
  let sum = 0;
  for (let i = n; i > 0; i--) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
};

// 배열의 평균값
// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 0 ≤ numbers의 원소 ≤ 1,000
// 1 ≤ numbers의 길이 ≤ 100
// 정답의 소수 부분이 .0 또는 .5인 경우만 입력으로 주어집니다.

const solution = (number) => {
  let sum = 0;
  let average = 0;
  for (let i of number) {
    sum += i;
  }
  average = sum / number.length;
  return average;
};

// 양꼬치
// 문제 설명
// 머쓱이네 양꼬치 가게는 10인분을 먹으면 음료수 하나를 서비스로 줍니다. 양꼬치는 1인분에 12,000원, 음료수는 2,000원입니다. 정수 n과 k가 매개변수로 주어졌을 때, 양꼬치 n인분과 음료수 k개를 먹었다면 총얼마를 지불해야 하는지 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 0 < n < 1,000
// n / 10 ≤ k < 1,000
// 서비스로 받은 음료수는 모두 마십니다.

const solution = (n, k) => {
  let sum = 0;
  k -= Math.floor(n / 10);
  sum = n * 12000 + k * 2000;
  return sum;
};

const solution = (n, k) => {
  let sum = 0;
  const serviceDrinks = Math.floor(n / 10);
  const paidDrinks = k - serviceDrinks;
  sum = n * 12000 + paidDrinks * 2000;
  return sum;
};
