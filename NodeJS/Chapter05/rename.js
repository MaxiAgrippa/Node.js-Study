const fs = require("fs");

fs.renameSync("./assets/colors\ copy.json", "./assets/colorData.json");

fs.rename("./assets/colorData.json", "./storage-files/colorData.json", err => {
    if (err) {
        throw err;
    }
});

setTimeout(() => {
    fs.unlinkSync("./storage-files/colorData.json");
}, 4000);