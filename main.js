import { LinkedList } from './LinkedList.js'

const linkedList = new LinkedList()

console.log(linkedList)

linkedList.prepend(5)
linkedList.prepend(30)
linkedList.prepend(40)
linkedList.prepend(54)

console.log(linkedList)

console.log(linkedList.head())
console.log(linkedList.tail())
