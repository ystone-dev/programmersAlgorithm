// https://school.programmers.co.kr/learn/courses/30/lessons/120824

function solution(num_list) {
  const answer = [0, 0];

  num_list.forEach(el => {
    if (el % 2 == 0) {
      answer[0] += 1;
    } else {
      answer[1] += 1;
    }
  });

  return answer
}
