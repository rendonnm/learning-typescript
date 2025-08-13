type NumbersArray = number[]
type Index = number

// 4. Write out the code for the earlier sum function
// const sum = (arr: NumbersArray): number => {
//   if (arr.length === 1) return arr[0]
//   return arr[0] + sum(arr.slice(1))
// }
// console.log(sum([2, 4, 6]))

const sumRecursivelly = (arr: NumbersArray, idx: Index = 0): number => {
  if (idx >= arr.length) return 0
  return arr[idx] + sumRecursivelly(arr, idx + 1)
}
console.log(sumRecursivelly([2, 4, 6]))

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

console.log(countRecursivelly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// 4.3 Write a recursive function to find the maximum number in a list.
function maxNumberRecursive(arr: NumbersArray, idx: Index = 0, maxNumber = -Infinity): number {
  if (arr[idx] === undefined) return maxNumber
  if (arr[idx] > maxNumber) {
    maxNumber = arr[idx]
  }
  return maxNumberRecursive(arr, idx + 1, maxNumber)
}

console.log(maxNumberRecursive([2, 45, 18, 392, 3, 1, 34, 98, 201, 5]))