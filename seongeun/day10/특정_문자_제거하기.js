// 이전 풀이
function solution(my_string, letter) {
  return my_string.split(letter).join("");
}

// 새 풀이
function solution(my_string, letter) {
  return my_string.replaceAll(letter, "");
}
