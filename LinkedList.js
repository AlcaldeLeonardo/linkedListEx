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
    if (this.size() === 0) {
      console.log('Empty List')
      return
    }
    let temp = this.head()
    while (temp !== null) {
      if (temp.value === value) return true
      temp = temp.next
    }
    return false
  }

  find (value) {
    let temp = this.head()
    let index = 0
    while (temp !== null) {
      if (value === temp.value) {
        return index
      }
      temp = temp.next
      index++
    }
    return null
  }

  toString () {
    let temp = this.head()
    let value = `(${temp.value})`
    while (temp.next !== null) {
      temp = temp.next
      value = value.concat(` -> (${temp.value})`)
    }
    return value.concat(' -> null')
  }

  insertAt (value, index) {
    if (index === 0) {
      this.prepend(value)
      return
    }
    const node = this.at(index - 1)
    const newNode = new Node(value, node.next)
    node.next = newNode
  }

  removeAt (index) {
    // toDo
  }
}
