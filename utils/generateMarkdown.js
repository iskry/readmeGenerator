const {writeFileSync} = require('fs')

// TODO: Create a function to generate markdown for README
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
${answers.license}
## Contributing
${answers.contribute}
## Tests
${answers.tests}
## Questions
${answers.questions}<br /> 


Any questions?<br />

###### [GitHub](https://github.com/test)<br /> 
###### [Email](https://github.com/test)<br />
  `)
}

module.exports = generateMarkdown; 
