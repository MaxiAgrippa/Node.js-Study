const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    "name?",
    "where?",
    "do what?"
];

const collectAnswers = (questions, done) => {
    const answers = [];
    const [firstQuestions] = questions;

    const questionAnswered = answer => {
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        }
        else {
            done(answers);
        }
    };

    rl.question(firstQuestions, questionAnswered);

};

collectAnswers(questions, answers => {
    console.log("thank you for your answers. ");
    console.log(answers);
    process.exit();
});