// 이전 풀이
function solution(dot) {
  let pos = 0;

  if (dot[0] > 0) {
    // x가 양수일 때
    dot[1] > 0 ? (pos = 1) : (pos = 4); // y 양수 = 1사분면, 음수 = 4사분면
  } else {
    // x가 음수일 때
    dot[1] > 0 ? (pos = 2) : (pos = 3); // y 양수 = 2사분면, 음수 = 3사분면
  }

  return pos;
}

// 새 풀이
function solution(dot) {
  return dot[0] > 0
    ? dot[1] > 0
      ? (pos = 1)
      : (pos = 4)
    : dot[1] > 0
    ? (pos = 2)
    : (pos = 3);
}
