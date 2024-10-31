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
    if (index >= this.size()) return `invalid value. Max Value: ${this.size() - 1}`
    if (index === 0) return this.head()

    let temp = this.head()
    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    return temp
  }

  pop () {
    if (this.size() < 2) {
      console.log('Invalid Method, tail no found')
      return
    }
    const temp = this.at(this.size() - 2)
    temp.next = null
    this.listSize--
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
