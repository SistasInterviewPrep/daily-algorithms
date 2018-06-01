function singleEntryv1(arr) {
	let map ={};

	for (let i = 0; i < arr.length; i++) {
		if (map[arr[i]]) {
			map[arr[i]] += 1;
		}
		else {
			map[arr[i]] = 1;
		}
	}

	for (int in map) {
		if (map[int] === 1) {
			return int;
		}
	}
}


const ex1 = [2,2,1];
const ex2 = [4,1,2,1,2];

console.log(singleEntry(ex1));
console.log(singleEntry(ex2));

