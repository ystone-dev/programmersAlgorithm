//todo 배열 자르기
// slice를 이용한 배열 , 원본 배열에 영향을 미치지 않고 인수가 2개 들어가고 각각 start ~ end전까지 자른 배열을 반환함

function solution (numbers, num1, num2) {
    return numbers.slice(num1, num2 + 1);
  }


//* +) 다른사람풀이 for 반복문 
function solution (numbers, num1, num2) {
    let arr = [] // 초기화
    for(let i = num1; i <= num2; i++) { // start~end Rkwl
      arr.push(numbers[i]) // arr에 해당 배열의 인덱스를 푸쉬
    }
    return arr
}

//* +) 다른사람풀이 fillter()
function solution(numbers, num1, num2) {
  return numbers.filter((_, idx) => idx >= num1 && idx <= num2);
}



//todo 점의 위치 구하기
//* 가장 단순하게 생각하는 형태 조건문
function solution(dot){
    if(dot[0] > 0 && dot[1] > 0) {
      return 1
    } else if(dot[0] > 0 && dot[1] < 0) {
      return 4
    } else if (dot[0] < 0 && dot[1] > 0) {
      return 2
    } else {
      return 3
    }
  }

  
// 좀 더 간다하게 표현할 수 있지 않을까..
// 0보다 크다 작다 로 구분이 가능한데 활용할 수 있지않을까


//* 삼항연산자로 해볼까?

function solution(dot) {
    return dot[0] > 0 ? dot[1] > 0 ? 1 : 4 : dot[1] > 0 ? 2 : 3;
}