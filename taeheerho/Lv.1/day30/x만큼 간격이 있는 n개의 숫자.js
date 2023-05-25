//todo

function solution(x, n) {
    let arr = [];
    let count = 0;
    for (let i = 0; i < n; i++) {
        count += x;
        arr.push(count);
    }
    return arr;
}


//
const solution = (x, n) => Array.from({ length: n }, (_, i) => x * (i + 1));
