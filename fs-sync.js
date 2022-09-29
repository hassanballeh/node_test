const fs = require("fs");
console.log("start");
const first = fs.readFileSync("./content/input1.txt");
const second = fs.readFileSync("./content/input2.txt");
fs.writeFileSync("./content/alll.txt", `Hello :${first} , ${second}`);
console.log("result");
console.log("end");
