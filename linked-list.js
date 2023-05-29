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

    let currentItem = this.head;
    let nextItem = currentItem.next;

    // special case: list is 1 item long
    if (this.length === 1) {
      this.head = null;
      this.tail = this.head;
      this.length--;
      return removedNode.val;
    }

    while (nextItem.next !== null) {
      currentItem = currentItem.next;
      nextItem = nextItem.next;
    }

    currentItem.next = null;
    this.tail = currentItem;
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
      this.head = removedNode.next;
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
    let current = this.head;
    let count = 0;

    while (current !== null) {
      if (count === idx) {
        current.val = val;
        return;
      }
      current = current.next;
      count++;
    }

    // if index doesn't exist
    throw new Error;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);
    let count = 0;

    // throw error if index is invalid
    if (idx > this.length || idx < 0) throw new Error;

    // insert into empty list
    if (this.length === 0) {
      this.head = newNode;
      this.tail = this.head;
      this.length++;
      return;
    }

    let currentItem = this.head;
    let nextItem = currentItem.next;

    // handles index at first/last positions
    if (idx === 0) {
      this.head = newNode;
      newNode.next = currentItem;
      this.length++;
      return;
    }
    if (idx === this.length) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    while (currentItem !== null && count + 1 !== idx) {
      currentItem = currentItem.next;
      nextItem = nextItem.next;
      count++;
    }

    currentItem.next = newNode;
    newNode.next = nextItem;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {

  }
}

module.exports = LinkedList;
