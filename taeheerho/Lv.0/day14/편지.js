//todo 머쓱이는 할머니께 생신 축하 편지를 쓰려고 합니다. 할머니가 보시기 편하도록 글자 한 자 한 자를 가로 2cm 크기로 적으려고 하며, 편지를 가로로만 적을 때, 축하 문구 message를 적기 위해 필요한 편지지의 최소 가로길이를 return 하도록 solution 함수를 완성해주세요.
// 알파벳 대소문자, ‘!’, ‘~’ 또는 공백

//! 테스트3 에서 실패
//match 메서드는 정규식과 매치되는 부분을 검색한다.
// 아무것도 입력하지 않았을때의 차이
function solution(message){
    let result = message.match(/[a-zA-Z~! ]/g).join("");
    return result.length * 2;
}


function solution(message){
    // let result = message.match(/[a-zA-Z~! ]/g).join("");
    return message.length * 2;
}

solution("") // 0

// TypeError: Cannot read properties of null (reading 'join')