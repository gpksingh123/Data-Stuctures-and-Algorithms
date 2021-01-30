/* eslint-disable */
// Given a package with a weight limit limit and an array arr of item weights, implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit limit.
function getIndicesOfItemWeights(arr, limit) {
  let map = {}

  for (let i = 0; i < arr.length; i++) {
    let w = arr[i]
    let compliment = limit - arr[i]
    if (map[compliment]) {
        return [i,map[compliment]]
    } else {
        map[w] = i
    }
  }
  return false
}

const arr = [4, 6, 10, 15, 16]
const limit = 21
const output = [3, 1]
console.log(getIndicesOfItemWeights(arr,limit))