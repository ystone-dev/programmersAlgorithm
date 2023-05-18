// https://school.programmers.co.kr/learn/courses/30/lessons/120849

function solution(my_string) {
  const vowel = ["a", "e", "i", "o", "u"];

  vowel.forEach(el => {
    my_string.replaceAll(el, "")
  });

  return my_string

}

function solutionB(my_string) {
  return my_string.replace(/[aeiou]/g, '');
}