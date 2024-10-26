import { Node } from './Node.js'

export class LinkedList {
  constructor () {
    this.listHead = null
  }

  append (value) {
    const listTail = this.tail()
    listTail.next = new Node(value)
  }

  prepend (value) {
    this.listHead = new Node(value, this.head())
  }

  size () {
    // toDo
  }

  head () {
    return this.listHead
  }

  tail () {
    let temp = this.head()

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
