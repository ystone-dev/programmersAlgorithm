// 이전 풀이
function solution(cipher, code) {
  return cipher
    .split("")
    .reduce((acc, cur, idx) => ((idx + 1) % code ? acc : acc + cur), "");
}

// 새 풀이
function solution(cipher, code) {
  return cipher.replace(/./g, (cur, idx) => ((idx + 1) % code ? "" : cur));
  // (idx + 1 % code) => 인덱스가 code의 배수면 false, 출력
}
