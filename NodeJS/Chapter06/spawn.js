const cp = require("child_process");

const questionApp = cp.spawn("node", ["questions.js"]);

questionApp.stdin.write("aaa\n");
questionApp.stdin.write("bbb\n");
questionApp.stdin.write("ccc\n");

questionApp.stdout.on("data", data => {
    console.log(`from the question app: ${data}`);
});

questionApp.on("close",()=>{
    console.log("questionApp process exited");
});