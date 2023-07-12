const fs = require("fs");
const readline = require("readline");

let input = [];
let testCaseNum = 0;
let inputIndex = 0;

if (fs.existsSync("./input.txt")) {
  input = fs.readFileSync("./input.txt").toString().split("\n");
  testCaseNum = parseInt(input.shift());
  input = input.map(n => BigInt(n));
  processInput(input);
} else {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", function (line) {
    if (testCaseNum === 0) {
      testCaseNum = parseInt(line);
    } else {
      input.push(BigInt(line));
      inputIndex++;

      if (inputIndex === testCaseNum) {
        processInput(input);
        rl.close();
      }
    }
  });
}

function processInput(inputList) {
  let maxKey;
  let maxValue = -Infinity;
  const hashMap = new Map();

  function incrementValue(key) {
    if (hashMap.has(key)) {
      const currentValue = hashMap.get(key);
      hashMap.set(key, currentValue + BigInt(1));
    } else {
      hashMap.set(key, BigInt(1));
    }
  }

  inputList.forEach((number) => {
    incrementValue(number);
  });

  hashMap.forEach((value, key) => {
    if (maxValue < value || (maxValue === value && maxKey > key)) {
      maxValue = value;
      maxKey = key;
    }
  });

  console.log(maxKey.toString());
}
