// todo 문자열 my_string과 정수 n이 매개변수로 주어질 때, my_string에 들어있는 각 문자를 n만큼 반복한 문자열을 return 하도록 solution 함수를 완성해보세요.


// 일단 차근차근 해보기

const str = ['h', 'e']


let arr = []; // 배열 초기화

for(let i = 1; i <= 3; i++){
    arr.push(...str) // 배열안에 있던것을 펼쳐서 push
}

console.log(arr.join("")) // 'hehehe'

// 난 각 인덱스들을 순서대로 반복하고 싶음


//! 왜 undefined 가 나올까..arr 초기값이 foreach 안에 있어서 그렇구나..

const str2 = ['h', 'e']

str2.forEach(el => {
    let arr = [];
    for (let i = 1; i <= 3; i++){
        arr.push(el);
    }
    return arr;
})

// 다시 천천히..
const str3 = ['h', 'e']
const n = 3;
let arr2 = []

str3.forEach(el => {
    arr2.push(el);
    arr2.push(el);
    arr2.push(el);
  //el을 n번.....
})
console.log(arr2.join("")) //'hhheee'


// 왜 이건 되지?
str2.forEach(el => {
    for (let i = 1; i <= n; i++){
        arr.push(el);
    }
})

//* 정답
function solution(my_string, n){
    let arr = [];
    my_string.split("").forEach(el => {
        for(let i = 1; i <= n; i++){
        arr.push(el)
    }
    })
    return arr.join("")
}


//* +) repeat() 이란 메서드가 있구나

function solution(my_string, n) {
    return my_string.split('').map(el => el.repeat(n)).join("")
}

//* +) reduce 로도~

function solution(my_string, n) {
    return my_string.split('').reduce((a, b) => a + b.repeat(n),'')
}