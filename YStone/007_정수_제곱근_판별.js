const solution = (n) =>
  n ** 0.5 === Math.trunc(n ** 0.5) ? (n ** 0.5 + 1) ** 2 : -1;
