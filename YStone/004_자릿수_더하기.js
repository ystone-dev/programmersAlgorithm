const solution = (N) =>
  (N + "").split("").reduce((acc, cur) => acc + parseInt(cur), 0);
