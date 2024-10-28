// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Examples:
// Input: nums = [2, 7, 11, 15], target = 9
// Output: [0, 1]
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

function twoSum2(arr, target) {
    console.log(arr)
    let index1 = 0;
    let index2 = arr.length - 1;
    do{
        let calculation = arr[index1] + arr[index2];
        if(calculation == target){
            return [index1 + 1, index2 + 1];
        } else if (calculation > target){
            index2--;
        } else {
            index1++;
        }
    } while(index1 < index2);
}

module.exports = twoSum2;
