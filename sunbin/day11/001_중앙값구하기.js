//  https://school.programmers.co.kr/learn/courses/30/lessons/120811

function solution(array) {
  const newList = array.sort((a, b) => b - a);

  return newList[Math.floor(newList.length / 2)]
}