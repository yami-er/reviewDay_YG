
function myFunction(a,r) {
    for(i=0;i<r;i++){
    a.push(a.shift())
    }
return a
}
var x = [1,2,4,5,7];
console.log(myFunction(x,2))