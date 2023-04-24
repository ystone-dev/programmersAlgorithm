// todo 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

//* filter() 
function solution (array, n) {
    return array.filter(item => item === n).length
}


//* for문
function solution (array, n) {
    let x = []
    for(let i = 0; i < array.length; i++) {
        if(array[i] === n){
            x.push(array[i])
        }
    }
    return x.length
}


//* reduce()
function solution (array, n) {
    return array.reduce((a,b) => b === n ? a += 1 : a, 0)
}


//* map() 
function solution (array, n) {
    let result = 0;
    return array.map(el => el === n && result++);
}