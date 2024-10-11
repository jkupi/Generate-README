// packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import generateMarkdown from "./utils/generateMarkdown.js";

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions for use:'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators and any resources used:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'Apache 2.0', 'Boost Software License 1.0', 'None']
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'Provide intructions for other developers to contribute to your project'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide instructions for running tests if there are any:'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];
// function to write README file
function writeToFile(fileName, data) {
    const dir = './output';

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }

    const filePath = path.join(dir, fileName);

    fs.writeFile(filePath, data, (err) =>
        err ? console.error(err) : console.log(`${fileName} created in ${filePath}!!!`));
}

// initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const mdContent = generateMarkdown(answers);
        writeToFile('generatedREADME.md', mdContent);
    })
}

// Function call to initialize app
init();
