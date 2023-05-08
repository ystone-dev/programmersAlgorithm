function solution(rsp) {
  let answer = [];
  const newArr = rsp.split('');
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === '2') {
      answer.push('0');
    } else if (newArr[i] === '0') {
      answer.push('5');
    } else if (newArr[i] === '5') {
      answer.push(2);
    }
  }
  return answer.join('');
}

// 다른 풀이법
function solution(rsp) {
  let arr = {
    2: 0,
    0: 5,
    5: 2,
  };
  var answer = [...rsp].map((v) => arr[v]).join('');
}
