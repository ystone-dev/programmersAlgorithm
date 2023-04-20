// https://school.programmers.co.kr/learn/courses/30/lessons/120817

function solution(numbers) {
  const sum = numbers.reduce(function add(item, current) {
    return item + current;
  }, 0);
  
  return sum/numbers.length
}

/*
function solution(numbers) {
  var answer = numbers.reduce((a,b) => a+b, 0) / numbers.length;
  return answer;
}
 */