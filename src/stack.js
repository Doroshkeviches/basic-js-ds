const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
 class Stack {
  arr = []

  push(element) {
    this.arr = this.arr.concat(element)
  }

  pop() {
    if(this.arr.length == 0) return undefined
    let result = this.arr[this.arr.length - 1]
    this.arr = this.arr.slice(0, this.arr.length - 1)
    return result
  }

  peek() {
    if(this.arr.length == 0){
      return undefined
    } else{
      return this.arr[this.arr.length - 1]
    }
  }
}

module.exports = {
  Stack
};
