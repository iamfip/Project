function cTof(celcias){ 
    var farhenate = (celcias * 1.8) + 32;
    return farhenate;
}

var mytemp = 100;
var mytempC= cTof(mytemp);
console.log(mytempC);