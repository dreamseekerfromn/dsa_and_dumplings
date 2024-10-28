/* Instructions:
    Implement a function that checks if a given string is a valid palindrome.
    A valid palindrome is defined as a string that reads the same backward as forward, ignoring spaces, punctuation, and capitalization.
    Characters that are not alphanumeric should be ignored.
    Examples:
        Input: "Madam, I am Adam"
        Output: true
        Explanation: The string is a valid palindrome when ignoring spaces, punctuation, and capitalization.

*/

const validPalindrome = (s) => {
    s = s.split('').join(' ');
    let index1 = 0;
    let index2 = s.length - 1;
    while(index1 < index2){
        if(s[index1].toLowerCase() != s[index2].toLowerCase()){
            return false;
        }
        index1++;
        index2--;
    }
    return true;
};

module.exports = validPalindrome;
