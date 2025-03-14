// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import generateMarkdown from './generateMarkdown.js';
import fs from 'fs';

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
    {
        type:"input",
        name:"install",
        message:"How should this application be installed?"
    },
    {
        type:"input",
        name:"install",
        message:"How should this application be installed?"
    },
    {
        type:"input",
        name:"install",
        message:"How should this application be installed?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const template = generateMarkdown(data);
    console.log("Template: ", template);

    // Now we need to WRITE the data to file
    // module.method("filename", data to Write, callback(err))
    fs.writeFile()

}

// TODO: Create a function to initialize app
function init() {

    // How do we Prompt the User with a Question? And how do we CAPTURE the user input? 
    inquirer.prompt(questions)
            .then(function(answers) {
                // IF the ASYNC operation is SUCCESSFUL--> Then we do something with the data returned
                console.log("Results: ", answers)
                writeToFile("README.md", answers) 
            })
            .catch(function(error) {
                // IF the ASYNC operation returns an ERROR--> Then we handle the ERROR  
                console.log("Error: ", error);
            })

    }
    
    // Function call to initialize app
init();
