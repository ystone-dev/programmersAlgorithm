// 이전 풀이
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  for (let i = 1; i <= +input[0]; i++) console.log("*".repeat(i));
});

// 새 풀이
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  let answer = "";
  for (let i = 0; i < input[0]; i++) {
    answer += "*";
    console.log(answer);
  }
});
