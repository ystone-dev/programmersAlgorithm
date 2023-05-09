// https://school.programmers.co.kr/learn/courses/30/lessons/120839
// 테스트

function solution(rsp) {
  const rspArr = {
    2: 0,
    0: 5,
    5: 2
  }

  let answer = ''
  for (const i of rsp) {
    answer += String(rspArr[i])
  }

  // 더 간단히!
  // let answer = [...rsp].map(v => rspArr[v]).join("");

  return answer
}