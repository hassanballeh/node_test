const os = require("os");
console.log(os.userInfo());
console.log(os.uptime());
const current = {
  type: os.type(),
  relase: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(current);
