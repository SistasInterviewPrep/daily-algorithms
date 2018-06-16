var majorityElement = function(nums) {
    let counter = {};
    let current = nums[0];
    
    for (var i = 0; i < nums.length; i++)
        {
            if (counter[nums[i]])
                {
                    counter[nums[i]]++;
                }
            else {
                counter[nums[i]] = 1;
            }
        }
    
    for (item in counter)
        {
            if (counter[item] > counter[current])
                {
                    current = item;
                }
        }
    
    return parseInt(current);    
    
};

const sample1 = [3,2,3] //expect 3
const sample2 = [2,2,1,1,1,2,2] //expect 2

console.log(majorityElement(sample1));
console.log(majorityElement(sample2));