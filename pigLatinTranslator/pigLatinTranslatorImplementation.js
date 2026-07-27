const vocals = new Set(["a", "e", "i", "o", "u"]);
const firstInput = process.argv.slice(2)[0];
const input = firstInput;

// TEST, OB ES SICH UM EIN WORT HANDELT - (BUCHSTABENTEST)
function isWord(word) {
  return /^\p{L}+$/u.test(word);
}

let isInputWord = isWord(input);

// ANWENDUNG DER REGELN AUF DEN INPUT - WORT-KREATION
if (isInputWord) {
  let ind = 0;
  for (const letter of input) {
    if (vocals.has(letter.toLowerCase())) {
      ind > 0
        ? console.log(input.slice(ind) + "-" + input.slice(0, ind) + "ay")
        : console.log(input + "-way");
      return;
    }
    ind++;
  }
} else {
  console.log(`${input} ist nicht gültig. Bitte gib ein Wort ein.`);
  process.exit(1);
}

// FALLS DAS WORT KEIN VOKAL ENTHÄLT
console.log(input + "-ay");
