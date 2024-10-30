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
    let str = "";
    
    for(let i of s){
        if((i.charCodeAt(0) >= 97 && i.charCodeAt(0) <= 122) || (i.charCodeAt(0) >= 65 && i.charCodeAt(0) <= 90) || (i.charCodeAt(0) >= 48 && i.charCodeAt(0) <= 57)){
            str += i.toLowerCase();
        }
    }
    
    let index1 = 0;
    let index2 = str.length - 1;
    
    while(index1 < str.length && index2 >= 0){
        if(str[index1] != str[index2]){
            return false;
        }
        index1++;
        index2--;
    }

    return true;
    
};

module.exports = validPalindrome;
