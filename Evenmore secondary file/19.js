
function myFunction(x,z) {
    var m =[];
    m = x.slice(0)
    //m = x
    for(i=0; i<z.length; i++){
        m.push(z[i])
    }
    return m   
  
  }
var a = [1,2,3];
var b = ['a','b','c'];

console.log(myFunction(a,b))
console.log(a)
