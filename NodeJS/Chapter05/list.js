const fs = require("fs");

console.log("start read file");
const files = fs.readdirSync("./assets");
console.log("finish read file");
console.log(files);

console.log("start read file");
fs.readdir("./assets", (err, filesA) => {
    if (err) {
        throw err;
    }
    console.log("finish read file");
    console.log(files);
});
console.log("Is it finish read file?");
