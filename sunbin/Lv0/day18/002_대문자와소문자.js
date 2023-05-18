// https://school.programmers.co.kr/learn/courses/30/lessons/120893

function solution(my_string) {
  let answer = '';

  // for of, if ~ else
  for (const i of my_string) {
    if (i === i.toLowerCase()) {
      answer += i.toUpperCase();
    } else {
      answer += i.toLowerCase();
    }
  }

  // 같지만 다른
  for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();

  return answer
}
