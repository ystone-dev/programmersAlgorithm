//todo 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

// 배열 제일 끝 두자리수 곱 비교?
let arr = [10, 20, 30, 5, 5, 20, 5];
arr.sort((a, b) => a - b)
arr[0] * arr[1]
arr[arr.length - 1] * arr[arr.length - 2]


function solution(numbers) {
    let arr = numbers.sort((a,b) => a - b);
    let positive = arr[arr.length - 1] * arr[arr.length - 2];
    let negative = arr[0] * arr[1];


    return positive > negative ? positive : negative
}
