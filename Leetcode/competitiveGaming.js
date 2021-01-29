// A group of friends are playing video games together. Given scores after each round, they are given rankings.
// - Players with equal ranks will have the same rankings
// - Players with a score of 0 will not be able to level up regardless of rank

function numPlayers (cutOffRank, scores) {
  const sortedScore = scores.sort((a, b) => { return b - a })
  let levelUpNum = 0
  let currRank = 0
  let tracker = 0
  let trackerFlag = false
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] !== 0 && i === 0) {
      currRank = 1
      levelUpNum++
    } else if (scores[i] !== 0) {
      currRank++
      levelUpNum++
      while (scores[i] === scores[i + 1]) {
        if (!trackerFlag) {
          i++
          tracker = 2
          levelUpNum++
          trackerFlag = false
        } else {
          i++
          tracker++
          levelUpNum++
        }
      }
    }
    currRank += tracker
    tracker = 0
    if (currRank > cutOffRank) {
      break
    }
  }
  return levelUpNum
}
// [100, 50, 50, 25]
// i = 0 --> currRank = 1, leveUpNum = 1
// i = 1; 2 --> currRank = 2; 3, levelUpNum = 2; 3, tracker = 1,
// Sample input:
//  cutOffRank = 4;
//  scores = [20, 40, 60, 80, 100], sorted --> [100,80,60,40,20]
//  ranking -->  will be [5, 4, 3, 2, 1]
//  output  -->  is 4 because we take the top 4 rankings to level up.
const cutOffRank1 = 4
const scores1 = [40, 20, 60, 100, 80]
// console.log(numPlayers(cutOffRank1, scores1))

// Sample input:
// cutOffRank = 3
// scores = [100,50,50,25], sorted --> [100, 50, 50, 25]
// ranking --> will be [1,2,2,4]
// output  --> will be 3 because we take all ranks less than or equal to 3 level up
const cutOffRank2 = 3
const scores2 = [100, 50, 25, 25]
console.log(numPlayers(cutOffRank2, scores2))
