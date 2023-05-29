/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if (this.head !== null) newNode.next = this.head;
    if (this.tail === null) this.tail = newNode;

    this.head = newNode;
    this.length++;
  }

  /** pop(): return & remove last item. */

  pop() {
    const removedNode = this.tail;

    let item = this.head;
    while (item.next !== null) {
      item = item.next;
    }

    item.next = null;
    console.log("item is", item);
    this.tail = item;
    this.length--;

    return removedNode.val;
  }

  /** shift(): return & remove first item. */

  shift() {
    const removedNode = this.head;

    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next
    }
    this.length--;

    return removedNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let current = this.head;
    let count = 0;

    while (current !== null) {
      if (count === idx) return current.val;
      current = current.next;
      count++;
    }

    throw new Error;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

module.exports = LinkedList;
