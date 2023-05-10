//todo 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

//! 숫자로 안바꿈
function solution(my_string){
    return my_string.replaceAll(/[^0-9]/g, "").split("").sort((a, b) => a - b)
}


//* 숫자로 변경하는걸 안한..
function solution(my_string){
    return my_string.replaceAll(/[^0-9]/g, "").split("").sort((a, b) => a - b).map(el => parseInt(el))
}

//* 안 써 봤던 방법들
function solution(my_string){
    return str.split("").filter(el => !isNaN(el)).map(el => +el).sort((a, b) => a - b)
}