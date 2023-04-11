// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return ''; // Return empty string if no license provided
  }

  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GNU GPL v3':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    // Add additional cases for other licenses as needed
    default:
      return ''; // Return empty string if an unrecognized license is provided
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function starts with an if statement that checks if a license was provided as input. If no license was provided, the function returns an empty string.
function renderLicenseLink(license) {
  if (!license) {
    return ''; // Return empty string if no license provided
  }

  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GNU GPL v3':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    // Add additional cases for other licenses as needed
    default:
      return ''; // Return empty string if an unrecognized license is provided
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''; // Return empty string if no license provided
  }

  const licenseLink = renderLicenseLink(license); // Get the license link using the renderLicenseLink function
  const licenseBadge = renderLicenseBadge(license); // Get the license badge using the renderLicenseBadge function

  return `## License

${licenseBadge}

This project is licensed under the terms of the [${license}](${licenseLink}) license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // Get the license section using the renderLicenseSection function
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseSection}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributors](#contributing)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}


## Tests

${data.tests}

## Contributors

${data.contributing}

## License

[${data.license}](${renderLicenseLink(data.license)})

If you have any questions, please [contact me](mailto:${data.email}). You can also find me on [GitHub](https://github.com/${data.github}).`;
}

module.exports = generateMarkdown;
