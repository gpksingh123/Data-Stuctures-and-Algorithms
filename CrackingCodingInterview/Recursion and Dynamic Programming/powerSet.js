//Write a method that returns all subsets of a set.



let powerSet = (arr) => {
    console.log("arr is", arr)
    if(arr.length === 0){
        return []
    }
    let elementToAdd = arr[arr.length-1]
    let subset = powerSet(arr.slice(0,arr.length-1))
    console.log("Subset ",subset, "Element to add ", elementToAdd)

}
let arr1 = [1,2];
console.log(powerSet(arr1));


// Input: nums = [1,2,3]
// Output:
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]