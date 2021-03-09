/* eslint-disable */
//Given an array of N integers and an integer S, computer how many ways one can choose a contiguous fragment of A that has an arithmetic mean equal to S. 
 function means(array,S){

        let meanCount = 0;
        let sum = 0;
        let length = 0;
        for(let i = 0; i < array.length; i++){
            for(let j = i; j < array.length; j++){
           
                sum = sum + array[j];
                length++;
               
                if(sum/length === S){
                    // console.log(i,j)
                    let arrSlice = array.slice(i,j+1);
                    console.log(arrSlice);
                    console.log("length ", length, " sum ",sum);
                    meanCount++;
                }
            }
            length = 0;
            sum = 0;
        }
        return meanCount;
}




// left = [2, 3, 6]
// right = [6,4,3]
A1 = [2,1,3]; 
S = 2;
// A2 = [0,4,3,-2]; 
// left = [0, 4, 7, 5]
// right = [5,5,1,-2]
// s

// A3 = [2,1,4]
console.log(means(A1,S), "Should equal: ", 3);
// // console.log(means(A2), "Should equal: ", 2);
// // console.log(mean(A3), "Should equal: ", 3);

