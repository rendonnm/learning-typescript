const romanMap = {
	I: 1,
	V: 5,
	X: 10,
	L: 50,
	C: 100,
	D: 500,
	M: 1000,
} as const;

type RomanNumber = keyof typeof romanMap;

function romanToInt(s: string): number {
	let total = 0;

	function subtractRoman(base: RomanNumber, substract: RomanNumber) {
		return romanMap[base] - romanMap[substract];
	}

	for (let i = 0; i < s.length; i++) {
		const actualNumber = s[i];
		const nextNumber = s[i + 1];

		switch (actualNumber) {
			case "I":
				if (nextNumber === "V" || nextNumber === "X") {
					total += subtractRoman(nextNumber, actualNumber);
					i++;
					continue;
				}
				break;
			case "X":
				if (nextNumber === "L" || nextNumber === "C") {
					total += subtractRoman(nextNumber, actualNumber);
					i++;
					continue;
				}
				break;
			case "C":
				if (nextNumber === "D" || nextNumber === "M") {
					total += subtractRoman(nextNumber, actualNumber);
					i++;
					continue;
				}
				break;
		}
		total += romanMap[actualNumber as RomanNumber];
	}

	return total;
}
