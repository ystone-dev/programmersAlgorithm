// todo 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.

function solution(n){
    let arr = [];
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
        arr.push(i)
        }
    }

    return arr.reduce((a, b) => a + b,0) 
}

//* 굳이 reduce안쓰고..
function solution(n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            sum += i
        }
    }
    return sum
}
