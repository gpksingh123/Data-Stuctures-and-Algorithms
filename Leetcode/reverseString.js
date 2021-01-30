// Write a function that takes an array of characters and reverses the letters in place
function reverseString (arr) {
  const arrString = arr
  let pt1 = 0
  let pt2 = arrString.length
  let p1Temp

  while (pt1 < pt2) {
    p1Temp = arrString[pt1]
    arrString[pt1] = arrString[pt2]
    arrString[pt2] = p1Temp

    pt1++
    pt2--
  }

  return arrString
}

const input = ['h', 'e', 'l', 'l', 'o']
const output = ['o', 'l', 'l', 'e', 'h']
console.log(reverseString(input), 'Should be equal to: ', output)
