// 이전 풀이
function solution(numbers, direction) {
  switch (direction) {
    case "right":
      numbers.unshift(numbers.pop());
      return numbers;
    case "left":
      numbers.push(numbers.shift());
      return numbers;
  }
}

// 새 풀이
function solution(numbers, direction) {
  if (direction === "right") {
    return [numbers.at(-1), ...numbers.slice(0, -1)];
  } else {
    return [...numbers.slice(1), numbers[0]];
  }
}
