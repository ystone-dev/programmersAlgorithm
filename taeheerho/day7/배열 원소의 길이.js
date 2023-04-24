//todo 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요

//* for문
function solution(strlist) {
    arr = []
    for(let i = 0;i < strlist.length; i++){
        arr.push(strlist[i].length);
    }
    return arr
}

//* map()
function solution(strlist) {
    return strlist.map(el => el.length);
}

//* reduce()
function solution(strlist) {
    return strlist.reduce((a, b) => [...a, b.length],[]);
}