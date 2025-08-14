function quickSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;

  const [pivot, ...rest] = arr;
  const less = rest.filter(n => n <= pivot);
  const greater = rest.filter(n => n > pivot);

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

const unsortedArray = [0, 10, 49, 20, 7, 8, -10, 3, 2, 39, 1, 0]

console.log(quickSort(unsortedArray))