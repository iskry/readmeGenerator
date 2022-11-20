// TODO: Include packages needed for this application)
const inquirer = require("inquirer")
const { builtinModules } = require("module")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create a function to initialize app
function init() {

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
  .then((response) => {
    generateMarkdown(response)
  }
  )
}

// Function call to initialize app
init();

module.exports = init
