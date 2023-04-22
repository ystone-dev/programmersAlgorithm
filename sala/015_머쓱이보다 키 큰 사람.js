function solution(array, height) {
  const tallPeople = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > height) {
      tallPeople.push(array[i]);
    }
  }
  return tallPeople.length;
}

// 다른 풀이법
function solution(array, height) {
  var answer = array.filter((item) => item > height);
  return answer.length;
}
