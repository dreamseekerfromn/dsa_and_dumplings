/* Instructions: Implement a function that returns the length of the longest substring without repeating characters.
    Examples: 
        Input: "abcabcbb"
        Output: 3
        Explanation: The answer is "abc", with the length of 3.

        Input: "bbbbb"
        Output: 1
        Explanation: The answer is "b", with the length of 1.
*/

const longestSubstringWithoutDuplicates = (s) => {
    let set = new Set();
    let j = 0;
    let max = 0;
    for(let i = 0; i < s.length; i++){
        while(set.has(s[i])){
            set.delete(s[j]);
            j++;
        }
        set.add(s[i]);
        max = Math.max(max, i - j + 1);
    }
    return max;
};

module.exports = longestSubstringWithoutDuplicates;
