// TODO: Create a function that returns a license badge based on which license is passed in - DONE
// If there is no license, return an empty string

// it is grabbing the license parameter from our inquirerResponses
// if there is a licence return a link to the badge otherwise return blank
// this is added under our title area

function renderLicenseBadge(license) {
  if (!license !== "None") {
    return `![Github License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return '';
}


// TODO: Create a function that returns the license link - DONE
// If there is no license, return an empty string

// it is grabbing the license parameter from our inquirerResponses
// if there is a licence return a link to the license otherwise return blank
// this is added under our table of contents section

function renderLicenseLink(license) {
  if (license !==  'None'){
    return `[License](#license)`
  }
  return '';
}


// TODO: Create a function that returns the license section of README - DONE
// If there is no license, return an empty string

// it is grabbing the license parameter from our inquirerResponses
// if there is a licence return a link otherwise return blank
// this is under our license section

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License

    This project is licensed under the ${license} license.`;
  }
  return '';
}


// TODO: Create a function to generate markdown for README - DONE

// in the other javascript file we used the inquirerResponses as the data parameter for our generateMarkdown function
// this will allow us to use dot notation to access the inquirerResponses
// the # in the table of contents will link it to the correct section of the readme
// the backtick and backslashes will provide styling 

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#contributing)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  To install the necessary dependencies, run the following command:
  
  \`\`\`
  ${data.installation}
  \`\`\`

  ## Usage
  
  \`\`\`
  ${data.usage}
  \`\`\`

  ${renderLicenseSection(data.license)}

  ## Contributing

  \`\`\`
  ${data.contributing}
  \`\`\`

  ## Tests

  To run the proper tests, use the following command:

  \`\`\`
  ${data.test}
  \`\`\`
  
  ## Questions

  If you have any question about the repository, you can contact me at ${
    data.email
  }. You can find my work at [${data.github}](https://github.com/${
    data.github
  }/).

`;
}


//  this will give instructions that tells node we will export generateMarkdown and give other files access to this  

module.exports = generateMarkdown;
