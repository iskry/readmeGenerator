// TODO: Include packages needed for this application)
const inquirer = require("inquirer")
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
      name: "usage",
      type: "input",
      message: "How will users interact with your project?"
    },
    {
      name: "license",
      type: "list",
      message: "What license does your project use? (unsure? visit https://www.choosealicense.com)",
      choices: [
        "None",
        "Apache2.0",
        "GNU Public v3.0",
        "MIT",
        "Boost Software 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public 2.0",
        "GNU Affero General Public v3.0",
        "GNU General Public v2.0",
        "GNU Lesser General Public v2.1",
        "Mozilla Public 2.0",
        "the Unilicense"
      ]
    },
    {
      name: "contribute",
      type: "input",
      message: "How can users contribute to your project?"
    },
    {
      name: "tests",
      type: "input",
      message: "Is there a test included?"
    },
    {
      name: "questions",
      type: "input",
      message: "What should a user do if they have an issue?"
    },
    {
      name: "username",
      type: "input",
      message: "What is your GitHub username?"
    },
    {
      name: "email",
      type: "input",
      message: "What is your e-mail?"
    },
  ])
  .then((response) => {
    console.log(response)
    generateMarkdown(response)
  }
  )
}

// Function call to initialize app
init();


