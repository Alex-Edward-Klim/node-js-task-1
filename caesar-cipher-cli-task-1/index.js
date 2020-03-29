const program = require('commander');
 
program
.storeOptionsAsProperties(false);

program
  .option('-s, --shift <number>')
  .option('-i, --input <file>')
  .option('-o, --output <file>')
  .option('-a, --action <encode or decode>');
 
program.parse(process.argv);


const cliOptions = program.opts();
const areOptionsValid = require('./modules/optionsValidationModule');
areOptionsValid(cliOptions);


const fs = require('fs');
const path = require('path');

const mainFilePath = path.join(__dirname);

const checkInput = require('./modules/checkInput');
const inputFileProvided = checkInput(cliOptions, mainFilePath);

const checkOutput = require('./modules/checkOutput');
const outputFileProvided = checkOutput(cliOptions, mainFilePath);


let myTransformStream;

if (cliOptions['action'] === 'encode') {

  const encode = require('./modules/encode.js');

  const { Transform } = require('stream');
  myTransformStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(encode(chunk.toString(), Number(cliOptions['shift'])));
      callback();
    }
  });

} else {

  const decode = require('./modules/decode.js');

  const { Transform } = require('stream');
  myTransformStream = new Transform({
    transform(chunk, encoding, callback) {
      this.push(decode(chunk.toString(), Number(cliOptions['shift'])));
      callback();
    }
  });
}


let myWriteStream;
if (outputFileProvided) {
  myWriteStream = fs.createWriteStream(path.join(__dirname, cliOptions['output']), {'flags': 'a'});
} else {
  myWriteStream = process.stdout;
}


let myReadStream;
if (inputFileProvided) {
  myReadStream = fs.createReadStream(path.join(__dirname, cliOptions['input']), { highWaterMark: 1000 });
} else {
  myReadStream = process.stdin;
}


const { pipeline } = require('stream');

pipeline(
  myReadStream,
  myTransformStream,
  myWriteStream,
  (err) => {
    if (err) {
      process.stderr.write('Pipeline failed.', err);
      process.exit(1);
    }
  }
);
