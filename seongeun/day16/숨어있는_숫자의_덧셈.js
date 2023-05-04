// 이전 풀이
function solution(my_string) {
  let answer = my_string
    .split("")
    .reduce((acc, cur) => (isNaN(cur) ? acc : acc + +cur), 0);
  return answer;
}

// 새 풀이
function solution(my_string) {
  return my_string.match(/\d/g).reduce((acc, cur) => acc + +cur, 0);
}
