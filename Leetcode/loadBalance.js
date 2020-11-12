//Your server has received a package of N incoming requests. Handling the k-th request (for K from 0 to N-1) will take A[K] seconds.
//
//The load balancer has to drop two aquired requests and distribute the rest of them between three workers in such a away that each worker
//receives a continguous fragment of requests to handle, and finishes handling them in exactle the same moment as the other workers. No two workers should
//receive the same request to complete.

//The load balancer's distribution of requests is performed by selecting two requests that will be dropped, and which will split the array into three
//contigous parts that will be allocated to the workers. More precisely, if requests 2 and 5 are chosen by the load balancer from the package of 9 requests, then
//  -the 0-th to 1-st requests will be handled by the first worker.
//  -the 3-rd to 4-th requests will be handled by the second worker.
//  -the 6-th to 9-th request will be handled by the third worker.
//
//Such a distribution will be correct if each worker receives requests equalling the same total amount of handling time.
//
//Write a afunction solution that, given an array A of N integers representing the time of execution of consecutive tasks, returns true if it is possible for the load balancer
//to choose two requests that will determine an even distrubution of requests among three workers, or false otherwise.

//Examples:
//1. Given A = [1,3,4,2,2,2,1,1,2], the function should return true, as choosing requests 2 and 5 results in a distribution giving 4 seconds of handling time to each worker, as explained
//2. Given A = [1,2,1,2,...,1,2] of length 20,000, function should return true.
//3. Given A = [1,1,1,1,1,1], then the function should return false. 



//Psuedocode for checking if array can be split into three equal parts.
//  -Check if totalArraySum % 3 === 0
//      -calculate workerChore = totalArraySum / 3;
//      
//      -check if we can place requests with workers
            //workerSum = 0;
            //workersFilled = 0;
            //flag = true;
            //for i = 0; i < arr.length; i++
                //workerSum = workerSum + arr[i];
                //if workerSum = workerChore
                    //workerSum = 0
                    //workersFilled++;
                
                //if workersFilled = 3 and i < arr.length - 1
                    //we filled workers to early, so false.
                    //flag = false;
            //if workersFilled !== 3
                //flag = false;



function loadBalance(requests){
    for(let i = 0; i < requests.length; i++){
         for(let j = i+1; j < requests.length; j++){
            let arr = requests.slice()
            if(checkSplit(arr,i,j)){
                console.log("True for ", i, " ",j)
                return true;
            }
            
         }
     }
     return false;

}          

function checkSplit(arr,i,j){
    arr[i]=0;
    arr[j]=0;
    console.log("array passed in", arr)
    let totalSum = arr.reduce(getSum,0);
    console.log(totalSum)
    //refactor to ternary operator later
    if(totalSum % 3 != 0){
        return false;
    } 
    let workerChore = totalSum / 3;

    let workerSum = 0;
    let workersFilled = 0;
    let flag = false;


    for(let i = 0; i < arr.length; i++){
        
        workerSum = workerSum + arr[i]
        if(workerSum === workerChore){
            workerSum = 0;
            workersFilled++;
            console.log("Worker filled: ",workersFilled)
        }
        if(workersFilled === 3 && (i !== arr.length-1)){
            return flag;
        }
    }
    if(workersFilled === 3){
        flag = true;
    }
    return flag;
}


let removedA = [1,3,2,2,1,1,2]
let A = [1,3,4,2,2,2,1,1,2]

// console.log(checkSplit(A))c
console.log("Checksplit With removed array: ",checkSplit(removedA))
console.log("With testing array: A", checkSplit(A))
console.log("With testing array: B", checkSplit(B))
console.log("Loadbalancer with testting array A: ",loadBalance(A))
//Helper function to get sum
function getSum(total,num) {
    return total + num;
}