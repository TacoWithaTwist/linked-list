class LinkedList {
  constructor() {
    this.listHead = null;
  }
  prepend(value) {
    let aux = null;
    if (this.listHead != null) {
      aux = this.listHead;
    }
    this.listHead = new Node(value);
    this.listHead.pointer = aux;
  }
  append(value) {
    if (this.listHead === null) {
      this.prepend(value);
    } else {
      let aux = this.listHead;
      while (aux.pointer !== null) {
        aux = aux.pointer;
      }
      aux.pointer = new Node(value);
    }
  }
  size() {
    let index = 0;
    let aux = this.listHead;
    while (aux.pointer !== null) {
      aux = aux.pointer;
      index++;
    }
    return index;
  }
  head() {
    return this.listHead;
  }
  tail() {
    let aux = this.listHead;
    while (aux.pointer !== null) {
      aux = aux.pointer;
    }
    return aux;
  }
  at(index) {
    let count = 0;
    let aux = this.listHead;
    while (aux.pointer !== null && count < index) {
      aux = aux.pointer;
    }
    if (aux === null) {
      return 'There is no item at this index';
    } else {
      return aux;
    }
  }
  pop() {
    let aux = this.listHead;
    let scnd_aux = aux.pointer;
    while (scnd_aux.pointer !== null) {
      aux = aux.pointer;
      scnd_aux = scnd_aux.pointer;
    }
    aux.pointer = null;
  }
  contains(value) {
    let aux = this.listHead;
    while (aux.pointer !== null) {
      if (aux.value === value) {
        return true;
      }
      aux = aux.pointer;
    }
    return false;
  }
  find(value) {
    let aux = this.listHead;
    let index = 0;
    while (aux.pointer !== null) {
      if (aux.value === value) {
        return index;
      }
      index++;
      aux = aux.pointer;
    }
    return 'No item found';
  }
  toString() {
    let tmp = this.listHead;
    let stringList = '';
    while (tmp != null) {
      stringList += `(${tmp.value}) -> `;
      tmp = tmp.pointer;
    }
    return (stringList += 'null');
  }
  insertAt(value, index) {
    let count = 0;
    let aux = this.listHead;
    while (aux.pointer !== null && count < index - 1) {
      aux = aux.pointer;
    }
    if (aux.pointer === null) {
      this.append(value);
    } else {
      let newPointer = aux.pointer;
      aux.pointer = new Node(value, newPointer);
    }
  }
  removeAt(value, index) {
    if (this.listHead == null) return 'List is already empty';

    let cur = this.listHead;
    let prev = null;
    for (let i = 0; i < index; i++) {
      prev = cur;
      cur = cur.pointer;
      if (cur == null) return 'There is no item for this index';
    }
    prev.pointer = cur.pointer;
  }
}

class Node {
  constructor(value = null, pointer = null) {
    this.value = value;
    this.pointer = null;
  }
}
const linkedList = new LinkedList();
linkedList.prepend('test1');
linkedList.append('test2');
linkedList.append('test3');
console.log(linkedList.toString()); // (test1) -> (test2) -> (test3) -> null
console.log(linkedList.size()); // 3
console.log(linkedList.head()); // return head Node
console.log(linkedList.tail()); // Node { value: 'test3', nextNode: null }
console.log(linkedList.at(2)); // Node { value: 'test3', nextNode: null }
console.log(linkedList.at(4)); // There is no item for this index
linkedList.pop();
console.log(linkedList.toString()); // (test1) -> (test2) -> null
console.log(linkedList.contains('test1')); // true
console.log(linkedList.find('test2')); // 1
linkedList.prepend('test3');
console.log(linkedList.toString()); // (test3) -> (test1) -> (test2) -> null
linkedList.insertAt('test4', 2);
console.log(linkedList.toString()); // (test3) -> (test1) -> (test4) -> (test2) -> null
linkedList.insertAt('test5', 8);
console.log(linkedList.toString()); // (test3) -> (test1) -> (test4) -> (test2) -> (test5) -> null
linkedList.removeAt(2);
console.log(linkedList.toString()); // (test3) -> (test1) -> (test2) -> (test5) -> null
