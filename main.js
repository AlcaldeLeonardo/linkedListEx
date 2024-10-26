import { LinkedList } from './LinkedList.js'

const linkedList = new LinkedList()

console.log(linkedList)

linkedList.prepend(5)
linkedList.prepend(30)
linkedList.append("I'm the tail")
linkedList.prepend(40)
console.log(linkedList.tail())
linkedList.prepend(54)
linkedList.append('im the tail now')
console.log(linkedList)

console.log(linkedList.head())
console.log(linkedList.tail())
