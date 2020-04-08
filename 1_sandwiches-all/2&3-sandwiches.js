function sandwichCalculator(slicesOfBread,slicesOfcheese){
    if (slicesOfcheese = 0 || slicesOfBread < 2)
    {
        return (0);
    }
    else if(slicesOfcheese <= (slicesOfBread/2) )
    {
        return (slicesOfcheese);
    }
    else if(slicesOfcheese >  (slicesOfBread/2) )
    {
        return (slicesOfBread/2); 
    }
        
} 
console.log(sandwichCalculator(0,1));



   
    
    