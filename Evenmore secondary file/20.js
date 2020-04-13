function myFunction(x,z) {
    var m =[];
    for(i=0; i<z.length; i++){
        m.push(x[i])
        m.push(z[i])
         
    }
    return m   
  
}
var a = [1,2,3];
var b = ['a','b','c'];

console.log(myFunction(a,b))

