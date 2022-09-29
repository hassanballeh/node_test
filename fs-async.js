const fs = require("fs");

// Calling the fs.readFile() method
// for reading file 'input1.txt'
console.log("start");
fs.readFile(
  "./content/input1.txt",
  { encoding: "utf8", flag: "r" },
  function (err, data) {
    if (err) {
      console.log(err);
      return;
    }
    const first = data;

    fs.readFile(
      "./content/input2.txt",
      { encoding: "utf-8" },
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        const second = result;
        fs.writeFile(
          "./content/all.txt",
          `Hello All: ${first} , ${second} `,
          (err, result) => {
            if (err) {
              console.log(err);
              return;
            }
            console.log("result");
          }
        );
      }
    );
  }
);
console.log("end");
