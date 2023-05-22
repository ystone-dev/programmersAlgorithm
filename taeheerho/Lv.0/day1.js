//todo 두 수의 합


//* 함수 선언문
function solution (num1, num2){
    return num1 + num2;
}

//* 함수 표현식
let solution = function (num1, num2){
    return num1 + num2;
}

//* 화살표 함수
let solution = (num1, num2) => num1 + num2;



//todo 두 수의 차

//* 함수 선언문
function solution (num1, num2){
    return num1 - num2;
}

//* 함수 표현식
let solution = function (num1, num2){
    return num1 - num2;
}

//* 화살표 함수
let solution = (num1, num2) => num1 - num2;


//todo 두 수의 곱

//* 함수 선언문
function solution (num1, num2){
    if(num1 >= 0 && num1 <= 100){
        if(num2 >= 0 && num2 <= 100){
            return num1 * num2;
        }
    }
}

//* 함수 표현식
let solution = function (num1, num2){
    if(num1 >= 0 && num1 <= 100){
        if(num2 >= 0 && num2 <= 100){
            return num1 * num2;
        }
    }
}

//* 화살표 함수
let solution = (num1, num2) => {
    if(num1 >= 0 && num1 <= 100){
        if(num2 >= 0 && num2 <= 100){
            return num1 * num2;
        }
    }
}


//todo 몫 구하기

//* 함수 선언문
function solution (num1, num2){
    if(num1 >= 0 && num1 <= 100){
        if(num2 >= 0 && num2 <= 100){
            return Math.floor(num1 / num2);
        }
    }
}

//* 함수 표현식
let solution = function (num1, num2){
    if(num1 >= 0 && num1 <= 100){
        if(num2 >= 0 && num2 <= 100){
            return Math.floor(num1 / num2);
        }
    }
}

//* 화살표 함수
let solution = (num1, num2) => {
    if(num1 >= 0 && num1 <= 100){
        if(num2 >= 0 && num2 <= 100){
            return Math.floor(num1 / num2);
        }
    }
}
