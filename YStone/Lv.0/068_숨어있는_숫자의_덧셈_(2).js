const solution = (my_string) =>
  my_string.match(/[0-9]+/g) !== null
    ? my_string.match(/[0-9]+/g).reduce((acc, cur) => acc + parseInt(cur), 0)
    : 0;
