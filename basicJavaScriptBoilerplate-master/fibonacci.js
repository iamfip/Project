// 0, 1 , 1 , 2, 3, 5, 8, 13, 21, 34, 55
/* 
3rd = 1st + 2nd;
4th = 2nd + 3rd;

*/
/* const fibo = [ 0, 1]
for (let i = 2; i <= 10; i++) {
    fibo[i]= fibo[i-1]+ fibo[ i-2];
}
console.log(fibo); */

function fibonacciSeries(num) {
  if (typeof num != "number") {
    return " Give me some number ! ";
  } 
  else if  ( num < 2) {
      return "Give me some number greater than 2"
  }
    const fibo = [0, 1];
    for (let i = 2; i < num; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
      
    }
    return fibo;
  
}

let gotnum = fibonacciSeries(-5);
console.log(gotnum);
