//todo 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

//* 정규표현식을 이용한 풀이
function solution(my_string){
    return my_string.replaceAll(/[aeiou]/g,"");
}

//* +) for문과 includes 메서드를 활용한 풀이
// includes 메서드는 배열에 특정 요소가 있는지 확인하는 용도이다.

function solution(my_string){
    let result ='';
    for(let i = 0; i < my_string.length; i++){
        if(!vowels.includes(my_string[i])){
        result += my_string[i];
        }
    }
    return result;
}



//* +)승표님의 indexOf 활용답
function solution(my_string) {
    var answer = '';
    let arr =['a','e','i','o','u'];
    let test = my_string.split("").filter(el=>{
        return arr.indexOf(el) === -1;
    })
    answer = test.join("");
    return answer;
}