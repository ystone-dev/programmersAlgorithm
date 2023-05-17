// 문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.
function solution(before, after) {
  const newArr1 = Array.from(before);
  const newArr2 = Array.from(after);
  const beforeArr = newArr1.sort().join('');
  const afterArr = newArr2.sort().join('');
  return beforeArr === afterArr ? 1 : 0;
}

// 다른 풀이법
function solution(before, after) {
  return before.split('').sort().join('') === after.split('').sort().join('')
    ? 1
    : 0;
}
