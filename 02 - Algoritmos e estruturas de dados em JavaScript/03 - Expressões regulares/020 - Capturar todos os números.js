let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Altere esta linha
let result = movieName.match(numRegex).length;

console.log(result);

/* saída do console

4

*/