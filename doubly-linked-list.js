class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    // Your code here
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToHead(val) {
    let node = new DoublyLinkedListNode(val);
  
    if (!this.head) {
      this.head = node;
      this.tail = node;
      this.head.next = null
    } else {
      node.next = this.head;
      this.head.prev = node
      this.head = node;      
    }
  
    this.length++;
  }
  

  addToTail(val) {
    // Your code here
    let node = new DoublyLinkedListNode(val)
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.length++
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;