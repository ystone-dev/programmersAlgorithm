function solution(numbers) {
  return numbers.map(v => 2 *v);
}

// 다른 풀이법
function solution(numbers) {
  var answer = [];
  for(var i = 0; i < numbers.length; i++) {
    answer[i] = numbers[i] * 2;
  }
  return answer;
}
