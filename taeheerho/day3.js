//todo 각도기


//* if문
function solution(angle) {
    if (angle === 90) {
        return 2;
    } else if (angle === 180) {
        return 4;
    } else if (angle < 90){
        return 1;
    } else {
        return 3;
    }
    }


//* 삼항연산자
function solution(angle) {
   return angle === 90 ? 2 : (angle === 180) ? 4 : (angle < 90) ? 1 : 3
}


//! 처음에 시도했을땐 못했음
//* switch 문
// switch 문은 일반 if조건문과 다르게 부등식을 쓸 수 없음 if문이 true일 경우 실행이 된다면 switch문은 출력되는 변수가 어떤값을 지니냐에 따라 실행문을 선택
// 신기한게 default에는 삼항연산자가 들어가며, break 대신 return을 쓰는 점
function solution(angle) {
    switch(angle) {
        case 90:
            return 2;
        case 180:
            return 4;
        default:
            return angle < 90 ? 1 : 3
    }
}



//?? +) 다른사람풀이. filter() 활용 (전혀 이해를 못함)

function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle>=x).length;
}




//todo 짝수의 합
// 정말 헷갈렸던..

//! 결과 값이 안나왔던 처음
function solution(n) {
    let x = 0;
    for(let i = 0; i <= n; i++){
      if(i % 2 === 0){
        return x += i // for 문은 return을 만나자마자 반복 종료 0 만 반환
      }
      // return x += i 했어도 i가 반복문 밖으로 나와있기 때문에 찾을 수 없을것
    }
  }
  


//* 답으로 제출한거
function solution(n) {
    let x = 0 // x 값 초기화
    for(let i = 1; i <= n; i++){ // 반복할 범위 설정
      i % 2 === 0 ? x += i : x = x // 짝수 일때만 더하고 홀수일땐 값의 변화가 없음
    }
    return x 
  }

//* +) 삼항연산자를 쓰지 않고 짝수만 더하기 i를 2씩 올리기
function solution (n) {
    let x = 0
    for(let i = 2; i <= n; i += 2){
      x += i
    }
    return x
  }

//* +) 수학공식을 사용한 접근 (수열공식)
//
function solution(n) {
    let half = Math.floor(n / 2); // 홀수는 무조건 .5로 떨어지는데 이걸 정수로 바꿔버리면서 짝수만 값이 할당받게 됨
    return half * (half + 1);
    // 이게 잘 이해가 안되는데 이 공식으로 하니 그 아래 짝수 값들만 다 더한값과 같아짐..
  }