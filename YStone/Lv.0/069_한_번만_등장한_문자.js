const solution = (s) => {
  const sortedArr = [...s].sort();
  return sortedArr
    .filter((el) => el !== sortedArr[sortedArr.indexOf(el) + 1])
    .join("");
};
