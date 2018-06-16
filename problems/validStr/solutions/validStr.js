function validStr(s) {
	let map = {"{":"}", "(":")", "[":"]"};
	let stack = [];

	if (s === "") return true;
	if (s.length < 2) return false;


	for (let i = 0; i < s.length; i++) {
		if (map[s[i]]) {
			stack.push(s[i]);
		}
		else {
			let pop = stack.pop();
			if (map[pop] === s[i]) {
				continue;
			}
			else {
				return false;
			}
		}
	}
	return stack.length > 0 ? false : true;
}

const input1 = "()"; //expect true
const input2 = ""; //expect true;
const input3 = "()[]{}"; //expect true
const input4 = "(]"; //expect false
const input5 = "([)]"; //expect false
const input6 = "{[]}"; //expect true
const input7 = "(("; //expect false;
const input8 = "["; //expect false


// console.log(validStr(input1));
// console.log(validStr(input2));
// console.log(validStr(input3));
// console.log(validStr(input4));
// console.log(validStr(input5));
console.log(validStr(input6));
console.log(validStr(input7));
console.log(validStr(input8));