function oddEven (number){
    let result = number % 2;
    return result;
}

let ourNum = 1015;
if (oddEven(ourNum) == 0 ) {
    console.log(ourNum + " is even");
}
else{
    console.log(ourNum + " is odd ");
}