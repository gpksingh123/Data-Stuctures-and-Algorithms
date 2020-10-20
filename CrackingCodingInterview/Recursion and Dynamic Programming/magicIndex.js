//Given a sorted array of distinct numbers A[0...n-1], a magic index is s.t. A[i] = i
//Write a method to return the magic index


function magic(arr,start,end,iter){
    var mid = Math.floor((end-start)/2)+start;
    console.log("Start ", start, "End ",end, "mid",mid, "iter ",iter);
    console.log("array",arr.slice(start,end+1))
    
    if(iter === 20){
        return -1
    }
    if(arr[mid] === mid){
        return mid
    } else if(arr[mid] < mid){
        console.log("Going Right")
        return magic(arr,mid+1,end,iter+1)
    } else if(arr[mid] > mid){
        console.log("Going Left")
        return magic(arr,start,mid-1,iter+1)
    }

}

let arr = [-5,-3,0,2,4,11,13]
// arr = [-5,1,4,5,6,11,13]
console.log(magic(arr,0,arr.length-1,0));