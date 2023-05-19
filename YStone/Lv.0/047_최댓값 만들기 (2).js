// 최댓값 만들기 (2)
// 문제 설명
// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// -10,000 ≤ numbers의 원소 ≤ 10,000
// 2 ≤ numbers 의 길이 ≤ 100

const solution = (numbers) => {
  const newArr = numbers.sort((a, b) => a - b);
  const arrLength = numbers.length;
  const case1 = newArr[0] * newArr[1];
  const case2 = newArr[arrLength - 1] * newArr[arrLength - 2];
  return case1 > case2 ? case1 : case2;
};
