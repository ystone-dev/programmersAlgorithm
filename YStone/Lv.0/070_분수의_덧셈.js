function solution(numer1, denom1, numer2, denom2) {
  let num1 = numer1 * denom2 + numer2 * denom1;
  let num2 = denom1 * denom2;
  let minNum;
  if (num1 > num2) {
    minNum = num2;
  } else {
    minNum = num1;
  }
  for (let i = minNum; i > 0; i--) {
    if (num1 % i === 0 && num2 % i === 0) {
      let result = [num1 / i, num2 / i];
      return result;
    }
  }
}
