// todo 정수 n이 매개변수로 주어질 때 n의 각 자리 숫자의 합을 return하도록 solution 함수를 완성해주세요

//? Array.from은 문자열일때만 배열로 전환해주는건가?
//유사배열객체와 문자형만 가능
// 두번째 인자에는 변경할 타입을 적으면 됨

function solution (n){
    let arr = Array.from(String(n))
    return arr.map(el => parseInt(el)).reduce((a, b) => a + b ,0);
}
