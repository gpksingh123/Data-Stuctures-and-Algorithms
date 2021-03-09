/* eslint-disable */

function mergeArrays (array1, array2) {
    let pt1 = 0
    let pt2 = 0
    let result = []

    while (pt1 < array1.length || pt2 < array2.length) {
        if (array1[pt1] < array2[pt2]) {
            result.push(array1[pt1])
            pt1++
        } else {
            result.push(array2[pt2])
            pt2++
        }

    }
    return result

}
const myArray = [3, 4, 6, 10, 11, 15]
const alicesArray = [1, 5, 8, 12, 14, 19]

/* 
    [3, 4, 6, 10, 11, 15]
                  *1   
    [1, 5, 8, 12, 14, 19]
              *2
*/

/*
 [3, 4, 6]
          *1
 [1, 5, 8]
        *2



*/

const arr1 = [3, 4, 6]
const arr2 = [1, 5, 8]

console.log(mergeArrays(myArray, alicesArray))
// logs [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15, 19]