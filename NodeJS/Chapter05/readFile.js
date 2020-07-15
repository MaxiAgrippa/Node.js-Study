const fs = require("fs");

const text = fs.readFileSync("./assets/Readme.md", "utf-8");

console.log(text);

console.log("readFile().")
fs.readFile("./assets/Readme.md", "utf-8", (err, textA) => {
    if (err) {
        console.log(`An error occured: ${err.message}`);
        process.exit();
    }
    console.log("file content read.");
    console.log(textA);
});

console.log("readFile().")
fs.readFile("./assets/alex.jpg", (err, img) => {
    if (err) {
        console.log(`An error occured: ${err.message}`);
        process.exit();
    }
    console.log("file content read.");
    console.log(img);
});
