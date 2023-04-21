function solution(num_list) {
  var answer = [];
  for (let i = num_list.length - 1; i >= 0; i--) {
    answer.push(num_list[i]);
  }
  return answer;
}

// 다른 풀이법
function solution(num_list) {
  // 매우 간단
  return num_list.reverse();
}
