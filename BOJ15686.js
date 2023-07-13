const fs = require("fs")
const readline = require("readline")

let input = [];

if (fs.existsSync("./input.txt")) {
  input = fs.readFileSync("./input.txt").toString().split("\n");
  main(input);
} else {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on("line", function (line) {
    input.push(line);
  });

  rl.on("close", function (){
    main(input);
  });
}

function main(inputLines) {
  let [, M] = inputLines.shift().split(" ").map(Number);
  const house = [];
  const chicken = [];

  inputLines.forEach((line, row) => {
    line.split(" ").forEach((value, col) => {
      const intValue = parseInt(value);
      if (intValue === 1) house.push([row, col]);
      else if (intValue === 2) chicken.push([row, col]);
    });
  });

  function getDist(house, chicken) {
    return house.reduce((sum, [x1, y1]) => {
      const minDist = chicken.reduce((minD, [x2, y2]) => {
        const dist = Math.abs(x1 - x2) + Math.abs(y1 - y2);
        return Math.min(minD, dist);
      }, 100000);
      return sum + minDist;
    }, 0);
  }

  function backtracking(chicken, m, selected = [], index = 0) {
    if (selected.length === m) {
      return getDist(house, selected);
    }

    let minDist = 1e9;
    for (let i = index; i < chicken.length; i++) {
      selected.push(chicken[i]);
      minDist = Math.min(minDist, backtracking(chicken, m, selected, i + 1));
      selected.pop();
    }

    return minDist;
  }

  const minChickenDist = backtracking(chicken, M);
  console.log(minChickenDist);
}