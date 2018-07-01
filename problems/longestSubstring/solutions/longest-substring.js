/*
 * Have a pointer that tracks the starting index
 * of the current substring.
 *
 * Create a map of each character and it's index - 
 * If the current character is in the lookup, update
 * the starting index.
 * If not in the lookup, add the current character to the
 * the map with its index as the value.
 * Update maxlength of substring
 */

const input1 = "abcbabcbb";
const input2 = "bbbbb";
const input3 = "pwwkew";

function longestSubstring(input) {
  let substringlookUp = new Object();
  let startIndex = 0;
  let max = 0;
  
  if (input.length <= 0) {
    return 0;
  }

  if (input.length === 1) {
    return 1;
  }

  for (var i = 0; i < input.length; i++) {
    if (substringlookUp[input[i]]) {
      startIndex = substringlookUp[input[i]];
    } else {
      substringlookUp[input[i]] = i;
      max = Math.max(max, i - startIndex);
    }
  }

  return max;
}

longestSubstring(input1);
longestSubstring(input2);
longestSubstring(input3);
