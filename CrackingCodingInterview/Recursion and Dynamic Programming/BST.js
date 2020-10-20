//Impliment a binary search on a sorted array 
//if the mid index of the array equals our solution, return that
//Input: A sorted Array
//Output: If you find the value, return its index

function BST(arr,val,start,end){

  
    let mid = Math.floor((end-start)/2) + start;
 
    if(start >= end){
        console.log("Start greater than end")
        return -1
    }

    if(arr[mid] === val){
        return mid
    } else if (arr[mid] < val){
        return BST(arr,val,mid+1,end)
    } else if (arr[mid] > val) {
        return BST(arr,val,start,mid-1)
    } 
}


let sortedArray = [1,3,6,7,8,10,17,20,23,25];
console.log(BST(sortedArray,10,0,sortedArray.length-1))