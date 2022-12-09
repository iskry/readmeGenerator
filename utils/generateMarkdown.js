// takes writeFileSync from the fs module
const {writeFileSync} = require('fs')

// function to generate README.md using the data that is passed through
function generateMarkdown(answers) {
  writeFileSync(`./result/README.md`, `# ${answers.title}
![badge](https://img.shields.io/badge/license-${answers.license}-9cf)<br />
## Description  
${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation  
${answers.installation}
## Usage
${answers.usage}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-9cf)<br />
## Contributing
${answers.contribute}
## Tests
${answers.tests}
## Questions
${answers.questions}<br /> 


Any questions?<br />

###### [GitHub](https://github.com/${answers.github})<br /> 
###### [Email](${answers.email})<br />
  `)
}
// exports generateMarkdown function from module
module.exports = generateMarkdown; 
