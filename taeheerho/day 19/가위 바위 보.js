//todo 가위는 2 바위는 0 보는 5로 표현합니다. 가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때, rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 return하도록 solution 함수를 완성해보세요.
//결국 2 는 0 으로 0은 5로 5는 2로 변경

function solution(rsp){
    let arr = [];
    const obj = {
        2 : 0,
        0 : 5,
        5 : 2,
    }
    
    for(let i = 0; i < rsp.length; i++){
        arr.push(obj[rsp[i]])
    }
    return arr.join("")
}


//* +) map으로 가능하구나

function solution(rsp){
    const obj = {
        2 : 0,
        0 : 5,
        5 : 2,
    }
    
    return [...rsp].map(el => obj[el]).join("")
}
