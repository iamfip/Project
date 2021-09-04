const numbers = [21, 23, 44, 112, 34, 655, 35, 23, 67, 78, 90];

const bigNumber = numbers.filter((got) => got > 70);
// console.log(bigNumber);

const products = [
  { name: "water bottle", price: 50, color: "yellow" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "smart watch", price: 3000, color: "black" },
  { name: "sticky note", price: 30, color: "pink" },
  { name: "water glass", price: 3, color: "white" },
];

const expensive = products.filter((product) => product.color == "black");
console.log(expensive);
