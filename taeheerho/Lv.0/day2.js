//todo 나머지 구하기

//* 함수 선언문
function solution(num1, num2){
    return num1 % num2
    }

//* 함수 표현식
let solution = function (num1, num2){

    return num1 % num2
    }

//* 화살표 함수
let solution = (num1, num2) => num1 % num2;


//todo 숫자 비교하기

function solution(num1, num2){
    if(num1 === num2){
        return 1
    } else {
        return -1
    }
    }


//* 만약 타입을 상관하지 않고 비교한다면
function solution(num1, num2){
    if(parseInt(num1) === parseInt(num2)){
        return 1
    } else {
        return -1
    }
    }

//*  만약 타입에 상관없이 정수만 비교한다면
function solution(num1, num2){
    if(Math.floor(num1) === Math.floor(num2)){
        return 1
    } else {
        return -1
    }
    }


//* +)삼항연산자를 이용한 풀이
let solution = (num1, num2) => 
Math.floor(num1) === Math.floor(num2)? 1 : -1

//* +) 자동 형변환을 이용한 풀이
// 함수와 연산자에 전달되는 값은 대부분 적절한 자료형으로 자동 형변환된다.
// prompt로 받은 값이 문자형으로 자동현변환 되듯 수학관련 연산자가 전달받은 값은 숫자로 형변환 된다.

let solution = (num1, num2) => {
    return ((num1 === num2) - 0.5) * 2
}

// true 일 경우 (1 - 0.5) * 2 // 1
// false 일 경우 (0 - 0.5) * 2 // -1


//todo 나이 출력
// 나이가 주어질 경우 2022년을 기준으로 출생연도
// 태어난 연도에 1살
// 2022 - age + 1 = 태어난 년도

let solution = age => 2022 - age + 1;

//* +) new Date 를 활용한 문제풀이
// 단 2022년 기준이 아닌 현재 년도를 기준으로
// .new Date() 에서 매개변수를 제공하지 않으면, 생성 순간의 날짜와 시간을 반환(오늘 날자를 생성할때 많이 사용)

let solution = (age) => new Date().getFullYear() - age + 1;


//todo 두 수의 나눗셈

//* 정수로 만드는 여러가지 방법1 Math.floor()
let solution = (num1, num2) => {
    return Math.floor(num1 / num2 * 1000);
  }

//* 정수로 만드는 여러가지 방법2 parseInt()
let solution = (num1, num2) => {
    return parseInt(num1 / num2 * 1000);
  }
  
  //* 정수로 만드는 여러가지 방법3 ~~
let solution = (num1, num2) => {
    return ~~(num1 / num2 * 1000);
  }

  // ~ 는 틸트 연산자는 비트단위 연산자로 2진수로 바꿔버린 후 연사을 진행한다. (비트 단위 연산자 중에 Not을 진행하는 연산자)(정수로 바꿔주기도 함)
  // 틸트 연산자를 사용하면 부정의 부정이기 때문에 소수점을 없앤 정수로 돌려준다. 
