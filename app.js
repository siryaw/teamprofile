const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​
​
let employeeArr = [];

const initialQuestion = () => {
    inquirer.prompt([
        {
            type: 'list',
            message: 'What type of employee?',
            name: 'employeeType',
            choices: [Manager, Engineer, Intern]
        },
    ])
        .then(answer => {

            if (answer.employeeType === 'Manager') {
                managerQuestions();
            } else if
                (answer.employeeType === 'Engineer') {
                engineerQuestions();
            } else if
                (answer.employeeType === 'Intern') {
                internQuestions();
            }
            else {
                console.log('Done!');
                return;
            }
        })
}

