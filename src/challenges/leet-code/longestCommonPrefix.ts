function longestCommonPrefix(strs: string[]): string {
	if (strs.length === 0) return "";
	const firstWord = strs[0];
	const commonLetters: string[] = [];

	for (let i = 0; i < firstWord.length; i++) {
		let isCommon = true;
		for (let j = 1; j < strs.length; j++) {
			if (i >= strs[j].length || strs[j][i] !== firstWord[i]) {
				isCommon = false;
				break;
			}
		}

		if (isCommon) {
			commonLetters.push(firstWord[i]);
		} else {
			break;
		}
	}

	return commonLetters.join("");
}
