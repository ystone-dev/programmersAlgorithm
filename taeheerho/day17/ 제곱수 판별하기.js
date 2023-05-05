//todo 어떤 자연수를 제곱했을 때 나오는 정수를 제곱수라고 합니다. 정수 n이 매개변수로 주어질 때, n이 제곱수라면 1을 아니라면 2를 return하도록 solution 함수를 완성해주세요.

// Math.sqrt() 
// 정수로 제곱한게 아니라면 소수점이 있으므로 올림처리 해서 둘을 비교
function solution(n) {
    let num = Math.sqrt(n);
    return num === Math.ceil(num) ? 1 : 2
}

//* +) Number.isInteger() 정수인지 판별하는 메서드

function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2
}