//todo 배열 두배
// map() : 어떤 배열에 있는 모든 요소들의 값을 변경해서 만든 새로운 배열을 써야 할 때
function solution (numbers){
    return  numbers.map(item => item * 2);
}

//* +) 다른사람 풀이 reduce 사용
function solution (numbers) {
    return numbers.reduce((a,b) => [...a, b * 2], []);
    // 순회 도는 값들에 각각 두배를 해준 후 초기값으로 설정된 배열안에 넣어주고[]
    //? 두루뭉식하게 이해는 되는데 왜 a를 전개구문 해주는지는 이해가 되질 않음..
}


//todo 배열 뒤집기
// reverse() 배열 메서드를 활용하여 배열을 반전하여 반환

function solution (num_list){
    return num_list.reverse();
}

//* +) 다른 사람 풀이 length와 index를 활용
function solution(num_list){
    let arr = [];
    let j = num_list.length;
    for(let i = 1; i <= j; i++){ 
        // i를 1부터 시작하는 이유는 만약 배열의 길이가 4까지 있다면 4 - 0은 4이므로 arr[4]존재하지 않는 인덱스라 undefined를 같이 배열에 반환하게 됨
      arr.push(num_list[j - i]);
    }
    return arr;
  }


//* +) 다른 사람 풀이 length와 index를 좀 더 활영해서
function solution(num_list){
    let arr = [];
    let j = num_list.length;

    for(let i = j - 1;i >= 0; i-- ){
        arr.push(num_list[i]);
    }
    // j - 1을 하게 되면 배열의 인덱스 마지막 부터 시작하게 됨, 기준점을 0으로 잡은 것은 마이너스를 하면서 i의 수가 점점 작아지게 때문에 인덱스의 제일 첫번째인 [0]보다 작아지지 않게 하기 위함이다.
}
