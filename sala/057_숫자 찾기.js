// 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.
// 여기서 중요한 것은 else로 return -1을 하게되면 해당되는 숫자 전에 조건을 만족하지 않는 것을 만나면 return으로 반환하고 끝난다. 그렇기 때문에 for 반복문 이후에 return -1을 넣었다.
function solution(num, k) {
  const newArr = Array.from(String(num));
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === String(k)) {
      return newArr.indexOf(String(k)) + 1;
    }
  }
  return -1;
}

// 다른 풀이법
function solution(num, k) {
  return String(num).indexOf(String(k)) > -1
    ? String(num).indexOf(String(k)) + 1
    : String(num).indexOf(String(k));
}
