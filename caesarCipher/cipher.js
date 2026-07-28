const input = process.argv.slice(2);

// ZU WENIGE/VIELE EINGABEN
if (input.length !== 2) {
  console.log("Pls enter a word and a number.");
  process.exit(1);
}

// BUCHSTABENLISTE
const letterList = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i),
);
const letterObj = {};
let result = "";
let word = input[0];
let num;

// BUCHSTABEN OBJECT
letterList.forEach((letter, ind) => {
  letterObj[letter] = ind;
});

// NUMMER UMWANDELN UND TESTEN
num = Number(input[1]);

if (isNaN(num)) {
  console.log("Pls enter a word and a number.");
  process.exit(1);
}

// RESULT ZUSAMMENSETZEN
for (const letter of word) {
  const letterLow = letter.toLowerCase();
  const k = letterList.length;

  if (!Object.hasOwn(letterObj, letterLow)) {
    result += letter;
    continue;
  }

  const newLetter = letterList.at((letterObj[letterLow] + num) % k);
  // ALTERNATIV:
  // const newLetter = letterList[(((letterObj[letterLow] + num) % k) + k) % k];

  if (letter === letterLow) {
    result += newLetter;
  } else {
    result += newLetter.toUpperCase();
  }
}

console.log(result);
