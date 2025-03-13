// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import generateMarkdown from './generateMarkdown.js';

// TODO: Create an array of questions for user input
// Github username, email, title, description, license, installation instructions, testing instructions, usage, contributing
const questions = [
    {
        type:"input",
        name:"title",
        message:"What's the Title",
    },
    {
        type:"input",
        name:"description",
        message:"Enter description",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const template = generateMarkdown(data)
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
