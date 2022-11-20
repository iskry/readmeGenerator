const index = require('../index.js')
const {readFileSync, writeFileSync} = require('fs')

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  writeFileSync(`./readmes/${answers.title}.md`, `# ${answers.title}`)
  writeFileSync(`./readmes/${answers.title}.md`, `
  ${answers.description}
  ${answers.installation}
  ${answers.contribute}
  ${answers.license}
  ${answers.project}`, {flag: 'a'})
}

module.exports = generateMarkdown; 
