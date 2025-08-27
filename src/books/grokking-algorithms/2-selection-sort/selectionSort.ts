function getSmallestNumber(arr: number[]) {
	if (arr.length === 0) return null;
	const smallestNumber = {
		idx: 0,
		data: arr[0],
	};
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < smallestNumber.data) {
			smallestNumber.idx = i;
			smallestNumber.data = arr[i];
		}
	}
	return smallestNumber;
}

const selectionSort = (arr: number[]) => {
	const sortedArray: number[] = [];
	let copyArray: number[] = [...arr];

	while (copyArray.length > 0) {
		const smallestNumber = getSmallestNumber(copyArray);

		if (smallestNumber) {
			sortedArray.push(smallestNumber.data);
			copyArray = [
				...copyArray.slice(0, smallestNumber.idx),
				...copyArray.slice(smallestNumber.idx + 1),
			];
		}
	}
	return sortedArray;
};

const unorderedArray = [5, 3, 8, 3, 1, 9, 10, 2];

console.log(selectionSort(unorderedArray));
