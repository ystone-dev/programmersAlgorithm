// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
// 예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
function solution(n) {
  const newArr = Array.from(String(n));
  return newArr.reduce((a, b) => a + parseInt(b), 0);
}

// 다른 풀이법
function solution(n) {
  var arr = n.toString().split('');
  var sum = 0;
  arr.forEach((element) => {
    sum += parseInt(element);
  });
  return sum;
}
