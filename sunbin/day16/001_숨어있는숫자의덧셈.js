// https://school.programmers.co.kr/learn/courses/30/lessons/120851

function solution(my_string) {
  const numbers = my_string
                  .replace(/[^0-9]/g, '')
                  .split('')
                  .reduce((acc, curr) => {
                    return acc + Number(curr)
                  }, 0);

  return numbers

}

solution("aAb1B2cC34oOp")