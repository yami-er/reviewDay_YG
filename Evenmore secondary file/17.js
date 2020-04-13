//Write three functions that compute the sum of the numbers in a list: using a
//for-loop, a while-loop and recursion. (Subject to availability of these constructs in
    //your language of choice.)

function addf(n){
    var sum = 0;
    for(var i = 0; i < n.length; i++) {
       sum= sum + n[i] 
    }
    return sum  
}

function addw(n){
    var sum = 0;
    var i = 0;
    while(i < n.length){
        sum = sum + n[i]
        i++
    }
    return sum  
}
var numbers = [1,2,3,4,5];
console.log(addf(numbers))
console.log(addw(numbers))

