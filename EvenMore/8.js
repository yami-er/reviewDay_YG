let allPrimes = (n) => {
  
   let isPrime = new Array(n+1).fill(true);
   isPrime[0] = false;
   isPrime[1] = false;
  
   let primes = [];

   for(let i = 2; i <= n; i++){
   
     if(isPrime[i] === true){
        primes.push(i); 
     }
     
      
      let next = i * i;
      while (next <= n) {
        isPrime[next] = false;
        next += i;
      }  
   }

   return primes;
}


