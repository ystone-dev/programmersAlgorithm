// 중복된 숫자 개수: https://school.programmers.co.kr/learn/courses/30/lessons/120583
// 이전 풀이
function solution(array, n) {
  let count = 0;
  for (let item of array) {
    if (item === n) count++;
  }
  return count;
}

// 새 풀이
function solution(array, n) {
  return array.reduce((acc, cur) => (cur === n ? acc + 1 : acc), 0);
}

// 배열 원소의 길이: https://school.programmers.co.kr/learn/courses/30/lessons/120854
// 이전 풀이
function solution(strlist) {
  return strlist.map((v) => v.length);
}

// 새 풀이
function solution(strlist) {
  return strlist.reduce((acc, cur) => [...acc, cur.length], []);
}
