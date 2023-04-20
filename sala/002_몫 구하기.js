// 큰 수에서는 type number에 string이 들어가는 경우도 있기 때문에, 소수점 이하를 절삭하여 정수 값을 return하려는 목적으로 Math.floor 대신에 parseInt를 사용해서는 안 됩니다. 
// 이번 케이스는 제한사항이 0 < num1, num2 <= 100이므로 parseInt가 사용가능하다. 

function solution(num1, num2) {
  return parseInt(num1 / num2);
}