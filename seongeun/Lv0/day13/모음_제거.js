// 이전 풀이
function solution(my_string) {
  let answer = "";
  const vowel = ["a", "e", "i", "o", "u"];

  for (let item of my_string) {
    if (!vowel.includes(item)) {
      answer += item;
    }
  }

  return answer;
}

// 새 풀이
function solution(my_string) {
  return my_string.replace(/a|e|i|o|u/g, "");
}
