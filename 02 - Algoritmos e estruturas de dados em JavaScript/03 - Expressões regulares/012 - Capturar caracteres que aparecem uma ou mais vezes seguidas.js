let difficultSpelling = "Mississippi";
let myRegex = /s+/g; // Altere esta linha
let result = difficultSpelling.match(myRegex);

console.log(result);