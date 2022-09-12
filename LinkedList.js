export class LinkedList {
  constructor(root) {
    this.root = root;
  }

  append(node) {
    let current = { ...this.root };
    while (current.next) current = current.next;
    current.next = node;
  }

  prepend(node) {
    node.next = { ...this.root };
    this.root = node;
  }

  size() {
    let counter = 1;
    let node = { ...this.root };
    while (node.next) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  head() {
    return this.root;
  }

  tail() {
    let node = { ...this.root };
    while (node.next) node = node.next;
    return node;
  }

  at(index) {
    let counter = 0;
    let node = { ...this.root };
    if (counter === index) return node;
    while (node.next) {
      if (counter === index) return node;
      counter++;
      node = node.next;
    }
    return null;
  }

  pop() {}
  contains(value) {}
  find(value) {}

  toString() {
    let node = { ...this.root };
    let result = '';
    while (node) {
      result += `( ${node.value} ) -> `;
      node = node.next;
    }
    return result + 'null';
  }

  insertAt(value, index) {}
  removeAt(index) {}
}