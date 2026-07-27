const input = process.argv.slice(2);

if (input.length > 2 || input.length < 2) {
  console.log("Pls enter a word and a number.");
  process.exit(1);
}

const letterList = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(97 + i),
);
const letterObj = {};
let result = "";
let word = input[0];
let num;

letterList.forEach((letter, ind) => {
  letterObj[letter] = ind;
});

try {
  num = Number(input[1]);
} catch {
  console.log("Pls enter a word and a number.");
  process.exit(1);
}

if (isNaN(num)) {
  console.log("Pls enter a word and a number.");
  process.exit(1);
}

[...word].forEach((letter) => {
  try {
    if (letter === letter.toLowerCase()) {
      result +=
        letterList[(letterObj[letter.toLowerCase()] + num) % letterList.length];
    } else {
      result +=
        letterList[
          (letterObj[letter.toLowerCase()] + num) % letterList.length
        ].toUpperCase();
    }
  } catch {
    console.log(
      "Pls enter a word and a number. The word may only include letters from a-z.",
    );
    process.exit(1);
  }
});

console.log(result);
