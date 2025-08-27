const binarySearch = (arr: number[], target: number) => {
	let low = 0;
	let high = arr.length - 1;
	while (low <= high) {
		const middlePoint = Math.floor((low + high) / 2);
		if (arr[middlePoint] === target) return middlePoint;
		if (arr[middlePoint] > target) {
			high = middlePoint - 1;
		} else {
			low = middlePoint + 1;
		}
	}
	return null;
};

const bestArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(bestArray, 10));
