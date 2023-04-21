// 배열 두 배 만들기: https://school.programmers.co.kr/learn/courses/30/lessons/120809
// 이전 풀이
function solution(numbers) {
  let answer = [];
  for (let item of numbers) {
    answer.push(item * 2);
  }
  return answer;
}

// 새 풀이
function solution(numbers) {
  return numbers.map((cur) => cur * 2);
}

// 배열 뒤집기: https://school.programmers.co.kr/learn/courses/30/lessons/120821
// 이전 풀이
function solution(num_list) {
  return num_list.reverse();
}

// 새 풀이
function solution(num_list) {
  const answer = [];
  for (let i = num_list.length - 1; i >= 0; i--) {
    answer.push(num_list[i]);
  }
  return answer;
}
