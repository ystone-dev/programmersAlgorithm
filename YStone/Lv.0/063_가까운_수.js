const solution = (array, n) => {
  const copy = [...array];
  copy.push(n);
  const newArr = copy.sort((a, b) => a - b);
  const index = newArr.indexOf(n);
  const case1 = newArr[index] - newArr[index - 1];
  const case2 = newArr[index + 1] - newArr[index];
  if (n === newArr[0]) {
    return newArr[index + 1];
  }
  if (n === newArr[newArr.length - 1]) {
    return newArr[index - 1];
  }
  if (case1 === case2) {
    return newArr[index - 1];
  } else {
    return case1 > case2 ? newArr[index + 1] : newArr[index - 1];
  }
};
