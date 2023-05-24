const solution = (n) => {
  const result = [];
  Array.from(n + "", (el) => result.unshift(parseInt(el)));
  return result;
};

const solution = (n) => Array.from(n + "", Number).reverse();
