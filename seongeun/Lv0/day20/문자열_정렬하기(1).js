// 이전 풀이
function solution(my_string) {
  let arr = my_string
    .split("")
    .filter((v) => isFinite(v))
    .map((v) => +v)
    .sort((a, b) => a - b);

  return arr;
}

// 새 풀이
function solution(my_string) {
  const number = [];

  for (let item of my_string) {
    if (isFinite(item)) {
      number.push(+item);
    }
  }

  return number.sort();
}
