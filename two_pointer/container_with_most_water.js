/** Instructions:
    Implement a function that returns the maximum area of water that can be contained between two lines.
    The input is an array of integers where each integer represents the height of a line.
    Example:
        * Input: [1, 8, 6, 2, 5, 4, 8, 3, 7]
        * Output: 49
        * Explanation: The maximum area of water contained by the container is 49, which is formed between the lines at index 1 and index 8.
 */

function containerWithMostWater(arr) {
    let index1 = 0;
    let index2 = arr.length - 1;
    let maxArea = 0;
    while(index1 < index2){
        let w = index2 - index1;
        let h = Math.min(arr[index1], arr[index2]);
        let currentArea = w * h;
        maxArea = Math.max(currentArea, maxArea);

        if(arr[index1] < arr[index2]){
            index1++;
        } else {
            index2--;
        }
    }
    return maxArea;
}

module.exports = containerWithMostWater;
