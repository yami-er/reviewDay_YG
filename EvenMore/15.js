
function add(n){
    var sum = 0;
    for(var i = 0; i < n.length; i++) {
       sum= sum + n[i] 
    }
    return sum  
}
var numbers = [1,2,3,4,5];
console.log(add(numbers))

