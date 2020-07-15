const fs = require("fs");

fs.renameSync("./storage-files\ copy", "./storage");

fs.readdirSync("./storage").forEach(fileName => {
    fs.unlinkSync(`./storage/${fileName}`);
});

fs.rmdir("./storage", err => {
    if (err) {
        throw err;
    }
    console.log("storage removed.")
});