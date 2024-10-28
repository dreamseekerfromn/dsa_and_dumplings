/* Instructions: Implement a function that returns the maximum sum of a subarray of size k.
    Example: 
        Input: [1, 2, 3, 4, 5, 6, 7], k = 3
        Output: 18
        Explanation: The maximum sum of a contiguous subarray of size 3 is 18, which is the sum of the last three elements.
        
        Input: [4, 21, 11, 16, -26, 8, 13, -4, 6], k = 4
        Output: 52
        Explanation: The maximum sum of a contiguous subarray of size 4 is 52.
*/

const maxSumSubarray = (arr, k) => {
    let max = -Infinity;
    let index1 = 0;
    let index2 = index1 + k;
    while(index2 <= arr.length){
        let sum = 0;
        for(let i = index1; i < index2; i++){
            sum += arr[i];
        }
        max = Math.max(sum, max);
        index1++;
        index2++;
    }
    return max;
};

module.exports = maxSumSubarray;
