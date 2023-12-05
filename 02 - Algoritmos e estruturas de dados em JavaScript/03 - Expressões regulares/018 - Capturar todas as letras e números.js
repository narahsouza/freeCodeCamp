let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Altere esta linha
let result = quoteSample.match(alphabetRegexV2).length;

console.log(result);

/* saída do console

31

*/