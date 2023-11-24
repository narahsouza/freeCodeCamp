let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Altere esta linha
let result = quoteSample.match(vowelRegex);; // Altere esta linha

console.log(result);

/*
[ 'e',
  'a',
  'e',
  'o',
  'u',
  'i',
  'e',
  'a',
  'o',
  'e',
  'o',
  'e',
  'I',
  'a',
  'e',
  'o',
  'o',
  'e',
  'i',
  'o',
  'e',
  'o',
  'i',
  'e',
  'i' ]
*/