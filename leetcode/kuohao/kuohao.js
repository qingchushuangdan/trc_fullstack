var isValid = function (s) {
	if (s % 2 === 1){
		return false
	}
	const stack = []
	for (var i = 0; i < s.length; i++){
		if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
			stack.push(s[i])
		} else {
			const stackTop = stack[stack.length - 1]
			if (
				(stackTop === '(' && s[i] === ')') ||
				(stackTop === '[' && s[i] === ']') ||
				(stackTop === '{' && s[i] === '}')
			){
				stack.pop()
			} else{
				return false
			}
		}
	}
	return stack.length === 0
}
console.log(isValid('{[()]}'));