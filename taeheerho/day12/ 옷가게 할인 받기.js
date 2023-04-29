//todo 머쓱이네 옷가게는 10만 원 이상 사면 5%, 30만 원 이상 사면 10%, 50만 원 이상 사면 20%를 할인해줍니다. 구매한 옷의 가격 price가 주어질 때, 지불해야 할 금액을 return 하도록 solution 함수를 완성해보세요.


// 일단 풀어서 간단하게 해보기
let price = 100000;

price = price - (price * 0.05)


//!  삼항연산자를 사용해서 풀었는데 오류
// 10만원 이상을 생각못함

function solution (price) {
    return parseInt(price >= 500000 ? price - (price * 0.2) : price >= 300000 ? price - (price * 0.1) : price - (price * 0.05))
}

//* 제출한 답 (가독성 더럽..)

function solution (price) {
    return parseInt(price >= 500000 ? price - (price * 0.2) : price >= 300000 ? price - (price * 0.1) : price >= 100000 ? price - (price * 0.05) :  price)
}

//* 조금 정리
function solution(price){
    return Math.floor(
            price >= 500000 ? price * 0.8 :
            price >= 300000 ? price * 0.9 :
            price >= 100000 ? price * 0.95 : price
    )
}


//* +) 반복문을 사용해서 풀어서 신기했던 

const discounts = [
    [500000, 0.8],
    [300000, 0.9],
    [100000,  0.05],
]

//? 근데 얘 중괄호들 어디다 갔다 버렸지..? 이게 작동이 돼?
const solution = (price) => {
    for (const discount of discounts)
        if (price >= discount[0])
            return Math.floor(price * discount[1])
    return price
}

//foreach 로 해보려고 했는데 잘 안된..
function solution(price){
    discounts.forEach(el => {
      if(price >=el[0])
         return Math.floor(price * el[1]);
    })
  }


