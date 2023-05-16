const solution = (num, k) => {
  const i = String(num).indexOf(String(k));
  return i !== -1 ? i + 1 : -1;
};
