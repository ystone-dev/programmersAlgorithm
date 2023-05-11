// 이전 풀이
function solution(my_string, num1, num2) {
  return my_string
    .split("")
    .map((item, index) =>
      index === num1 ? my_string[num2] : index === num2 ? my_string[num1] : item
    )
    .join("");
}

// 새 풀이
function solution(my_string, num1, num2) {
  return my_string.replace(/./g, (cur, idx, arr) => {
    if (idx === num1) return arr[num2];
    else if (idx === num2) return arr[num1];
    return cur;
  });
}
