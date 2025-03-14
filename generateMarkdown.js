// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    return `https://img.shields.io/badge/${license}-blue`
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== "none") {
        return "\n- [License](#license)\n"
    } else {
        return ""
    }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} ${renderLicenseBadge(data.license)}

## Description

 ${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
 ${renderLicenseLink(data.license)}

## Installation

 ${data.installation}

## Usage

 ${data.usage}

## License

 ${renderLicenseSection(data.license)}

## How to Contribute

 ${data.contributing}

## Tests

 ${data.testing}
`;
}
export default generateMarkdown;
