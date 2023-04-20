function solution(age) {
  const birthYear = 2023 - age;
  return birthYear;
}

// 다른 풀이법
// 전제: 2023년도..! 
function solution(age) {
  return new Date.getFullYear() - age;
}
