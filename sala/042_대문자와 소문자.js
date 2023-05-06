// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
  let answer = [];
  const newArr = Array.from(my_string);
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === newArr[i].toUpperCase()) {
      answer.push(newArr[i].toLowerCase());
    } else if (newArr[i] === newArr[i].toLowerCase()) {
      answer.push(newArr[i].toUpperCase());
    }
  }
  return answer.join('');
}

// 다른 풀이법
function solution(my_string) {
  var answer = '';
  for (let c of my_string)
    answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}

function solution(my_string) {
  return my_string
    .split('')
    .map((n) => (n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()))
    .join('');
}
