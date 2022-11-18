// TODO: Include packages needed for this application
const genMarkdown = require("./utils/generateMarkdown")
const inquirer = require("inquirer")
const fs = require("fs")

inquirer.prompt([
    {
      name: "title",
      type: "input",
      message: "What is the title of your project?"
    },
    {
      name: "description",
      type: "input",
      message: "Provide a description of your project"
    },
    {
      name: "installation",
      type: "input",
      message: "What installation steps are necessary to run your project?"
    },
    {
      name: "contribute",
      type: "input",
      message: "How can users contribute to this project?"
    },
    {
      name: "license",
      type: "input",
      message: "What license does your project use? (unsure? visit https://www.choosealicense.com)"
    },
    {
      name: "project",
      type: "input",
      message: "What is the relative path to an image of your project?"
    },
  ])


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {

}

// Function call to initialize app
init();
