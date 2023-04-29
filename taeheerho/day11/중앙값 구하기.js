//todo 중앙값은 어떤 주어진 값들을 크기의 순서대로 정렬했을 때 가장 중앙에 위치하는 값을 의미합니다. 예를 들어 1, 2, 7, 10, 11의 중앙값은 7입니다. 정수 배열 array가 매개변수로 주어질 때, 중앙값을 return 하도록 solution 함수를 완성해보세요.


function solution(array) {
    array.sort((a, b) => b - a); // 순서대로 정렬하고
    return array[Math.floor(array.length / 2)]; // 배열의 길이 의 딱 중간으로 나눈다음 소수점 으로 나온걸 자르면 배열의 중간 인덱스 리턴
}

//* +) 바로 뒤에 합칠수도 있구나

function solution(array) {
   return array.sort((a, b) => b - a)[Math.floor(array.length / 2)];
}
