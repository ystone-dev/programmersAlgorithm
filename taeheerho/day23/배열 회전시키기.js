//todo 정수가 담긴 배열 numbers와 문자열 direction가 매개변수로 주어집니다. 배열 numbers의 원소를 direction방향으로 한 칸씩 회전시킨 배열을 return하도록 solution 함수를 완성해주세요.

// 오른쪽
if(d === 'right'){
    let result = [];
        result.push(arr.at(-1))
    for(let i = 0;i < arr.length - 1; i++){
        result.push(arr[i])
    }
    console.log(result)
}

// 왼쪽
if(d === 'left'){
    let result = []
    for(let i = 1; i < arr.length; i++ ){
        result.push(arr[i]);
    }
    result.push(arr[0]);
    console.log(result)
}

function solution(numbers, direction) {
    let result = [];
    
    if(direction === 'right'){
        result.push(numbers.at(-1))
        for(let i = 0;i < numbers.length - 1; i++){
        result.push(numbers[i])
    }
        return result
    } else if(direction === 'left'){
        for(let i = 1; i < numbers.length; i++ ){
        result.push(numbers[i]);
    }
        result.push(numbers[0])
        return result
    }
}



//* +) shift, unshift, pop, push
//  맨 앞 맨 뒤에 숫자가 변경되는것을 이용
function solution(numbers, direction) {
    if(direction === 'right') {
        numbers.unshift(numbers.pop());
    return numbers
} else {
    numbers.push(numbers.shift())
    return numbers
    }
}
