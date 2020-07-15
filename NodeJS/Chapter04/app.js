const counter = require("./myModule");
const { inc, dec, getCount } = require("./myModule");


counter.inc();
counter.inc();
counter.inc();
console.log(counter.getCount());
counter.dec();
console.log(counter.getCount());

inc();
inc();
inc();
dec();
console.log(getCount());