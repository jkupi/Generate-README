// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === "None") {
        return "";
    } else if (license === "MIT") {
        return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    } else if (license === "Apache 2.0") {
        return "![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
    } else if (license === "Boost Software License 1.0") {
        return "![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
    }
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === "None") {
        return "";
    } else if (license === "MIT") {
        return "https://opensource.org/licenses/MIT";
    } else if (license === "Apache-2.0") {
        return "https://opensource.org/licenses/Apache-2.0";
    } else if (license === "Boost Software License 1.0") {
        return "https://www.boost.org/LICENSE_1_0.txt";
    }
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === "None") {
        return "";
    }
    return `## License
    This project is licensed under the ${license} license. You can review the full license agreement at the following link: ${renderLicenseLink(license)}`;
}

// generate markdown content for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Descripton
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ${renderLicenseSection(data.license)}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, you can reach me via:
  - Github: https://github.com/${data.github}
  - Email: ${data.email}
`;
}

export default generateMarkdown;