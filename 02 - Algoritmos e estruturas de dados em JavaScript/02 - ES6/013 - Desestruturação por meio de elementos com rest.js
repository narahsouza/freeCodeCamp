function removeFirstTwo(list) {
  const [a, b, ...arr] = source;
  return arr;
}

//const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const source = [1, 2, 3, 4, 5];
const sourceWithoutFirstTwo = removeFirstTwo(source);

console.log(sourceWithoutFirstTwo);