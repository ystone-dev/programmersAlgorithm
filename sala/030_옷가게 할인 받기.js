// 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다.
// 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.

// 500000만원 부터 비교했다면 조건식이 더 간단해졌을 수 있었다.
function solution(price) {
  if (price >= 100000 && price < 300000) {
    return Math.floor(price * 0.95);
  } else if (price >= 300000 && price < 500000) {
    return Math.floor(price * 0.9);
  } else if (price >= 500000) {
    return Math.floor(price * 0.8);
  } else {
    return price;
  }
}

// 다른 풀이법
const discounts = [
  [500000, 20],
  [300000, 10],
  [100000, 5],
];

const solution = (price) => {
  for (const discount of discounts)
    if (price >= discount[0])
      return Math.floor(price - (price * discount[1]) / 100);
  return price;
};
