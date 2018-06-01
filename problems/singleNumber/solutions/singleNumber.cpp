// O(1) space complexity, O(n) time complexity

#include <iostream>
using namespace std;

int singleNumber(vector<int>& nums) {
	int result = 0;

	for (auto &element: nums) result ^= element;
	return result;
}

