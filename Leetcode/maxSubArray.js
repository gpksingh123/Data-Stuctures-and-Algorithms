const getMaxSubarray = function (nums) {
  let currentSubarray = nums[0]
  let maxSubArray = nums[0]

  for (let i = 1; i < nums.length; i++) {
    currentSubarray = Math.max(nums[i], currentSubarray + nums[i])
    if (currentSubarray > maxSubArray) {
      maxSubArray = currentSubarray
    }
  }
  return maxSubArray
}
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(getMaxSubarray(nums))
