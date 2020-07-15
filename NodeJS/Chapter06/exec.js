const cp = require("child_process");
// cp.exec("open https://www.google.com");
// cp.exec("open -a Terminal .");
cp.exec("ls", (err, data, stderr) => {
    if (err) {
        throw err;
    }
    console.log(data);
    console.log(stderr);
});