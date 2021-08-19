function leapyear(year) {
    if (year % 4 == 0){
        if (year % 4 == 0 && year % 400) {
            return false;
            }
        else if (year % 4 == 0 && year % 400) {
            return true;
        }
        else{
            return true;
        }
    }
    else {
        return false;
    }
}

//-----------------------------------------------//

var myYear = 2100;
var checkMyYear = leapyear(myYear);
console.log(myYear + " is a Leap year");
