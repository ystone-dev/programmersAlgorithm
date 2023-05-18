// https://school.programmers.co.kr/learn/courses/30/lessons/120816

function solution(slice, n) {
  const minimum = Math.floor(n / slice);

  if (n % slice !== 0) {
    return minimum + 1
    
  } else {
    return minimum
  }
  
}