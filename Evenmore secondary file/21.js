function myFunction(x,z) {
    var m =[];
    m= x.concat(z).sort()
    return m
 }

var a =  [1,4,6];
var b = [2,3,5];
console.log(myFunction(a,b))