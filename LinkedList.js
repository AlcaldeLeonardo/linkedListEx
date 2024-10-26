import { Node } from './Node.js'

export class LinkedList {
  constructor () {
    this.listSize = 0
    this.listHead = null
  }

  append (value) {
    const listTail = this.tail()
    listTail.next = new Node(value)

    this.listSize++
  }

  prepend (value) {
    this.listHead = new Node(value, this.head())
    this.listSize++
  }

  size () {
    return this.listSize
  }

  head () {
    return this.listHead
  }

  tail () {
    let temp = this.head()
    if (temp === null) {
      return 'empty List\n'
    }
    while (temp.next !== null) temp = temp.next
    return temp
  }

  at (index) {
    // toDo
  }

  pop () {
    // toDo
  }

  contains (value) {
    // toDo
  }

  find (value) {
    // toDo
  }

  toString () {
    // toDo
  }

  insertAt (value, index) {
    // toDo
  }

  removeAt (index) {
    // toDo
  }
}
