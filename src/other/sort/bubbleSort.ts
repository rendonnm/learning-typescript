const bubbleSort = (arr: number[]) => {
  let isSorted = false
  while (!isSorted) {
    isSorted = true
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        isSorted = false
      }
    }
  }
  return arr
}

const awesomeArray = [2, 1, 564, 32, 23, 7, 3, 59]

console.log(bubbleSort(awesomeArray))