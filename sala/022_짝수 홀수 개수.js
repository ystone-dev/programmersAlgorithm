function solution(num_list) {
  let answer1 = [];
  let answer2 = [];
  let answerNew;
  for (let i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 === 0) {
      answer1.push(num_list[i]);
      answer1.length;
    } else {
      answer2.push(num_list[i]);
      answer2.length;
    }
  }
  return [answer1.length, answer2.length];
}

// 다른 풀이법
function solution(num_list) {
  return [
    num_list.filter((num) => num % 2 === 0).length,
    num_list.filter((num) => num % 2 === 1).length,
  ];
}
