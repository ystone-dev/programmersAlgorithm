const solution = (order) => {
  const arr = [];
  Array.from(String(order), (el) => {
    if (el === "3" || el === "6" || el === "9") {
      arr.push(el);
    }
  });
  return arr.length;
};
