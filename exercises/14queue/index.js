// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

//In Queue we usually create one with some methods like unshift(), pop() etc. Reason for Queue maybe Performance bc not many methods are there.

class Queue {
  constructor() { //This will be called automatically by the instances
    this.data = []
  }

  add(record) {
    this.data.unshift(record)
  }
  remove() {
    return this.data.pop()
  }
} 

module.exports = Queue;
