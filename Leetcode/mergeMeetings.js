
function mergeRanges (arr) {
  let meetings = arr.sort((a, b) => { return a - b })
  let results = []

  for (let i = 0; i < arr.length - 1; i++) {
    let newTime = {}
    if (meetings[i].endTime >= meetings[i + 1].startTime) {
      let endTime = Math.max(meetings[i].endTime, meetings[i + 1].endTime)
      newTime.startTime = meetings[i].startTime
      newTime.endTime = endTime
      i++
    }
    while (newTime.endTime && meetings[i + 1] && newTime.endTime >= meetings[i + 1].startTime) {
      endTime = Math.max(newTime.endTime, meetings[i + 1].endTime)
      newTime.endTime = endTime
      i++
    }

    if (newTime.startTime) {
      results.push(newTime)
    } else {
      results.push(meetings[i])
    }
  }
  return results
}

let arr1 = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 9, endTime: 10 },
  { startTime: 10, endTime: 12 }
]

let out1 = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 }
]
let arr2 =   [
    { startTime: 1, endTime: 10 },
    { startTime: 2, endTime: 6 },
    { startTime: 3, endTime: 5 },
    { startTime: 7, endTime: 9 }
  ]
console.log(mergeRanges(arr2))
// console.log(mergeRanges(arr1))
