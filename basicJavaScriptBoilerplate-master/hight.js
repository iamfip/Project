function inchesToFeet(inches) {
  var feet = inches / 12;
  return feet;
}

function milesToKm(miles) {
  var km = miles * 1.61;
  return km;
}

// var myHightInches = 76;
// var myHightFeet = inchesToFeet(myHightInches);
// console.log(myHightFeet);

// var fatemaHightInches = 61;
// var fatemaHightFeet = inchesToFeet(fatemaHightInches);
// console.log(fatemaHightFeet);

// var ammuHightInches = 63;
// var ammuHightFeet = inchesToFeet(ammuHightInches);
// console.log(ammuHightFeet);

var marthon = 26.2;
var marthoninkm = milesToKm(marthon);
console.log(marthoninkm);

var halfMarthon = 13.1;
var halfMarthonKM = milesToKm(halfMarthon);
console.log(halfMarthonKM);
