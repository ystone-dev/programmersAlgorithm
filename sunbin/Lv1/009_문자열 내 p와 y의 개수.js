// https://school.programmers.co.kr/learn/courses/30/lessons/12916

// 런타임 에러ㅠㅠ -> optional Chaining
function solution(s) {
  const p_count = s.match(/p/ig)?.length;
  const y_count = s.match(/y/ig)?.length;

  return p_count === y_count
}
