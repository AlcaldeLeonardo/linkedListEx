import { LinkedList } from './LinkedList.js'

const linkedList = new LinkedList()

linkedList.prepend(5)
linkedList.prepend(30)
linkedList.append("I'm the tail")
linkedList.prepend(40)
linkedList.append('im the tail now')
linkedList.pop()
console.log(linkedList.find(40))
console.log(linkedList.toString())
linkedList.insertAt('90', 4)
console.log(linkedList.toString())
console.log(linkedList.size())
linkedList.removeAt(0)
console.log(linkedList.toString())
