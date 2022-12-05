const moment = require("moment");

let a = moment([1976, 10, 26]);
let b = moment();

console.log(b)

console.log(a.from(b))