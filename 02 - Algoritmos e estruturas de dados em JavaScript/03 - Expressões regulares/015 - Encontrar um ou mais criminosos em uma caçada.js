let meuTeste = "CC";
let reCriminals = /C+/; // Altere esta linha
let resultadoTeste = meuTeste.match(reCriminals);

console.log(resultadoTeste);

/* Console:

[ 'CC', index: 0, input: 'CC', groups: undefined ]

*/