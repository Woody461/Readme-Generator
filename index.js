// Import required packages
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const userQuestions = [
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
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
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please write a short description of your project',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What command should be run to install dependencies?',
    default: 'npm i',
  },
  {
    type: 'input',
    name: 'test',
    message: 'What command should be run to run tests?',
    default: 'npm test',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What does the user need to know about using the repository?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repository?',
  },
];

// Function to write README file using the user input
function writeToFile(fileName, data) {
  try {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
    console.log(`File "${fileName}" successfully generated.`);
  } catch (error) {
    console.error('Error writing to file:', error);
  }
}

// Function to initialize app
function initializeApp() {
  inquirer.prompt(userQuestions)
    .then((inquirerResponses) => {
      console.log('Generating README...');
      const readmeContent = generateMarkdown(inquirerResponses);
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error('Error occurred during the initialization process:', error);
    });
}

initializeApp();
