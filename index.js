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
            name: "nofficeNumber",
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