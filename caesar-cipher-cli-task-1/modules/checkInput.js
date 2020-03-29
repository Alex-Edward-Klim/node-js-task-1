const fs = require('fs');
const path = require('path');

function readText(cliOptions, mainFilePath) {

  if (cliOptions.hasOwnProperty('input')) {
  
    const inputFilePath = path.join(mainFilePath, cliOptions['input']);
  
    try {
      if (fs.lstatSync(inputFilePath).isFile()) {
        try {
          fs.accessSync(inputFilePath, fs.constants.R_OK);
          return true;
  
        } catch (err) {
          process.stderr.write(`Can NOT read file: "${inputFilePath}"`);
          process.exit(1);
        }
  
      }
    } catch (err) {
      process.stderr.write(`File "${inputFilePath}" does NOT exist!`);
      process.exit(1);
    }
  
  } else {
    return false;
  }
  
}

module.exports = readText;
