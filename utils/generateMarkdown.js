// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function getLicenseBadge(license) {
    if (license !== 'None') {
        return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return '';
}

// Create a function that returns the license link
// If there is no license, return an empty string
function getLicenseLink(license) {
    if (license !== 'None') {
        return `\n* [License](#license)\n`;
    }
    return '';
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function getLicenseSection(license) {
    if (license !== 'None') {
        return `## License
  
This project is licensed under the ${license} license.`;
    }
    return '';
}

// Create a function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${getLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)
${getLicenseLink(data.license)}
* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${getLicenseSection(data.license)}
    
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact me directly at ${
        data.email
    }. You can find more of my work at [${data.github}](https://github.com/${
        data.github
    }/).

`;
}

module.exports = generateMarkdown;