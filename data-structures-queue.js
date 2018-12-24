// Implement a FIFO Queue

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.end = null;
  }

  enqueue(data) {
    let newNode = new Node(data);
    if (this.front === null) {
      this.front = newNode;
      this.end = this.front;
    }

    let curr = this.end;

    this.end = this.front;

    this.end.next = node;
  }

  dequeue() {
    if (this.end) {
      let curr = this.end;
      this.end = null;
      return curr;
    }
  }

  toString() {}
}
