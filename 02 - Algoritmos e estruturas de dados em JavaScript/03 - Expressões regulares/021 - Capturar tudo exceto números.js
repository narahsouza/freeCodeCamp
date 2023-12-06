let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Altere esta linha
let result = movieName.match(noNumRegex).length;

console.log(result);

/* saída do console

17

*/