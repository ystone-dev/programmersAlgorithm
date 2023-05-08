// 이전 풀이
function solution(rsp) {
  const rspArr = [2, 0, 5];

  return rsp
    .split("")
    .map((v) => rspArr[rspArr.indexOf(+v) === 2 ? 0 : rspArr.indexOf(+v) + 1])
    .join("");
}

// 새 풀이
function solution(rsp) {
  return rsp.replace(/./g, (cur) => {
    if (cur === "0") {
      return 5;
    } else if (cur === "2") {
      return 0;
    } else {
      return 2;
    }
  });
}
