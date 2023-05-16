// https://school.programmers.co.kkr/learn/courses/30/lessons/120904

function solution(num, k) {
  const n = String(num);
  const kk = String(k);
  
  const answer = n.indexOf(kk) + 1 == 0 ? n.indexOf(kk) : n.indexOf(kk) + 1

  return answer
}

// 다른 풀이: 조금 더 간단하게?
function solution(num, k) {
  var answer = num.toString().indexOf(k);
  return answer === -1 ? -1 : answer += 1;
}