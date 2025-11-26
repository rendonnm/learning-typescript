function twoSum(nums: number[], target: number): number[] {
	const numberMap = new Map<number, number>();

	for (let i = 0; i < nums.length; i++) {
		const expected = target - nums[i];
		if (numberMap.has(expected)) {
			return [numberMap.get(expected)!, i];
		}

		numberMap.set(nums[i], i);
	}
	return [];
}
