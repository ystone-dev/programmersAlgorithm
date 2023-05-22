// 이전 풀이
function solution(num_list) {
  let [even, odd] = [0, 0];

  for (let item of num_list) {
    item % 2 ? odd++ : even++;
  }

  return [even, odd];
}

// 새 풀이
function solution(num_list) {
  return num_list.reduce(
    (acc, cur) => {
      acc[cur % 2]++; // 짝수 => acc[0]++, 홀수 => acc[1]++
      return acc; // acc 반환
    },
    [0, 0]
  );
}
