let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Altere esta linha
let result = quoteSample.match(nonAlphabetRegex).length;

console.log(result);

/* saída do console

6

*/