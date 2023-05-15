// 이전 풀이
function solution(order) {
  return order
    .toString()
    .split("")
    .reduce((acc, item) => (item % 3 === 0 && item != 0 ? (acc += 1) : acc), 0);
}

// 새 풀이
function solution(order) {
  return String(order).match(/[369]/g)?.length || 0;
}
