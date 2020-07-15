const fs = require("fs");

const writeStream = fs.createWriteStream("./assets/myFile.txt", "UTF-8");
const readStream = fs.createReadStream("./assets/lorum-ipsum.md", "UTF-8");

process.stdout.write("H ");
process.stdout.write(" W\n");

writeStream.write("KKK ");
writeStream.write(" LLL\n");

// process.stdin.on("data", data => {
//     writeStream.write(data);
// });

readStream.on("data", data => {
    writeStream.write(data);
});

// process.stdin.pipe(writeStream);
readStream.pipe(writeStream);
