// 이전 풀이
function solution(my_string) {
  let reverseString = "";
  for (let i = my_string.length - 1; i >= 0; i--) {
    reverseString += my_string[i];
  }

  return reverseString;
}

// 새 풀이
function solution(my_string) {
  return my_string.split("").reverse().join("");
}
