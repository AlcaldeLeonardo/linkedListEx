import { Node } from './Node.js'

export class LinkedList {
  constructor () {
    this.listSize = 0
    this.listHead = null
  }

  append (value) {
    if (this.listHead === null) {
      this.listHead = new Node(value)
    } else {
      const listTail = this.tail()
      listTail.next = new Node(value)
    }

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
      return null
    }
    while (temp.next !== null) temp = temp.next
    return temp
  }

  at (index) {
    if (index >= this.size()) {
      console.log(`invalid value. Max Value: ${this.size() - 1}`)
      return null
    }
    if (index === 0) return this.head()

    let temp = this.head()
    for (let i = 0; i < index; i++) {
      temp = temp.next
    }
    return temp
  }

  pop () {
    if (this.size() === 0) {
      console.log('Invalid Method, list is empty')
      return
    }
    if (this.size() === 1) {
      this.listHead = null
    } else {
      const temp = this.at(this.size() - 2)
      temp.next = null
    }
    this.listSize--
  }

  contains (value) {
    if (this.size() === 0) {
      console.log('Empty List')
      return false
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
    if (this.size() === 0) return 'null'
    let temp = this.head()
    let value = `(${temp.value})`
    while (temp.next !== null) {
      temp = temp.next
      value = value.concat(` -> (${temp.value})`)
    }
    return value.concat(' -> null')
  }

  insertAt (value, index) {
    if (index < 0 || index > this.size()) {
      console.log('Index out of bounds')
      return
    }

    if (index === 0) {
      this.prepend(value)
      return
    }
    const node = this.at(index - 1)
    const newNode = new Node(value, node.next)
    node.next = newNode
    this.listSize++
  }

  removeAt (index) {
    if (index < 0 || index >= this.size()) {
      console.log('Index out of bounds')
      return
    }

    const nodeToDel = this.at(index)
    if (nodeToDel === this.head()) {
      const head = this.head()
      const newNode = head.next
      this.listHead = newNode
      this.listSize--
      return
    }
    const preNode = this.at(index - 1)
    preNode.next = nodeToDel.next
    this.listSize--
  }
}
