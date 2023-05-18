// https://school.programmers.co.kr/learn/courses/30/lessons/120836


// 주의..! Python은 % 연산자 사용 시, 나누는 수가 0이면 Error, JS는 Error 리턴 없음
function solution(n) {
  let count = 0;

  for (let i = 1; i < n+1; i++) {
    if (n % i === 0) {
      count++      
    };
  };

  return count
}