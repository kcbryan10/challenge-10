const inquirer = require("inquirer");
const fs = require("fs");
const manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/intern");
const generateHTML = require("./src/generateHTML")

const addManager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "who is the nmanager of this team?",
            validate: inputName => {
                if (inputName){
                    return true
                } else {
                    console.log("please enter a name for the manager!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "please enter managers id number",
            validate: inputID=> {
                if (inputID){
                    return true
                } else {
                    console.log("please enter a id for the manager!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "please enter an email for the manager!",
            validate: inputEmail => {
                if (inputEmail){
                    return true
                } else {
                    console.log("please enter a email for the manager!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "officeNumber",
            message: "please enter a office number for the manager!",
            validate: inputNumber => {
                if (inputNumber){
                    return true
                } else {
                    console.log("please enter a office number for the manager!");
                    return false;
                }
            }
        }
    ])
}

const addEmployee= () => {
    return inquirer.prompt ([
        {
            type: "list",
            name: "role",
            message: "please choose a role for your employee",
            choices: ["Intern", "Engineer"]
        },
        {
            type: "input",
            name: "name",
            message: "whats the name of the employee?",
            validate: inpuName => {
                if (inputName){
                    return true
                } else {
                    console.log("please enter a name for the employee!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "id",
            message: "please enter the employees id number",
            validate: inputID=> {
                if (inputID){
                    return true
                } else {
                    console.log("please enter a id for the eployee!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "please enter an email for the employee!",
            validate: inputEmail => {
                if (inputEmail){
                    return true
                } else {
                    console.log("please enter a email for the employee!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "please enter a github username for the employee!",
            validate: inputNumber => {
                if (inputNumber){
                    return true
                } else {
                    console.log("please enter a github username for the employee!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "name",
            message: "whats the name of the employee?",
            validate: inpuName => {
                if (inputName){
                    return true
                } else {
                    console.log("please enter a name for the employee!");
                    return false;
                }
            }
        },
    ])
}

