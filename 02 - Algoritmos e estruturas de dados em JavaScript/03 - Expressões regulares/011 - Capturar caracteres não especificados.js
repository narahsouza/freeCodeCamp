let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou0-9]/gi; // Altere esta linha
let result = quoteSample.match(myRegex); // Altere esta linha

console.log(result);