function romanToNum(str){

	let map = {'I': 1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M': 1000};
	let split = str.split('');
	let result = 0;

	for (let i = 0; i < split.length; i++) {

		if (map[split[i]] < map[split[i + 1]]) {
			if (map[split[i + 1]] === 5) {
				result += 4;
			}
			if (map[split[i + 1]] === 10) {
				result += 9;
			}
			if (map[split[i + 1]] === 50) {
				result += 40;
			} 
			if (map[split[i + 1]] === 100) {
				result += 90;
			}
			if (map[split[i + 1]] === 500) {
				result += 400;
			}
			if (map[split[i + 1]] === 1000) {
				result += 900;
			}
			i++;
		}
 		else {
			result += map[split[i]];
		}
	}

	return result;
	

}

const three = 'III';
const four = 'IV';
const nine = 'IX';
const fiftyEight = 'LVIII';
const nineteenNinetyFour = 'MCMXCIV';

console.log(romanToNum(three));
console.log(romanToNum(four));
console.log(romanToNum(nine));
console.log(romanToNum(fiftyEight));
console.log(romanToNum(nineteenNinetyFour));


// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
