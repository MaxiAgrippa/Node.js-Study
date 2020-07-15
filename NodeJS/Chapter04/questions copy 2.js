const collectAnswers = require("./lib/collectAnswers\ copy")


const questions = [
    "name?",
    "where?",
    "do what?"
];

const answerEvent = collectAnswers(questions);

answerEvent.on("answer", answer => {
    console.log(`question answered: ${answer}`);
});

answerEvent.on("complete", answers => {
    console.log("thank you for your answers. ");
    console.log(answers);
});

answerEvent.on("complete", () => process.exit());
