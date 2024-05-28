// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fileName = "./README.md";

// TODO: Create an array of questions for user input

const questions = [
    {
    type: "input",
    message: "What is the title of the project?",
    name: "title",
    },

    {
    type: "input",
    message: "Please add a description of the project.",
    name: "description",
    },

    {
    type: "input",
    message: "Please explain the installation of the project.",
    name: "installation",
    },

    {
    type: "input",
    message: "Please enter the usage of the project.",
    name: "usage",
    },

    {
    type: "list",
    message: "Please select the license that is used for this project.",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "None"],
    name: "license",
    },

    {
    type: "input",
    message: "Please add an email.",
    name: "email",
    },

    {
    type: "input",
    message: "Please add your GitHub username.",
    name: "username",
    },
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) => err
        ? console.error(err)
        : console.log("If you see this message, the Readme.md should have been created.")
);
}

// TODO: Create a function to initialize app

function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile(fileName, generateMarkdown(data));
});
}
// Function call to initialize app

init();
