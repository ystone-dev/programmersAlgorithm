//todo 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.


//* filter()
function solution(array, height){
    return array.filter(el => el > height).length
}

//* for문
function solution(array, height){
    let x = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > height) {
            x.push(arr[i])
        }
    }
    return x.length
}


//* reduce()
function solution(array, height){
    return array.reduce((a,b) => b > height ? a += 1 : a, 0 )
}

//? map으로는 어떻게 하는걸까
function solution(array, height) {
    let result = 0;
    array.map((arr) => height < arr && result++); // [false, 0, 1, 2]
    //  논리연산자로 뒤 코드가 실행되게?

    return result;
}