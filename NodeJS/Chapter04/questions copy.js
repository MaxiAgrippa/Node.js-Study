const collectAnswers = require("./lib/collectAnswers")


const questions = [
    "name?",
    "where?",
    "do what?"
];

collectAnswers(questions, answers => {
    console.log("thank you for your answers. ");
    console.log(answers);
    process.exit();
});
