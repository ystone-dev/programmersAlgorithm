function solution(money) {
  // 한 잔에 5500원
  return [Math.floor(money / 5500), money % 5500];
}
