// 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요
function solution(n) {
  const newArr = Array.from(String(n));
  return newArr.reduce((a, b) => a + parseInt(b), 0);
}

// 다른 풀이법
function solution(n) {
  const newArr = Array.from(String(n));
  console.log(newArr);
  let count = 0;
  for (let i = 0; i < newArr.length; i++) {
    count += parseInt(newArr[i]);
  }
  return count;
}

function solution(n) {
  return n
    .toString()
    .split('')
    .reduce((acc, cur) => acc + Number(cur), 0);
}
