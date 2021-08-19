 let first = 10;
 let secound = 20;

console.log(first,secound);

let temp =first;
 first = secound;
 secound = temp;

console.log(first, secound);

[first, secound]= [secound, first];
console.log(first, secound);