function areOptionsValid(cliOptions) {

  if (!(cliOptions.hasOwnProperty('action') && cliOptions.hasOwnProperty('shift'))) {
    process.stderr.write('"--action" (encode/decode) and "--shift" (number) are required!');
    process.exit(1);
  }
  
  const actionOption = cliOptions['action'].toLowerCase();
  if (!(actionOption === 'encode' || actionOption === 'decode')) {
    process.stderr.write(`"--action" option is not correct! You\'ve entered "${cliOptions['action']}"! Please, specify either "encode" or "decode"! Also be careful with single "-" and double "--" dashes, because "--action" is correct, but "-action" is NOT correct!`);
    process.exit(1);
  }
  
  const shiftOption = Number(cliOptions['shift']);
  if (isNaN(shiftOption)) {
    process.stderr.write(`"--shift" option is not correct! You\'ve entered "${cliOptions['shift']}"! Please, enter a number only! Also be careful with single "-" and double "--" dashes, because "--shift" is correct, but "-shift" is NOT correct!`);
    process.exit(1);
  }

}

module.exports = areOptionsValid;
