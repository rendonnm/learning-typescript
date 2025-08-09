class SingleNode {
  constructor(
    public data: number,
    public next?: SingleNode
  ) {}
}

class LinkedList {
  constructor(
    public head?: SingleNode,
    public tail?: SingleNode
  ) {}

  size() {
    let currentNode = this.head
    if (!this.head) return 0

    let counter = 0
    while (currentNode) {
      counter++
      currentNode = currentNode.next
    }

    return counter
  }

  push(newNode: SingleNode) {
    if (this.isEmpty()) {
      this.assignHeadAndTail(newNode)
      return 1
    }

    if (this.tail) {
      this.tail.next = newNode
      this.tail = newNode
      return 1
    }

    return -1
  }

  unshift(newNode: SingleNode) {
    if (this.isEmpty()) {
      this.assignHeadAndTail(newNode)
      return -1
    }

    newNode.next = this.head
    this.head = newNode
    return 1
  }

  isEmpty() {
    return !this.head
  }

  assignHeadAndTail(newNode: SingleNode) {
    this.head = newNode
    this.tail = newNode
  }

  searchValue(target: number) {
    let currentValue = this.head

    while (currentValue) {
      if (currentValue.data === target) {
        return currentValue
      }

      currentValue = currentValue.next
    }

    return null
  }

  insert(targetIndex: number, node: SingleNode) {
    if (targetIndex === 0) {
      this.unshift(node)
      return 1
    }

    let currentNode = this.head
    let previousNode: SingleNode | undefined
    let index = 0

    while (currentNode) {
      if (index === targetIndex) {
        if (previousNode) {
          previousNode.next = node
          node.next = currentNode
          return 1
        }
      }
      previousNode = currentNode
      currentNode = currentNode.next
      index++
    }

    if (index === targetIndex && previousNode) {
      previousNode.next = node
      this.tail = node
      return 1
    }

    return null
  }

  delete(targetValue: number) {
    let currentNode = this.head
    let prevCurrentNode: SingleNode | undefined

    while (currentNode) {
      if (currentNode.data === targetValue) {
        if (prevCurrentNode?.next) {
          prevCurrentNode.next = currentNode.next
        } else {
          this.head = undefined
          this.tail = undefined
        }
        return 1
      }

      prevCurrentNode = currentNode
      currentNode = currentNode.next
    }

    return -1
  }
}

const aLinkedList = new LinkedList(undefined, undefined)
const firstItem = new SingleNode(3)
const secondItem = new SingleNode(89)
const thridItem = new SingleNode(777)

console.log(aLinkedList.size())
console.log(aLinkedList.push(firstItem))
console.log(aLinkedList)
console.log(aLinkedList.unshift(secondItem))
console.log(aLinkedList)
console.log(aLinkedList.push(thridItem))
console.log(aLinkedList)

console.log(aLinkedList.searchValue(89))

const fourthItem = new SingleNode(666)

aLinkedList.insert(1, fourthItem)
aLinkedList.delete(666)
console.log(aLinkedList)
