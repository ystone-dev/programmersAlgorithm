//todo 두 배열이 얼마나 유사한지 확인해보려고 합니다. 문자열 배열 s1과 s2가 주어질 때 같은 원소의 개수를 return하도록 solution 함수를 완성해주세요.


//for 문으로
function solution(s1, s2) {
    let checkArr = [];
    for(let i = 0; i < s1.length; i++){
        for(let j = 0; j < s2.length; j++){
            if(s1[i] === s2[j]){
                checkArr.push(s1[i])
            }
        }
    }
    return checkArr.length
}


// filter 로 풀이
function solution(s1, s2){
    let checkArr = []
    checkArr = s1.filter(el => s2.indexOf(el) === -1)
    return s1.length - checkArr.length
}


// 또 까먹었던 includes
function solution(s1, s2){
    const checkArr = s1.filter(el => s2.includes(el));
    return checkArr.length
}