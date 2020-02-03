// piece of data - val
//reference to next node - next

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) { //add to end of linkedlist
        if (!this.head) {
            let firstNode = new Node(val);
            this.head = firstNode;
            this.tail = firstNode;
        } else {
            this.tail.next = new Node(val);
            this.tail = this.tail.next
        }
        this.length++;
    }
    traverse() {
        let current = this.head
        while (current) {
            console.log(current.val)
            current = current.next;
        }
    }
    pop() { //remove from the back of a ll
        //if no node exists return undefined
        let current = this.head;
        let val;
        if (this.length === 0) return undefined;
        else if (this.length === 1) {
            val = this.tail.val
            this.tail = null;
            this.head = null;
        } else {
            let newTail;
            while(current.next) {
                newTail = current;
                current = current.next
            }
            val = this.tail.val
            this.tail = newTail;
            this.tail.next = null;
        }
    this.length--;
    return val;

    }
    shift() { //removing from front of llst
        if(!this.head) return undefined;
        else if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            let newHead = this.head.next
            this.head = newHead;
        }
        this.length--;
        return this.head.val
    }
    unshift(val) { //add a node to the beggining of a list
        if(!this.head){
            this.head = new Node(val)
            this.tail = this.tail;
        }else{
            let newNode = new Node(val);
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
        return this;
    }
    get(index){
        let count = 0;
        let current = this.head;
        if(index < 0 || index > this.length-1) return null;
        while(current){
            if(count === index){

                return current
            }
            count++;
            current = current.next;
        }
    }
    set(index,value){
        if(index < 0 || index > this.length-1) return null;
        let foundNode = this.get(index);
        if(foundNode){
            foundNode.val = value
            return true;
        }
        return false;
    }
    insert(index,value){
    
        if(index === 0){
            this.unshift(value)
            return true
        } else if(index < 0 || index > this.length){ 
            return false
        } else if(index === this.length) {
             this.push(value)
             return true;
        } else {
            let nodeBefore = this.get(index-1)
            let nodeAfter = nodeBefore.next
            let newNode = new Node(value)
            nodeBefore.next = newNode;
            newNode.next = nodeAfter;
            this.length++;
            return true;
        }
 
    }
    remove(index){
        if(index < 0 || index > this.length){
            return false;
        }else if( index === 0){
            return this.shift()
        }else if (index === this.length-1){
            return this.pop()
        }else{
            let nodeBefore = this.get(index-1);
            let removed = nodeBefore.next;
            let nodeAfter = this.get(index+1);
            nodeBefore.next = nodeAfter;
            this.length--;
            return removed;
        }
    }
    reverse(){
        let pt1 = this.head
        let pt2 = this.head.next
        let temp;
        while(pt2 !== null){
            temp = pt2.next;
            pt2.next = pt1;
            pt1 = pt2
            pt2 = temp;  
        }
        this.head.next = null;
        temp = this.head;
        this.head = this.tail;
        this.tail = temp;

    }

 
};

//if there is no node, the node becomes the head and tail
//the next added value becomes the tail
//with every node increment the length

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")
var list = new SinglyLinkedList()
list.push("1")
list.push("2")
list.push("3")
list.push("4")
//length is 4
list.reverse();
// console.log("length", list.length)
// list.shift();
// list.shift();
// console.log("tail",list.head)
// console.log("length", list.length)
console.log(list);
