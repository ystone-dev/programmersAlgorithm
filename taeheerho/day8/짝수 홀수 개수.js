//todo 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.


//! 이게 왜 초기값만 나올까..reduce로 어떻게 풀지
const num_list = [1, 2, 3, 4, 5];

let x = num_list.reduce((a, b) => {
 return b % 2 === 0 ? a++ : a 
}, 0)


//* filter()
function solution(num_list) {
    const x = num_list.filter(el => el % 2 === 0).length
    return [x, num_list.length - x];
}

//* forEach() 
function solution (num_list){
    num_list.forEach(el => {
        if(el % 2 === 0){
            ++arr[0]
        } else {
            ++arr[1]
        }
    })
    return arr
}