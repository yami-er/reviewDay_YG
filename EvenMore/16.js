//Write a function that tests whether a string is a palindrome.

function rev(x){
    var y = x.split("").reverse().join("")
    return x==y
}
var a = "eye"
console.log(rev(a))