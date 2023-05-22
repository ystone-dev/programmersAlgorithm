//todo 
//처음에 parseInt로 해보려고 했으나 parseInt는 딱 첫 숫자만 반환해붐 문자 부터 시작하면 NaN을 반환

//* 정규표현식 활용
// 1. match() 정규표현식과 일치하는것을 배열로 반환
// 2. replace() 첫번째 인자로 받은 정규표현식을 2번째 인자로 받은것으로 반환

const str = "aAb1B2cC34oOp"
str.match(/[0-9]/g)
str.replaceAll(/[^0-9]/g, "")


function solution(my_string) {
    let sum = my_string.match(/[0-9]/g);
    return sum.reduce((a, b) => a + parseInt(b), 0)
    // 이번에 배운 현재 값 자체에 parseInt를 줌
}

//* +) 다른 사람 풀이 이걸 삼항연산자로??

function solution(my_string) {
    const sum = Array.from(my_string);
    return sum.reduce((a, b) => Number(b) ? a + Number(b) : a, 0 )
    //문자열을 Number로 형변환 하려고 할때 NaN(= false)가 뜨는 것을 활용
}


//* +) isNaN 활용
function solution(my_string){
    return my_string.split("").filter(el => !isNaN(el)).reduce((a, b) => a + parseInt(b), 0)
}