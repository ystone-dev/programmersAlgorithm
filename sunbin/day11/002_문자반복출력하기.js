// https://school.programmers.co.kr/learn/courses/30/lessons/120825

function solution(my_string, n) {
  const strArray = [...my_string];
  let newArray = [];

  strArray.forEach((e) => {
    for (let i = 0; i < n; i++) {
      newArray.push(e);
    };
  })

  const answer = newArray.join("")

  return answer
}

// 다른풀이
function solutionB(my_string, n) {
  const answer = [...my_string].map(v => v.repeat(n)).join("");

  return answer
}