// 이전 풀이
function solution(s) {
  return s
    .toLowerCase()
    .split("")
    .reduce(
      (acc, cur) => (cur === "p" ? (acc += 1) : cur === "y" ? (acc -= 1) : acc),
      0
    )
    ? false
    : true;
}

// 새 풀이
function solution(s) {
  const p = s.match(/[pP]/g);
  const y = s.match(/[yY]/g);
  return p?.length === y?.length;
}
