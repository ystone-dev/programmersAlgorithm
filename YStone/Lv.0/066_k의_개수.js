const solution = (i, j, k) => {
  const arr = [];
  while (i <= j) {
    arr.push(i);
    i++;
  }
  return arr
    .join("")
    .split("")
    .filter((el) => el == k).length;
};
