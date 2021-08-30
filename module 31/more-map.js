
const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman', 'Farhan Ishrak Pranto'];

const fLenth= friends.map( friend => friend.length);
console.log(fLenth);

const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const productsNames= products.map(product => product.name);
console.log(productsNames);