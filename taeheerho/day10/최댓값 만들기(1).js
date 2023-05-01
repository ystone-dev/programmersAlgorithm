//todo 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

//* sort[compareFunction]) 배열의 요소를 적절한 위치에 정렬한 후 그 배열을 반환하는 메서드 / 기본 속성이 정렬 순서를 정의하는 함수로 각 문자의 유니코드 코드 포인트 값에 따라 정렬 만약 이 안에 값이 제공되면 함수의 반환 값에 따라 정렬

// 일단 순차적으로 해보자

const num = [3, 1, 2, 4, 6];
const numSort = num.sort((a, b) => b - a ,0);
const maxNum = numSort.slice(0,2);
maxNum[0] * maxNum[1]



function solution (numbers) {
    numbers.sort((a, b) => b - a ,0).slice(0,2);
    return numbers[0] * numbers[1]
}

//굳이 slice 를 안써도 되는구나..!
function solution (numbers) {
    numbers.sort((a, b) => b - a ,0);
    return numbers[0] * numbers[1]
}

//? +) 이건 어떻게 작동하는거지? 배열 자체를 식별자로 할 수 있나?
function solution(numbers) {
    let [x, y] = numbers.sort((a,b) => b - a);
    // 이렇게 배열 개수를 설정해 놓으면 딱 2개만 들어가는건가
    return x * y;
}

