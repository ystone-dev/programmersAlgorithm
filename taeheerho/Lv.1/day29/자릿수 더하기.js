//todo

function solution(N) {
    return N.toString().split("")
            .reduce((a,b) => a + parseInt(b), 0)
}