const events = require("events");
const emitter = new events.EventEmitter();

emitter.on("customEvent", (message, user) => {
    console.log(`${user}: ${message}`);
})

emitter.emit("customEvent", "HW", "CPU");
emitter.emit("customEvent", "HW2", "CPU2");

process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input === "exit") {``
        emitter.emit("customEvent", "Bye", "process");
        process.exit();
    }
    emitter.emit("customEvent", input, "terminal");
});