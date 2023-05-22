// 이전 풀이
function solution(hp) {
  let ant = 0;

  for (let i = 5; i > 0; i -= 2) {
    ant += parseInt(hp / i);
    hp %= i;
  }

  return ant;
}

// 새 풀이
function solution(hp) {
  const ant5 = Math.floor(hp / 5);
  const ant3 = Math.floor((hp % 5) / 3);
  const ant1 = (hp % 5) % 3;

  return ant5 + ant3 + ant1;
}
