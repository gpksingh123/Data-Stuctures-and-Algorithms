/* eslint-disable */
function arrayOfArrayProducts (arr) {
  // your code goes here
  let result = []
  let leftProduct = [1]
  let rightProduct = [1]
  let lastIndex

  for (let i = 0; i < arr.length - 1; i++) {
    let lastIndex = leftProduct.length - 1
    leftProduct.push(leftProduct[lastIndex] * arr[i])
  }
  console.log(leftProduct)

  for (let i = arr.length - 1; i > 0; i--) {
    rightProduct.unshift(rightProduct[0] * arr[i])
  }
  console.log(rightProduct)

  for (i = 0; i < arr.length; i++) {
    result.push(rightProduct[i] * leftProduct[i])
  }

  return result
}

console.log(arrayOfArrayProducts([4, 5, 1, 8, 2]))

/*
  arr = [4, 5, 1, 8, 2]

  leftProduct <-- 1, 4, 20, 20, 160

  rightProduct <--           2    1


*/