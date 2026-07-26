const vocals = new Set(["a", "e", "i", "o", "u"]);
const input = process.argv.slice(2)[0]?.toLowerCase();

function isWord(word) {
  return /^\p{L}+$/u.test(word);
}

let isInputWord = isWord(input);

if (isInputWord) {
  let ind = 0;
  for (const letter of input) {
    if (vocals.has(letter)) {
      ind > 0
        ? console.log(input.slice(ind) + "-" + input.slice(0, ind) + "ay")
        : console.log(input + "way");
      return;
    }
    ind++;
  }
}

console.log(input + "ay");
