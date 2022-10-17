const { ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 
 class Queue {
  el = null;

  getUnderlyingList() {
    return this.el
  }

  enqueue(value) {
    let newListNode = new ListNode(value)
    if(!this.el) {
      this.el = newListNode;
       return;
      }
    let last = this.el;
    while(last.next) { 
      last = last.next; 
  }
    last.next = newListNode;
  }

  dequeue() {
    let data = this.el.value
    this.el = this.el.next
    return data
  }
}

module.exports = {
  Queue
};
