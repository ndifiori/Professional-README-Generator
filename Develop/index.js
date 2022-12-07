// TODO: Include packages needed for this application - DONE

// let's use require (a built in function) to include external modules

const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input - DONE

// need to add objects in our array for github username, email address,  title, description, licenses, installation, test, usage, contributing 

const questions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your Github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'title',
    message: "What is your project's name?",
  }, {
    type: 'input',
    name: 'description',
    message: 'Pleae write a short description of your project?',
  }, {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  }, {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm i',
  }, {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test'
  }, {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repository?',
  }, {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repository?',
  },
];


// TODO: Create a function to write README file - DONE

// we will use a function that returns the fs module that allows to write a file
// we are using the path module to add our filename to our current working directory
// process.cd will give us the working directory and then we have our file name
// data is our parameter that will be written to the file

function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


// TODO: Create a function to initialize app - DONE

// use inquirer promise documentation to take in questions from the array and THEN lets use the users responses 
// console log that we are generating user readme file
// now we need to write the file (README.md) and then we need a data parameter
  // in this case the data parameter is going to use our inquirerResponses as the data parameter to our linked generateMarkdown 

function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log('Generating README');
    writeToFile('README.md', generateMarkdown({...inquirerResponses}));
  });
}


// TODO: Function call to initialize app - DONE

// this will run above functions

init();
