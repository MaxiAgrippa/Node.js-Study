console.log(process.pid);
console.log(process.versions.node);
console.log(process.argv);
const [firstArgument,secondArgument] = process.argv;
console.log(`firstArg: ${firstArgument}`);
console.log(`secondArgument: ${secondArgument}`);

const grab = flag => {
    let indexAfterFlage = process.argv.indexOf(flag) + 1;
    return process.argv[indexAfterFlage];
}

const greeting = grab("--greeting");
const user = grab("--user");

console.log(`${greeting} ${user}`);