//todo 문자열 my_string과 문자 letter이 매개변수로 주어집니다. my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

//split, filter, join 메서드 할용

function solution (my_string, letter) {
    const arr = my_string.split('')
    return arr.filter(el => el != letter).join('');
}

//* +) split 좀 더 활용편..!

function solution(my_string, letter) {
    my_string.split(letter).join("")
    //  제거할 문자로 구분하면 자연스럽게 빠지겠구나..
}


//* +) join 도 필요없음! replace활용
function solution(my_string, letter) {
    my_string.replaceAll(letter, "")
}
