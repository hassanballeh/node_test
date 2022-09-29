// resolve: [Function: resolve],
//   normalize: [Function: normalize],
//   isAbsolute: [Function: isAbsolute],
//   join: [Function: join],
//   relative: [Function: relative],
//   toNamespacedPath: [Function: toNamespacedPath],
//   dirname: [Function: dirname],
//   basename: [Function: basename],
//   extname: [Function: extname],
//   format: [Function: bound _format],
//   parse: [Function: parse],
//   sep: '\\',
//   delimiter: ';',
//   win32: [Circular *1],
//   posix: <ref *2> {
//     resolve: [Function: resolve],
//     normalize: [Function: normalize],
//     isAbsolute: [Function: isAbsolute],
//     join: [Function: join],
//     relative: [Function: relative],
//     toNamespacedPath: [Function: toNamespacedPath],
//     dirname: [Function: dirname],
//     basename: [Function: basename],
//     extname: [Function: extname],
//     format: [Function: bound _format],
//     parse: [Function: parse],
//     sep: '/',
//     delimiter: ':',
//     win32: [Circular *1],
//     posix: [Circular *2],
//     _makeLong: [Function: toNamespacedPath]
//   },
//   _makeLong: [Function: toNamespacedPath]
const path = require("path");
// console.log(path);
// console.log(__dirname);
// console.log(path.dirname(__dirname));
// console.log(path.dirname(__filename));
// console.log(__filename);
const fileName = path.join("content", "text.txt");
// console.log(fileName);
// console.log(path.basename(fileName, "txt"));
console.log(path.resolve(fileName));
