// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document
//Linked list nodes contains data and reference to next 

// const nodeOne = {
//   data : 123
// }
// const nodeTwo = {
//   data : 456
// }

// nodeOne.next = nodeTwo
// console.log(nodeOne)

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}
const n1 = new Node('Hello')
// console.log(n1.next)

class LinkedList {
  constructor() {
    this.head = null
  }
  insertFirst(record) {
    // this.head = new Node(record) Doing this will overwrite existing one.
    this.head = new Node(record, this.head);
  }
  size() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }
  getFirst() {
    return this.head;
  }
  // getLast() {
  //   if (!this.head) {
  //     return null
  //   }
  //   return this.head.data;
  // }
  getLast() {
    if (!this.head) {
      return null
    }
    let node = this.head;
    while (node) {
      if (!node.next) { //means if it has falsy value
        return node;
      }
      node = node.next;
    }
  }
  clear() {
    this.head = null
  }
  removeFirst() {
    if (!this.head) {
      return
    }
    this.head = this.head.next
  }
  removeLast() {
    if (!this.head) {
      return
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    // previous.next.data = 3 Now it will modify the head next data. Because we are not modifying the entire object so it will change both. Remember arr2.push(4) effects both arrays. while arr2 = [2] will not effect arr1. Both references will also change.
    //I think here because we have multiple objects in list. So we are assigning those references to these values. We are modifying the references to forward hence values are not changing. Then finally when we reached to end then we specifically modify "the value to the value not the reference again".
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null
    return this.head
  }

  insertLast(data) {
    /** if (!this.head) {
      return null
    }
    let node = this.head;
    while (node) {
      if (!node.next) { //means if it has falsy value
        node.next = new Node('lastOne')
        return this.head;
      }
      node = node.next;
    } */
    /*if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (!this.head.next) {
      this.head.next = new Node(data);
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node.next;
      node = node.next;
    }
    previous.next = new Node(data);
    return this.head*/
    let last = this.getLast()
    // console.log(last == this.head.next) TRUE -- references will be same if we have only two nodes.
    if (last) {
      //means there are some nodes
      last.next = new Node(data)//this.head.next will be same as per this scenario if only two nodes.
    } else {
      this.head = new Node(data)
    }
  } 
  getAt(index) {
    // if (!this.head) { No need of this because below we're handlign this.
    //   return null;
    // }
    let counter = 0;
    let node = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }
      counter++
      node = node.next
    }
    return null
  }
  removeAt(index) {
    let counter = 0;
    let node = this.head;
    let nextNode = this.head.next
    while (node) {
      if (counter === index - 1) {
        node.next = nextNode.next;
        return node;
      }
      counter++;
      node = node.next;
      nextNode = nextNode.next;
    }
    return null
  }
}

const nodeOne = new Node('Hi')
const l1 = new LinkedList()
l1.head = nodeOne; //Even though we dont include this still works and first insertion become head
l1.insertFirst('Hello')
l1.insertFirst('There')
// l1.insertLast('Last')
// console.log(l1.getAt(2))
console.log(l1)
console.log(l1.removeAt(2))
console.log(l1)


module.exports = { Node, LinkedList };

