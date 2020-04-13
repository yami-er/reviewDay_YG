function  fibonacc(n){
    var x = [];
    for(i=0 ; i<=n ; i++){
        if(i<2){
            x[i]=1
        }
        else{
            x[i]= x[i-1] + x[i-2];
        }
        

    }
    return x
}
console.log(fibonacc(20))