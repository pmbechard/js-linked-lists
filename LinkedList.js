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

  pop() {
    let node = { ...this.root };
    while (node.next.next) node = node.next;
    let result = { ...node.next };
    node.next = null;
    return result;
  }

  contains(value) {
    let node = { ...this.root };
    while (node.next) {
      if (node.value === value) return true;
      node = node.next;
    }
    return false;
  }

  find(value) {
    let node = { ...this.root };
    let counter = 0;
    while (node.next) {
      if (node.value === value) return counter;
      counter++;
      node = node.next;
    }
    return null;
  }

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
