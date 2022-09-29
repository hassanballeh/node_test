// const names = require("./names");
// const say = require("./utiles");
// console.log(say(names.hassan));
// console.log(say(names.rama));
// require("./utiles");
const lodash = require("lodash");
const array = [2, [3, [1, [4]]]];
const news = lodash.flattenDeep(array);
console.log(news);
