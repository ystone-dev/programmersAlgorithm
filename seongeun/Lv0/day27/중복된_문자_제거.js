// 이전 풀이
function solution(my_string) {
  let set = new Set(my_string.split(""));
  let str = "";
  for (let item of set) {
    str += item;
  }
  return str;
}

// 새 풀이
function solution(my_string) {
  return Array.from(new Set(my_string)).join("");
}
