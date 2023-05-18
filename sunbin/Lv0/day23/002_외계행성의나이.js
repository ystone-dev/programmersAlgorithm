//https://school.programmers.co.kr/learn/courses/30/lessons/120834

function solution(age) {
  const planet = {
    0: "a",
    1: "b",
    2: "c",
    3: "d",
    4: "e",
    5: "f",
    6: "g",
    7: "h",
    8: "i",
    9: "j",
  };

  const answer = age
    .toString()
    .split("")
    .map((v) => planet[v])
    .join("");

  return answer;
}
