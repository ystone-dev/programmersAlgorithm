const solution = (n) => {
  const arr = [];
  for (let i = 4; i <= n; i++) {
    if (
      i % 2 === 0 ||
      i % 3 === 0 ||
      (i % 5 === 0 && i !== 5) ||
      (i % 7 === 0 && i !== 7)
    ) {
      arr.push(i);
    }
  }
  return arr.length;
};
