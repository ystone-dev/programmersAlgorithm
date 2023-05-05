//todo 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.


//! 오답
// str2에 포함된 문자 1개만 있어도 true를 반환함
// 순서까지 일치해야함
function solution(str1, str2) {
    return str1.split("").includes(...str2.split("")) ? 1 : 2
}

//* indexOf를 활용
function solution(str1, str2) {
    return str1.indexOf(str2) !== -1 ? 1 : 2
}


//* +) split기준으로 나눠서 길이 비교
function solution(str1, str2) {
    return str1.split(str2).length >= 2 ? 1 : 2
}