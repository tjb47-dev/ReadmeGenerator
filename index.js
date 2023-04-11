// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");


// function to initialize app
function init() {
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project?",
    },
    {
        type: 'input',
        name: 'description',
        message: "Provide a description of your project?",
    },
    {
        type: 'input',
        name: 'installation',
        message: "How do you install your project?",
    },
    {
        type: 'input',
        name: 'usage',
        message: "What is the usage of this project?",
    },
    {
        type: 'list',
        name: 'license',
        message: "Do you have a Choice of License?",
        choices: ['MIT License', 'Apache License 2.0', 'GNU GPLv3', 'None'],
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Where there any contributors to this project?",
    },
    {
        type: 'input',
        name: 'tests',
        message: "Any tests examples?",
    },     
    {
        type: 'input',
        name: 'github',
        message: "Please provide your github.",
    },     
    {
        type: 'input',
        name: 'email',
        message: "Please provide your email.",
    },
])
.then((data) => {
  writeToFile("README.md", generateMarkdown(data));
});
};

//function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!, your Readme.md has been generated.'));
  }

// Function call to initialize app
init();
