const LinkedList = require('./linked-list.js');
const DoublyLinkedList = require('./doubly-linked-list.js');

/*
Construct a timing test to verify the time complexities of `addToHead` and
`addToTail` for both singly and doubly linked lists.
*/

// Your code here
let date1 = new Date()

let linkedList = new LinkedList()
linkedList.addToHead(2)
linkedList.addToTail(55)
linkedList.print()

let date2 = new Date()

let speedForLikedList = date2 - date1

let date3 = new Date()

let doubly = new LinkedList()
doubly.addToHead(2)
doubly.addToTail(55)
doubly.print()

let date4 = new Date()

let speedForDoubly = date4 - date3

console.log(speedForLikedList, 'ms')
console.log(speedForDoubly, 'ms')