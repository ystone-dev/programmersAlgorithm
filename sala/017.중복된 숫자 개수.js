function solution(array, n) {
  return array.filter((a) => a === n).length;
}

// 다른 풀이법
function solution(array, n) {
  var answer = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] == n) {
      answer++;
    }
  }
  return answer;
}
