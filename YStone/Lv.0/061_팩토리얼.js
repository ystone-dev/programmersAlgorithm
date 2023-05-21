const solution = (n) => {
  // if (n === 0) {
  //   return 1;
  // } 왜 없어도 될까?

  let result = 1;
  let i = 1;
  for (i = 1; result <= n; i++) {
    result *= i;
  }
  return i - 2; //왜 1이 아니고 2일까?
};
