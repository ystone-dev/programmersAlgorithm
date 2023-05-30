const solution = (x) =>
  x % (x + "").split("").reduce((acc, cur) => acc + parseInt(cur), 0) === 0
    ? true
    : false;
