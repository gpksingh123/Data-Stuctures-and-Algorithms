/* eslint-disable */
function mergeRanges (arr) {
  const meetings = arr.sort((a , b) => { return a - b })
  const mergedMeetings = [arr[0]]

  for (let i = 1; i < arr.length; i++) {
      const currentMeeting = arr[i]
      const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1]
      if (mergedMeetings[mergedMeetings.length - 1].endTime >= arr[i].startTime) {
          mergedMeetings[mergedMeetings.length - 1].endTime = Math.max(arr[i].endTime, mergedMeetings[mergedMeetings.length - 1].endTime)
      } else {
          mergedMeetings.push(arr[i])
      }
  }
  return mergedMeetings

}

/*
  mergedMeetings = [arr[0]]
  
  itterate through array starting at i = 1:
    if mergedMeetings[mergedMeetings.length - 1].endpoint =< arr[i].startPoint {
        mergedMeetings[mergedMeetings.length - 1].endpoint = Math.max(arr[i].endpoint,mergedMeetings[mergedMeetings.length - 1])
    } else {
        mergedMeetings.push(arr[i])
    }

*/

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

let arr2 = [
{ startTime: 1, endTime: 10 },
{ startTime: 2, endTime: 6 },
{ startTime: 3, endTime: 5 },
{ startTime: 7, endTime: 9 }
]
console.log(mergeRanges(arr1))