const fs = require("fs");

const md = `
# A new file
* readdir
* readFile
* write FIle
`;

fs.writeFile("./assets/notes.md", md.trim(), err => {
    if (err) {
        throw err;
    }
    console.log("file saved.");
});