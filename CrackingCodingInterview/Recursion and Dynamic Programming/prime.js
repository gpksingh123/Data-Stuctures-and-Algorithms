var countPrimes = function(n) {
    let primeCount = 0;
    let Prime = true;

    for(let i = 2; i < n; i++){
        for(let j = 2; j < i; j++){
            // console.log(i,j)
            if(i % j === 0){
                Prime = false;
                break;
            }
        }
    
        if(Prime){
            primeCount++
        }
        Prime = true;
    }
return primeCount
};
console.log(countPrimes(10));