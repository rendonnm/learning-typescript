// 4. Write out the code for the earlier sum function
const sum = (arr: number[]): number => {
  if (arr.length === 1) return arr[0]
  return arr[0] + sum(arr.slice(1))
}
console.log(sum([2, 4, 6]))

// const sumRecursivelly = (arr: number[], idx: number = 0): number => {
//   if (idx >= arr.length) return 0
//   return arr[idx] + sumRecursivelly(arr, idx + 1)
// }
// console.log(sumRecursivelly([2, 4, 6]))

// 4.2 Write a recursive function to count the nummber of items in a list
const countRecursivelly = (arr: number[]): number => {
  if (arr.length === 1) return 1
  return 1 + countRecursivelly(arr.slice(1))
}

console.log(countRecursivelly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))