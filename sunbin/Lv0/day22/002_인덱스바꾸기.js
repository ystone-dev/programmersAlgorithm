//https://school.programmers.co.kr/learn/courses/30/lessons/120895

function solution(my_string, num1, num2) {

  const arr = my_string.split('');

  a = arr[num1]
  b = arr[num2]

  arr.splice(num1, 1, b)
  arr.splice(num2, 1, a)

  const answer = arr.join('')

  return answer;
}

// 다른 풀이: 구조 분해 할당
function solution(my_string, num1, num2) {
  my_string = my_string.split('');
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join('');
}
