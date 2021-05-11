const yargs = require("yargs");

const usage = "\nUsage: ctxt <text>";
const options = yargs
  .usage(usage)
  .option("l", {
    alias:"length",
    describe: "(Default: Terminal Width) The character length of the space you wish to center the text inside of.",
    type: "integer",
    demandOption: false
  })
  .option("p", {
    alias:"padding",
    describe: "(Default: 0) Padding for the centered text.",
    type: "integer",
    demandOption: false
  })
  .help(true)
  .argv;

const utils = require('./utils.js')

if (yargs.argv._[0] == null) {
  utils.showHelp();
  return;
}

const maxLength = yargs.argv.length || process.stdout.columns;
const paddingLength = yargs.argv.padding || 0;

const textLines = utils.parseText(yargs.argv._, maxLength - paddingLength * 2);
if (textLines == -1) {
  utils.showHelp();
  return;
}


for (var i = 0; i < textLines.length; i++) {
  line = textLines[i];
  marginTxt = " ".repeat(((maxLength-line.length)/2));
  centeredLine = `${marginTxt}${line}${marginTxt}`
  if (centeredLine.length != maxLength) {
    centeredLine += " ";
  }
  console.log(centeredLine)
}
