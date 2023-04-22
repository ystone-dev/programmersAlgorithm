//todo 배열의 평균값

//* 새로 배운 메서드: .toFixed() : 괄호 안의 숫자 만큼 소수점을 자름
// 단, .toFixed()메서드는 문자열로 반환하기 때문에 숫자와 함께 연산하려면 다시 숫자로 변환해야함
let x = 0

function solution(numbers){
    numbers.forEach(el => {
        x += el
    })

    let y = numbers.length
    return (x / y).toFixed(1)
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99])


//* reduce()메서드 활용
// reduce는 배열의 요소를 순회하면서 누적된 결과값을 반환하고자 할 때 사용

function solution(numbers) {
    return answer = numbers.reduce((a,b) => a+b, 0) / numbers.length;
}



//todo 양꼬치


function solution(n,k) {
    const arr = [12000, 2000]
    k -= Math.floor(n / 10)

    return (arr[0] * n) + (arr[1] * k)
}

solution(10, 3)


//* +) 다른 사람 풀이 더 줄여서
function solution (n, k){
    return n * 12000 + 2000 * (k - Math.floor(n/10))
}
