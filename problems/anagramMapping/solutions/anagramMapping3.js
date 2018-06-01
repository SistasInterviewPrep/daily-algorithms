function isAnagramv1(first, second) {

	//loop through b vector 

	let map = {};
	let result = [];

	for (let i = 0; i < first.length; i++) {
		map[first[i]] = i;
	}
	for (let i = 0; i < second.length; i++) {
		if(map[second[i]] != undefined) {
			map[second[i]] = i;
		}
	}

	for (let i = 0; i < first.length; i++) {
		if (map[first[i]] != undefined) {
			result.push(map[first[i]]);
		}
	}
	return result;
}

let A = [12, 28, 46, 32, 50];
let B = [50, 12, 32, 46, 28];

//expect [1, 4, 3, 2, 0]


function isAnagram(first, second) {
	let map = {};
	let result = [];

	for (let i = 0; i < second.length; i++) {
		map[second[i]] = i;
	}

	for (let i = 0; i < first.length; i++) {
		if (map[first[i]] != undefined) {
			result.push(map[first[i]]);
		}
	}

	return result;
}

console.log(isAnagram(A,B));

