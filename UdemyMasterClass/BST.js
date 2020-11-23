//Objectives:
// -Define what a tree is
// - Compare and contrast trees and lists
// - Explain the differences between trees, binary trees, and binary search trees.
// - Implement operations on binary search trees.


class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    insert(value){

        if(this.root === null){
            console.log("Inserting root ",value)
            this.root = new Node(value)
            return this
        } else {

            this.currentNode = this.root
            
            while(true){
                
                if(value > this.currentNode.value){
                    console.log("Right Node ", value)
                    if(this.currentNode.right === null){
                        this.currentNode.right = new Node(value)
                        console.log(this.root)
                        return this
                    } else {
                        this.currentNode = this.currentNode.right
                    }
                
                } else {
                    console.log("Left Node ", value)
                    if(this.currentNode.left === null){
                        this.currentNode.left = new Node(value)
                        console.log(this.root)
                        return this
                    } else {
                        this.currentNode = this.currentNode.left
                    }
                }

            }

        }
      
    }
      //Check current value of the node and see if it's greater or less
            //if equal, return current node
            //if less, make left child currentNode
            //if greater, make right child currentNode
    find(value) {
        this.currentNode = this.root
        if(this.currentNode === null){
            return false
        }
        while(this.currentNode !== null){
            if(this.currentNode.value === value) return this.currentNode.value

            if(value > this.currentNode.value){
                this.currentNode = this.currentNode.right
            } else {
                this.currentNode = this.currentNode.left
            }
        }
        return false
    }
       
}

//         3
//     2      5
//    1         7
//Example of constructing a Binary Search Tree
var tree = new BinarySearchTree()
tree.insert(3)
tree.insert(2)
tree.insert(1)
tree.insert(5)
tree.insert(7)
console.log(tree.find(1))
//Inserts - iteratively or Recursively
// Create a new Node
// Starting at the root
    //check if there is a root, if not the root now becomes the new node
    //If there is a root, check if the value of the new node is greater than or less than the value of the root
    //if it is greater
        //Check if there is a node to the right
            //If there is, move to that node and repeat these steps
            //If there is not, add the node as the right property
    //if it is less
        //Check to see if there is a node to the left
            //If there is, move that node and repeat these steps
            //if there is not, add that node as the left property
    
            
//BFS:
    //starting on a tree going horrizontally
//DFS:
    //Starting on a tree and going vertically 











 //Uses for trees:
 // -HTML DOM
 // -Network routing
 // -Artificial Intelligence: In tik tak toe you can check every possibility
 // -Folder representation

 //How BST Works
 // Every Parrent has at most two children
 // Every node to left of a parent node is always less than the parent
 // Every node to the right is always greater than the parent

 //Searching A binary Tree:
//  -This makes searching really quick
