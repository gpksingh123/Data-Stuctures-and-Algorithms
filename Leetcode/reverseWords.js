/* eslint-disable */
function reverseWords (arr) {
  let start, end

  reverseWord(arr, 0, arr.length - 1)

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) start = 0;
    if (arr[i+1] === ' ' || arr[i+1] === undefined) {
      end = i
      reverseWord(arr, start,end)
      if(arr[i+2] !== undefined){
        start = i+2
      }
    }
  } 
}

let reverseWord = (arr,start,end) => {
  console.log("Reverse word called with ", start, end)
  let pt1 = start
  let pt2 = end
  // reverse words
  while (pt1 < pt2) {
    const temp = arr[pt1]
    arr[pt1] = arr[pt2]
    arr[pt2] = temp

    pt1++
    pt2--
  } 
}

/*
We need a way to find the start and end indices to reverse
//if one word, leave it

['c', 'a', 'k', 'e', ' ', 'p', 'o', 'u', 'n', 'd', ' ', 's', 't', 'e', 'a', 'l']
  st
                en   

                          st
                                               en
                                                         st
  for i = 0 to arr.length - 1
    if(i === 0) start = 0
    if(arr[i+1] === ' ' || arr[i+1] === null) {
      end = i
      reverseWord(start,end)
      if(arr[i+2] !== undefined){
        start = i+2
      }
  }         
*/


const message = ['c', 'a', 'k', 'e', ' ',
  'p', 'o', 'u', 'n', 'd', ' ',
  's', 't', 'e', 'a', 'l']

reverseWords(message)
console.log(message.join(''))
// Prints: 'steal pound cake'
