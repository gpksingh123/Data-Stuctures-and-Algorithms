/* eslint-disable */

//Brute force recurrsion
// var numRollsToTarget = function(d, f, target) {
//     if(d < 0 || target < 0) return 0;

//     if(d === 0 && target === 0) {
//         return 1
//     }

//     let totalWays = 0
//     for( let i = 1; i <= f; i++) {
//         totalWays += numRollsToTarget(d - 1, f, target - i)
//     }

//     return totalWays
// }

//Dynamic Programming Approach
let findWays = function(d, f, target) {
    //initialize 2-d array
    const rowLength = d + 1
    const colLength = target + 1

    var table = Array(rowLength).fill().map(() => Array(colLength).fill(0))

    for (let j = 1; j <= f && j <= d; j++) {
        table[1][j] = 1;
    }

    for (let i = 2; i <= d; i++) {
        for(let j = 1; j <= target; j++){
            for(let k  = 1; k < j && k <= f; k++) {
                table[i][j] += table[i-1][j-k]
            }
        }
    }
    for (let i = 0; i < table.length - 1; i++) {
        console.log(table[i])
    }
    return "done"
}
console.log(findWays(2,6,7))
// console.log(findWays(2,4,5))

// d1 = 1;
// f1 = 6;
// target1 = 3;
// console.log(numRollsToTarget(d1,f1,target1)) //output: 1

// d2 = 2;
// f2 = 6;
// target2 = 7;
// console.log(numRollsToTarget(d2,f2,target2,0))

// d3 = 1, 
// f3 = 2, 
// target3 = 3
// console.log(numRollsToTarget(d3,f3,target3))

