// Input: A nonempty array T consisting of N integers describing a network of N cities and N-1 roads.
// Output: Returns maximum number of cities that Jack can visit.

// Array T describes a netowrk of cities as folloes:
//  -T[0]=0
//  if T[P] = Q and p != 0, then there is a direct road between P and Q

// Example: Given T = [0,9,0,2,6,8,0,8,3,0]
// Return 4, as there is a path 0->2->3->8

class Tree {
  constructor (root) {
    this._root = root || null
  }

  buildTree (arr) {
    const map = {}
    if (arr.length === 0) return []

    for (let i = 0; i < arr.length; i++) {
      if (!map[arr[i]]) {
        map[arr[i]] = []

        if (i !== arr[i]) {
          map[arr[i]].push(i)
          if (!map[i]) {
            map[i] = [arr[i]]
          } else {
            map[i].push(arr[i])
          }
        }
      } else {
        map[arr[i]].push(i)
      }
    }
    console.log(map)
    this._root = new TreeNode(0)
    // for (const key in map) {
    //   if (key !== 0) {
    //   }
  }
}

class TreeNode {
  constructor (value) {
    this.value = value
    this.descendents = []
    this.parent = null
  }

  addChild (value) {
    const newNode = new TreeNode(value)
    newNode.parent = this
    this.descendents.push(newNode)
  }
}

const myTree = new Tree()
const testArr = [0, 9, 0, 2, 6, 8, 0, 8, 3, 0]
myTree.buildTree(testArr)
console.log(myTree._root)

//       0
//   1       2
// 3 4 5       6
// testArr = [0,0,0,1,1,1,2]

// let solution = function(arr){

//     let buildTree = function(arr,index){
//       nodeValue = arr[index]
//       //Traverse tree untill we find that array index

//       //findNode

//     }

// }

// var testArr = [0,0,0,1,1,1,2];
// solution(testArr)

// insert(arr){
//   if(!(arr.length > 0)) return [];

//   this._root = arr[0];

//   for(let i = 1; i < arr.length; i++){
//     let insertNode = findNode(this._root, arr[i])
//     insertNode.descendents.push(i)
//   }

//   let findNode = function(currentNode, nodeVal){
//       if(currentNode.value === nodeVal){
//         return currentNode
//       }
//       for(let i = 0; i < currentNode.descendents.length; i++){
//         if(nodeVal === currentNode.descendents[i].value){
//           return currentNode
//         } else {
//           findNode(descendents[i],nodeVal)
//         }
//       }
//   }
// }

// let buildTree = function(arr, currentIndex) {

//     node = TreeNode(currentIndex);

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == currentIndex) {
//             if(i != currentIndex) {
//                 node.descendents.push(i);
//             }
//         }
//     }
//     for(let i = 0; i < node.descendents; i++) {
//         buildTree(arr, node.descendents[i]);
//     }

//     return node
// }
