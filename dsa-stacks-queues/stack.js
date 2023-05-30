/** Node: node for a stack. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  top = null;
  size = 0;

  constructor() {
    this._arr = new Array();
  }

  /** push(val): add new value to the top of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);
    let currentTop = this.top;

    this._arr.push(newNode);

    this.top = this._arr[this._arr.length - 1];
    this.top.next = currentTop;

    this.size++;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    if (this.size > 0) {
      this.size--;
      let poppedNode = this._arr.pop();
      return poppedNode.val;
    }
    throw new Error;
  }

  /** peek(): return the value of the top node in the stack. */

  peek() {
    return this.top.val;

  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return this.size === 0;
  }
}

module.exports = Stack;
