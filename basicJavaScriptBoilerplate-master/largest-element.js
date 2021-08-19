function largestElement(number){
    var largest = 0;
    for (let i=0; i< number.length; i++){
        var element= number[i];
        if( element > largest){
            largest=element;
        }
    }
    return largest;
}
const ages = [12,14,16,22,24,26,28,31,33,35,36,37,41,43,46];
const oldest =largestElement(ages);
 console.log(oldest);
