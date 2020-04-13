function myFunction(a) {
    var e = a.split(" ")
    var h =""
    for (i=0;i<e.length;i++){
        var g = e[i];
        h = h+g.substring(1)+g.substring(0,1)+"ay"+" ";
    }
    return h
}
var d ="the quick brown fox"
console.log(d)
console.log(myFunction(d))

