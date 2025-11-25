type OpenParentheses = "(" | "[" | "{";

function isValid(s: string): boolean {
	const openParenthesesMap: Record<OpenParentheses, string> = {
		"(": ")",
		"[": "]",
		"{": "}",
	};

	const stack: OpenParentheses[] = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] in openParenthesesMap) {
			stack.push(s[i] as OpenParentheses);
		} else {
			if (stack.length === 0) return false;
			if (s[i] === openParenthesesMap[stack[stack.length - 1]]) {
				stack.pop();
			} else return false;
		}
	}

	return stack.length === 0;
}
