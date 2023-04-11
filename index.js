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
        message: "1. What's the title of your project?",
    },


])
}

// Function call to initialize app
init();
