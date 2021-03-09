/* eslint-disable */

var numRollsToTarget = function(d, f, target, currVal) {
    if(d < 0 || currVal > target) return 0;

    if(d === 0 && target === currVal) {
        return 1
    }

    let totalWays = 0
    for( let i = 1; i <= f; i++) {
        totalWays += numRollsToTarget(d - 1, f, target, currVal + i)
    }

    return totalWays
}

// d1 = 1;
// f1 = 6;
// target1 = 3;
// console.log(numRollsToTarget(d1,f1,target1,0))

// d2 = 2;
// f2 = 6;
// target2 = 7;
// console.log(numRollsToTarget(d2,f2,target2,0))

d3 = 1, 
f3 = 2, 
target3 = 3
console.log(numRollsToTarget(d3,f3,target3))

