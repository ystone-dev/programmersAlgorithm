function solution(array) {
  const sortedArray = array.sort((a, b) => a - b); // 오름차순 정렬
  const midNum = sortedArray[Math.floor(sortedArray.length / 2)];
  return midNum;
}
