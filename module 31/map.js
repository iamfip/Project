// geting things from an array

const numbers = [8, 10, 12, 14, 16, 18];
const output = [];

for (const number of numbers) {
  const result = number * 2;
  output.push(result);
}
 
console.log(output);