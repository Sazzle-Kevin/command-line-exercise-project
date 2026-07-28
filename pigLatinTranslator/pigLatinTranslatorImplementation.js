const vocals = new Set(["a", "e", "i", "o", "u"]);
const input = process.argv.slice(2);
const k = input.length;

// ANWENDUNG DER REGELN AUF DEN INPUT - WORT-KREATION
for (let i = 0; i < k; i++) {
  const word = input[i];
  const l = word.length;
  let j = 0;
  let newWord = "";

  for (j = 0; j < l; j++) {
    const letter = word[j];
    if (vocals.has(letter.toLowerCase())) {
      j > 0
        ? (newWord = word.slice(j) + "-" + newWord + "ay")
        : (newWord = word + "-way");
      input[i] = newWord;
      break;
    } else {
      newWord += letter;
    }
  }
  // FALLS DAS WORT KEINEN VOKAL ENTHÄLT
  if (j >= l) {
    input[i] = newWord + "-ay";
  }
}

console.log(input.join(" "));
