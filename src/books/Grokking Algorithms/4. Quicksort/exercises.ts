type NumbersArray = number[]
type Index = number

// 4.1 Write out the code for the earlier sum function
// const sum = (arr: NumbersArray): number => {
//   if (arr.length === 1) return arr[0]
//   return arr[0] + sum(arr.slice(1))
// }
// console.log(sum([2, 4, 6]))

const sumRecursivelly = (arr: NumbersArray, idx: Index = 0): number => {
  if (idx >= arr.length) return 0
  return arr[idx] + sumRecursivelly(arr, idx + 1)
}
console.log(sumRecursivelly([2, 4, 6])) // 12

// 4.2 Write a recursive function to count the nummber of items in a list
// const countRecursivelly = (arr: NumbersArray): number => {
//   if (arr.length === 1) return 1
//   return 1 + countRecursivelly(arr.slice(1))
// }

// console.log(countRecursivelly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

const countRecursivelly = (arr: NumbersArray, idx: Index = 0): number => {
  if (arr[idx] === undefined) return 0
  return 1 + countRecursivelly(arr, idx + 1)
}

console.log(countRecursivelly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])) // 10

// 4.3 Write a recursive function to find the maximum number in a list.
function maxNumberRecursive(arr: NumbersArray, idx: Index = 0, maxNumber = -Infinity): number {
  if (arr[idx] === undefined) return maxNumber
  if (arr[idx] > maxNumber) {
    maxNumber = arr[idx]
  }
  return maxNumberRecursive(arr, idx + 1, maxNumber)
}

console.log(maxNumberRecursive([2, 45, 18, 392, 3, 1, 34, 98, 201, 5])) // 392

//4.4 Remember binary search from chapter 1? It’s a D&C algorithm, too. 
// Can you come up with the base case and recursive case for binary search?
function recursiveBinarySearch(arr: NumbersArray, target: number, left: number = 0, right: number = arr.length - 1) {
  if (left > right) return null

  const middlePoint = Math.floor((left + right) / 2)
  if (arr[middlePoint] === target) return middlePoint

  if (arr[middlePoint] > target) {
    return recursiveBinarySearch(arr, target, left, middlePoint - 1)
  } else {
    return recursiveBinarySearch(arr, target, middlePoint + 1, right)
  }
}

console.log(recursiveBinarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 40)) //3