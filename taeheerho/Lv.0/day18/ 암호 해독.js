//todo 암호화된 문자열 cipher를 주고받습니다. 그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다. 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.

// 구구단인가? 주어지는 code의 구구단

function solution(cipher, code) {
    let result ="";
    for(let i = 1; i <= cipher.length; i++){
      if(code * i <= cipher.length){
        result += cipher[code * i - 1]
        }
    }
    return result
}

//* +) code의 배수니까 반복문의 범위를 확 줄일 수 있었는데..
function solution(cipher, code){
    let result = "";
    for(let i = code - 1; i < cipher.length; i+=code){
        result += cipher[i]
    }
    return result
}


//* +)filter의 인덱스를 활용한 풀이
function solution(cipher, code){
    cipher.split("").filter((_,index) => (index + 1) % code === 0).join("")
}