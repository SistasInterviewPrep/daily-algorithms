var longestCommonPrefix = function(strs) {
    let result = '';   
    if (strs.length === 0) return '';
    for (let i = 0; i < strs[0].length; i++) {
        let currChar = strs[0][i];        
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] != currChar || !strs[j][i] || strs[j] === '') return result;      
        }
        result += currChar;
    }
    return result;
    
};

const input1 = ["flower","flow","flight"];
const input2 = ["dog","racecar","car"];

console.log(longestCommonPrefix(input1));
console.log(longestCommonPrefix(input2));