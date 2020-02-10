///////////Iterative Factorial////////////////

    // function factorial(num){
    //     let total = 0;
    //     for(let i = 1; i <= num; i++){
    //         total +=i;
    //     }
    //     console.log(total)
    //     return total
    // }
    // factorial(4);

///////////Reccursive Solution//////////////////

    // function factorial(num){
    //     if(num === 1) return 1
    //     return num + factorial(num-1)
    // }
    // let x = factorial(2)
    // console.log(x)

//////////////// Helper method reccursion /////////
    // function collectOddValues(arr){
        
    //     let result = [];
    //     function helper(helperInput){
    //         if(helperInput.length === 0) {
    //             return;
    //         }
    //         if(helperInput[0] % 2 !== 0){
    //             result.push(helperInput[0])
    //         }
    //         helper(helperInput.slice(1))
    //     }
    //     helper(arr)
    //     return result;
    // }
////////////Pure Reccursion/////////////////
    // function collectOddValues(arr){
    //     let newArr = [];
        
    //     if(arr.length === 0) {
    //         return newArr;
    //     }
            
    //     if(arr[0] % 2 !== 0){
    //         newArr.push(arr[0]);
    //     }
            
    //     newArr = newArr.concat(collectOddValues(arr.slice(1)));
    //     return newArr;
    // }

    // collectOddValues([1,2,3,4,5])
    // [1].concat(collectOddValues([2,3,4,5]))
    //             [].collectOddValues[(3,4,5].slice(1))
    //                 [3].collectOddValues[(4,5].slice(1))
    //                     [].collectOddValues[([5].slice(1))
    //                         [5].concat([])
    //        

    // console.log(collectOddValues([1,2,3,4,5]))
///////////////Pure Reccursion Tips//////////////////////
    //Methods for arrays: 
        //Slice, the spread operator, and concat
    //Methods for strings:
        //slice, substr, or substring to make copies of strings
    //Methods for objects:
        //Object.assign or spread operator

//////////////Recursion Problem 1: Power/////////////////
    // // power(2,0) // 1
    // // power(2,2) // 4
    // // power(2,4) // 16

    // function power(num,pow){

    //     if(pow === 0) {
    //         return 1
    //     }


    //     return num * power(num,pow-1)
        
    // }
    // console.log(power(2,4))
    // // power(3,3)
    // //     return 3 * power(3,2)
    // //                 return 3 * power(3,1)
    // //                             return 3 * power(0)
    // //                                         1
    // // result: 3 * 3 * 3

/////////////////Recursion Problem 2: Factorial//////////////////////
    // function factorial(num) {
    //     if(num ===0){
    //         return 1
    //     }
    //     return num * factorial(num-1)
    // }
    // console.log(factorial(5))
 
////////////////Recursion Problem 3: productoOfArray//////////////////                                      
 // For pure reccursion, may need to use slice and concat.

    // function POA(arr) {

    //     if(arr.length === 0){
    //         return 1
    //     }
    //     return arr[0]*POA(arr.slice(1))

    // }
    // console.log(POA([1,2,3]))

///////////Recursion Problem 4: Recursive Range////////
    // function range(num){
    //     if(num === 0){
    //         return 0
    //     }

    //     return num + range(num-1)
    // }

    // console.log(range(2))

///////////Recursion Problem 5: Fibonacci////////
    // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55   
    // execustion context


    //     function fib(num){

    //         if(num === 1 || num ===2) return 1;
            
    //         return fib(num-1)+fib(num-2)
    //     }

    //    console.log(fib(7))
        //     return fib(6)+fib(5)
        //             return fib(5)+fib(4) + return fib(4) + fib(3)
        //                 return fib(4) + fib(3) return fib(3)+ fib(2) + return fib(3) + fib(2) + return fib (2) + fib (1)
        //                     return 3 + 2 + 2 + 1 + 2 + 1 + 2



        // function fib(num){

        //     if (num === 1) {
        //         return 1;
        //     }
        //     if (num === 2) {
        //         return 1;
        //     }
        //     let arr = [1,1]
        //     function generate(num){
        //         arr.push(arr[0]+arr[1]) //
        //         arr.shift()
            
        //         if (num===1){
        //             return arr[1]
        //         }
        //         return generate(num-1)
        //     }
        //     return generate(num-2)

        //     // return fib(num-1) + fib(num-2)
        //     //arr: storing last two numbers
        //     //Helper recursion function 

        // }
    // console.log(fib(10))

