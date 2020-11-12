//A non-empty array A consisting of N integers is given.
//Array A represents a linked list. A list constructed from this array as follows:
//  -The first node(The head) is lcoated at index 0:
//  -The value of a node lcoated at index k is A[k]
//  -If the values of a node is -1 then it is the last node of the list
//  -Otherwise the successor of a node located at index K is located at index A[k]
//      -you can assume that A[k] is a valid index that is 0<=A[k]<N
//    For example for array such that:
//      A[0] = 1
//      A[1] = 4
//      A[2] = -1
//      A[3] = 3
//      A[4] = 2
//      
//      The following list is constructed:
//          -The first node (the head) is located at index 0 and has a value of 1;
//          -The second node is located at index 1 and has a value of 4
//          -the third node is located at index 4 and has a value of 2
//          -the fourth node is located at index 2 and has a value of -1
//      Answer: The length of the above function is 4 as explained above. There are only four nodes we are able to visist.


let lengthSolution = (arr) => {
    let currentIndex = 0;
    let lengthCount = 0;
    
    while(arr[currentIndex] != -1){
        lengthCount++;
        currentIndex = arr[currentIndex];
    }
    lengthCount++;
    
    return lengthCount;
}

let arr = [1,4,-1,3,2]
console.log(lengthSolution(arr));