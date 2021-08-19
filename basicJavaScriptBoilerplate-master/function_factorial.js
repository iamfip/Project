// function getFactorial(number) {
//   let factorial = 1;
//   for (i = 1; i <= number; i++) {
//     factorial = factorial * i;
//   }
//   return factorial;
// }

// var myFactorial = 170;
// var myFactorialResult = getFactorial(myFactorial);
// console.log(myFactorialResult + " - is my final result");

// -----------------------------------------------------------------------

// function getFactorial (number){
//     let factorial= 1;
//     let i=number;
//     while (i>= 1) {

//         factorial = factorial * i;
//         i--;
//     }
//     return factorial;
// }
// var myFactorial = 6;
// var myFactorialResult = getFactorial(myFactorial);
// console.log(myFactorialResult + " - is my final result");

function getFactorial(number) {
  let factorial = 1;
  for (let i = number ; i >= 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
}
var myFactorial = 6;

var myFactorialResult = getFactorial(myFactorial);
console.log(myFactorialResult + " - is my final result");
