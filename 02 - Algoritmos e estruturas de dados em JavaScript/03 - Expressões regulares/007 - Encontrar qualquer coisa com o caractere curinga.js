let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/g; // Altere esta linha
let result = unRegex.test(exampleStr);

console.log(result); // true
console.log(exampleStr.match(unRegex)); // [ 'fun' ]