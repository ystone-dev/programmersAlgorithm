// 배열 뒤집기
// 문제 설명
// 정수가 들어 있는 배열 num_list가 매개변수로 주어집니다. num_list의 원소의 순서를 거꾸로 뒤집은 배열을 return하도록 solution 함수를 완성해주세요.

// 제한사항
// 1 ≤ num_list의 길이 ≤ 1,000
// 0 ≤ num_list의 원소 ≤ 1,000

const solution = (num_list) => {
  let array = [];
  for (let i = num_list.length - 1; !(i === -1); i--) {
    array.push(num_list[i]);
  }
  return array;
}; //의식의 흐름

const solution = (num_list) => {
  let array = [];
  for (let i of num_list) {
    array.unshift(i);
  }
  return array;
}; //for of는 순회를 돌 때 변수에 매번 할당해서 메서드를 호출하고 unshift도 추가될 때 다른 기존 요소들의 인덱스를 하나하나씩 다 바꿔주면서 추가되기 때문에 보기엔 더 간결해보이지만 데이터가 크면 클수록 성능 문제를 야기할 수 있음

const solution = (num_list) => {
  const array = num_list.slice().reverse(); //.slice()로 복사본 생성
  return array;
};

// 머쓱이보다 키 큰 사람
// 문제 설명
// 머쓱이는 학교에서 키 순으로 줄을 설 때 몇 번째로 서야 하는지 궁금해졌습니다. 머쓱이네 반 친구들의 키가 담긴 정수 배열 array와 머쓱이의 키 height가 매개변수로 주어질 때, 머쓱이보다 키 큰 사람 수를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 1 ≤ array의 길이 ≤ 100
// 1 ≤ height ≤ 200
// 1 ≤ array의 원소 ≤ 200

const solution = (array, height) => {
  const tallerMembers = [];
  for (let i of array) {
    if (i > height) {
      tallerMembers.push(i);
    }
  }
  return tallerMembers.length;
};

const solution = (array, height) => {
  const tallerMembers = array.filter((member) => member > height);
  return tallerMembers.length;
};
