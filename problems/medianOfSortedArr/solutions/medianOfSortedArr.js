function findMedianSortedArr(nums1, nums2) {
	let merged = [];
	let index1 = 0;
	let index2 = 0;

	while (index1 < nums1.length && index2 < nums2.length) {
		if (nums1[index1] < nums2[index2]) {
			merged.push(nums1[index1++]);
		}
		else {
			merged.push(nums2[index2++]);
		}
	}
	if (index1 < nums1.length) {
		merged = merged.concat(nums1.slice(index1));
	}
	if (index2 < nums2.length) {
		merged = merged.concat(nums2.slice(index2));
	}
	let length = merged.length;

	if (length % 2) {
		return merged[parseInt((length - 1) / 2)];
	}
	else {
		return (merged[parseInt((length - 1) / 2)] + merged[parseInt(length / 2)]) / 2;
	}
}


const nums1 = [1,3];
const nums2 = [2];

const nums3 = [1,2];
const nums4 = [3,4];
console.log(findMedianSortedArr(nums1, nums2)); //expect 2.0
console.log(findMedianSortedArr(nums3, nums4)); //expect 2.5

const nums5 = [];
const nums6 = [1];
console.log(findMedianSortedArr(nums5, nums6)); //expect 1