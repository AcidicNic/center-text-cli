module.exports = { showHelp: showHelp, parseText: parseText };

function parseText(wordArr, maxLength) {
  let textArr = [];
  let lineLength = 0;
  let lineText = "";
  // Split long text into an array of lines that fit the maxLength
  for(var i = 0; i < wordArr.length; i++) {
    let word = wordArr[i];
    lineLength += word.length + 1;
    if (word.length > maxLength) { // the given maxlength is too small!
      console.log(`The word: "${word}", doesn't fit in the given length!`);
      return -1;
    } else if (lineLength >= maxLength) {
      if (lineText !== "") {
        textArr.push(lineText);
      }
      lineText = word;
      lineLength = word.length;
    } else {
      lineText += (lineText === "") ? word : " " + word;
    }
  };
  textArr.push(lineText);

  return textArr;
}

function showHelp() {
  console.log("\nUsage: ctxt <text>");
  console.log('\nOptions:\r');
  console.log('    -l, --length <int>\t' + '(Default: Terminal Width) The character length of the space you wish to center the text inside of.');
  console.log('    -p, --padding <int>\t' + '(Default: 0) Padding for the centered text.');
  console.log('\t--version\t' + 'Show version number.');
  console.log('\t--help\t\t' + 'Show help.');
}
