//Triple Steps: A child running up a staircase with n steps and can hop either 1 or 2, or 3 steps at a time. Implement a method 
//to count how many possible ways the child can run up the stairs.

memo = {}
function tripleStep(n){

     if(n < 0){
         return 0
     }
     if(n === 0){
         return 1
     }
     if(memo[n]){
         return memo[n]
     }
     memo[n] = tripleStep(n-1,memo) + tripleStep(n-2,memo);
     return memo[n]
}

console.log(tripleStep(4))

