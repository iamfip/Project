function ftoc(farhenate){ 
    var celcias = (farhenate - 32)* (5/9);
    return celcias;
}

var mytemp = -40;
var mytempC= ftoc(mytemp);
console.log(mytempC);