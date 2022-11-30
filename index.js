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
    },
    {
        type: "input",
        name: "github",
        message: "GitHub Username: ",
        validate: githubInput => {
            if (githubInput) {
                return true;
            }
            else {
                console.log("Enter your GitHub username");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "repository",
        message: "GitHub Repo Name: ",
        validate: repositoryInput => {
        if (repositoryInput) {
            return true;
            }
            else {
                console.log("Enter your GitHub Repository name");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "use",
        message: "Enter the use of your application: ",
        validate: useInput => {
            if (useInput) {
                return true;
            }
            else {
                console.log("Enter the use of your application");
                return false;
            }
        }
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(`./dist/${filename}`, data, err => {
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
    .then(generateReadme => writeToFile("README.md", generateReadme))
    .catch(err => {
        console.log(err);
    });
