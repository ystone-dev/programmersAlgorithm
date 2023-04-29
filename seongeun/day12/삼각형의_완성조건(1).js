// 이전 풀이
function solution(sides) {
  sides.sort((a, b) => a - b);
  return sides[0] + sides[1] > sides[2] ? 1 : 2;
}

// 새 풀이
function solution(sides) {
  const max = Math.max(...sides); // 가장 긴 변
  const sum = sides.reduce((acc, cur) => acc + cur); // 세 변의 합
  return sum > max * 2 ? 1 : 2;
}