// ///////////Recursion Problem 6: Reverse////////

// function reverse(str){

//     if(str.length === 0){
//         return ""
//     }
//     let length = str.length - 1;
//     return str[length] + reverse(str.slice(0,length))

// }
// console.log(reverse("swaggggerrrrrs"))
//Remove duplicates:
// var removeDuplicates = function(nums) {
    
   
//     let arr = nums;

//     for(let pt1 = 0; pt1 < arr.length-1; pt1++){
//         pt2 = pt1+1
//         while(arr[pt1]===arr[pt2]){
//             arr.splice(pt2,1)
//         }
//     }

//     console.log(arr)

// };
// let nums = [0,0,1,1,1,2,2,2,2,3,3,4]
// removeDuplicates(nums)


/////////////Recursion Problem 7: isPalindrome////////
// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false


// function isPalindrome(str){
//     if(str === undefined || null){
//         return false;
//     }
//     if(str.length === 1 || str.length === 0){
//         return true
//     } else if (str[0]===str[str.length-1]) {
//         return isPalindrome(str.slice(1,str.length-1))
//     } else {
//         console.log("str is", str)
//         return false
//     }
// }
// console.log(isPalindrome())

/////////////Recursion Problem 7: someRecursive////////

// const isOdd = val => val % 2 !== 0;

// function someRecursive(arr,cb){
//     if(arr.length === 0){
//         return true
//     }
//     if (!cb(arr[0])) {
//         return false
//     }
 
//     arr.shift()
//     return someRecursive(arr,cb)
// }

//  console.log(someRecursive([1,2,3,4], isOdd)) // false
// console.log(someRecursive([1,5,3,9], isOdd)) // true
// someRecursive([4,6,8], isOdd) // false
// console.log(someRecursive([4,6,8], val => val < 10)); // false

/////////////Recursion Problem 7: flatten////////

// function flatten(arrs){
//     // add whatever parameters you deem necessary - good luck!
//     let ans = []
//     let count = 0
//     function recurse(arr){
        
//         for(var i = 0; i < arr.length; i++){
//             count++
//             if(count === 20) return;

//             if(typeof arr[i] === "number"){
//                 ans.push(arr[i])
//             } else {
//                 recurse(arr[i])
//             }
//         }
//     }
//     recurse(arrs)
//     return ans;
// }
  
//   console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
//   console.log(flatten([1, [2, [3, 4], [[5]]]]))
//   console.log(flatten([[1],[2],[3]]))
//   console.log(flatten([[[1], [[[2]]], [[[[[[[3]]]]]]]]]))
  // flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) // [1,2,3]
   // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

/////////////Recursion Problem 8: capitalizeFirst////////
//   function capitalizeFirst (array) {
//     let ans = []
//     function recurse(arr){  
//         if(arr.length === 0){
//             return
//         }
//         ans.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1))
//         recurse(arr.slice(1))
//     }
//     recurse(array);
//     return ans;
//   }

// function capitalizeFirst (array) {
//     if (array.length === 1) {
//       return [array[0][0].toUpperCase() + array[0].substr(1)];
//     }
//     const res = capitalizeFirst(array.slice(0, -1));
//     const string = array.slice(array.length - 1)[0][0].toUpperCase() + array.slice(array.length-1)[0].substr(1);
//     res.push(string);
//     return res;
//   }





// console.log(capitalizeFirst(["toy", "cat","dog"]));

/////////////Recursion Problem 9: nestedEvenSum////////

// function nestedEvenSum () {
//     // add whatever parameters you deem necessary - good luck!


//   }
//   var obj1 = {
//     outer: 2,
//     obj: {
//       inner: 2,
//       otherObj: {
//         superInner: 2,
//         notANumber: true,
//         alsoNotANumber: "yup"
//       }
//     }
//   }
  
//   var obj2 = {
//     a: 2,
//     b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//     c: {c: {c: 2}, cc: 'ball', ccc: 5},
//     d: 1,
//     e: {e: {e: 2}, ee: 'car'}
//   };
  
//   nestedEvenSum(obj1); // 6
//   nestedEvenSum(obj2); // 10