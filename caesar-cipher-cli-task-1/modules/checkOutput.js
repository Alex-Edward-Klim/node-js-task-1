const fs = require('fs');
const path = require('path');

function writeText(cliOptions, mainFilePath) {

  if (cliOptions.hasOwnProperty('output')) {
  
    const outputFilePath = path.join(mainFilePath, cliOptions['output']);
  
    try {
      if (fs.lstatSync(outputFilePath).isFile()) {
        try {
          fs.accessSync(outputFilePath, fs.constants.W_OK);
          return true;
  
        } catch (err) {
          process.stderr.write(`Can NOT write into this file: "${outputFilePath}"`);
          process.exit(1);
        }
  
      }
    } catch (err) {
      process.stderr.write(`File "${outputFilePath}" does NOT exist!`);
      process.exit(1);
    }
  
  } else {
    return false;
  }
}

module.exports = writeText;
