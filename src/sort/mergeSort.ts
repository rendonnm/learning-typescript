type NumberArray = number[]

/**
 * Splits an array into two halves: left and right.
 *
 * @param arr - The array to split.
 * @returns An object containing `leftSide` and `rightSide` subarrays.
 */
function splitArray(arr: NumberArray) {
  const middlePoint = Math.floor(arr.length / 2)
  return {
    leftSide: arr.slice(0, middlePoint),
    rightSide: arr.slice(middlePoint)
  }
}

/**
 * Merges two sorted arrays into one sorted array.
 *
 * @param left - First sorted array.
 * @param right - Second sorted array.
 * @returns A new array containing all elements from `left` and `right`, sorted.
 */
const mergeArrays = (left: NumberArray, right: NumberArray): NumberArray => {
  const sortedArray: NumberArray = []
  let i = 0
  let j = 0

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArray.push(left[i])
      i++
    } else {
      sortedArray.push(right[j])
      j++
    }
  }

  // Add remaining elements from either side
  while (i < left.length) {
    sortedArray.push(left[i])
    i++
  }

  while (j < right.length) {
    sortedArray.push(right[j])
    j++
  }

  return sortedArray
}

/**
 * Recursively checks if an array is sorted in ascending order.
 *
 * @param arr - The array to check.
 * @returns `true` if the array is sorted, otherwise `false`.
 */
function verifySorted(arr: NumberArray): boolean {
  const length = arr.length
  if (length === 0 || length === 1) return true
  return arr[0] < arr[1] && verifySorted(arr.slice(1))
}

/**
 * Sorts an array using the merge sort algorithm.
 *
 * @param arr - The array to sort.
 * @returns A new sorted array.
 */
const mergeSort = (arr: NumberArray): NumberArray => {
  if (arr.length <= 1) return arr
  const { leftSide, rightSide } = splitArray(arr)
  const left = mergeSort(leftSide)
  const right = mergeSort(rightSide)
  return mergeArrays(left, right)
}

// Example usage
const someList = [54, 43, 24, 543, 3, 2, 1, 56, 87]
console.log(someList)
console.log(`Is sorted: ${verifySorted(someList)}`)
const sortedList = mergeSort(someList)
console.log(sortedList)
console.log(`Is sorted: ${verifySorted(sortedList)}`)
