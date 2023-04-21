// https://school.programmers.co.kr/learn/courses/30/lessons/120583

function solution(array, n) {
  const newArray = [];
  
  array.forEach(el => {
      if (el === n) {
          newArray.push(el);
      };
  });
  return newArray.length
}

// 다른풀이: filter
function solutionB(array, n) {
  const answer = 0;
  let newArray = array.filter((item) => itme === n);
  answer = newArray.length;

  return answer
}