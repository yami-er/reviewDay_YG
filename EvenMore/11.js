var list =[1,6,4,5];

function find(list){
   
    var max = list[0];
    for (var i=1; i<list.length; i++){
    if ( max <  list[i]){
        max = list[i];
    }
}
return max; 
}
console.log(find(list))


