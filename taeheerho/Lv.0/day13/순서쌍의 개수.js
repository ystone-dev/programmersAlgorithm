//todo 순서쌍이란 두 개의 숫자를 순서를 정하여 짝지어 나타낸 쌍으로 (a, b)로 표기합니다. 자연수 n이 매개변수로 주어질 때 두 숫자의 곱이 n인 자연수 순서쌍의 개수를 return하도록 solution 함수를 완성해주세요.

//! 시간초과로 실패...
function solution(n) {
    let arr = [];
    for (let i = 0; i <= n; i++){
        for (let j = 0; j <= n; j++){
            if(i * j === n) {
                arr.push(i,j)
            }
        }
    }
    return arr.length / 2
}

//* 반복문을 하나로 줄임
function solution(n) {
    let arr = [];
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            arr.push(i);
        }
    }
    return arr.length  // 나누기 2 하지 않아도 중복된것은 걸러짐
}


//? 이해가 안갔던 풀이
//Math.sqrt 가 제곱근이고 n에 들어가면 20 인데 그럼 저기에 3이 들어갈텐데..결과값이 나온다고?

function solution(n) {
    let ans = 0;
    for (let i = 1; i < Math.sqrt(n); i++)
        if (n%i === 0) ans+=2;

    return Number.isInteger(Math.sqrt(n)) ? ans+1 : ans;
}