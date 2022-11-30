// packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");
const fs = require("fs");
// Created an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Project Title: ",
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log("Enter a title");
                return false;
            }
        }
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./dist/${filename}`, data, err => {
        if (err) {
            throw err
        };
        console.log("Created a README")
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
};

// Function call to initialize app
init()
    .then(answers => generateMarkdown(answers))
    .then(generateReadme => writeFile("README.md", generateReadme))
    .catch(err => {
        console.log(err);
    });
