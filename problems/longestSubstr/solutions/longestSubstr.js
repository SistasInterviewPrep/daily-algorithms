function longestSubstr(s) {

	let length = s.length;
	let set = new Set();
	let result = 0; 
	let i = 0; 
	let j = 0;

	while (i < length && j < length) {
		if (!set.has(s.charAt(j))) {
			set.add(s.charAt(j));
			j++;
			result = Math.max(result, j - i);
		}
		else {
			set.delete(s.charAt(i));
			i++;
		}
	}
	return result;
}



const firstStr = "abcabcbb"; //expect 3 ("abc")
const secondStr = "bbbbb"; // expect 1 ("b")
const thirdStr = "pwwkew"; //expect  3 ("wke")
const fourthStr = "ckilbkd"; //expect 5 ("ckilb")
const fifth = "tmmzuxt"; //expect 5 ("mzuxt")
const sixth = "aab"; //expect 2 ("ab")
const seventh = "dvdf"; //expect 3 ("vdf");

console.log(longestSubstr(firstStr))
console.log(longestSubstr(secondStr))
console.log(longestSubstr(thirdStr))
console.log(longestSubstr(fourthStr))
console.log(longestSubstr(fifth))
console.log(longestSubstr(sixth))
console.log(longestSubstr(seventh))



