// todo

//! 런타임 에러
function solution(s) {
    return s.match(/[pP]/g).length === s.match(/[yY]/g).length
}

// 아예 없는 경우를 생각하지 않음
const solution = s => {
    let p = s.match(/[pP]/g) === null ? 0 : s.match(/[pP]/g).length;
    let y = s.match(/[yY]/g) === null ? 0 : s.match(/[yY]/g).length;
    return p === y
}