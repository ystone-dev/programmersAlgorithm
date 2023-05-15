//todo  정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

let arr = [1, 8, 3]
let result = []

// 먼저 오른차순으로 새로운 배열에 정렬하고
// indexOf 로 해당 배열의 몇번째에 있는지 반환

function solution(array) {
    let max = [];
    let result = [];
    
    array.forEach(el => max.push(el));
    max.sort((a, b) => b - a);
    result.push(max[0], array.indexOf(max[0]))
    return result
}


//* +) Math.max 까먹고 있었..
function solution(array){
    let max = Math.max(...array)
    return [max, array.indexOf(max)]
}