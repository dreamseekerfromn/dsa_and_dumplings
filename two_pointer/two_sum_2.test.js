const twoSum2 = require("./two_sum_2");
const TwoSum = require("./two_sum_2");

// create tests for a two sum problem
describe("TwoSum", () => {
  let twoSum;

  beforeEach(() => {
    twoSum = new twoSum2();
  });

  test("should return the indices of the two numbers such that they add up to a specific target", () => {
    expect(twoSum.twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    expect(twoSum.twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    expect(twoSum.twoSum([3, 3], 6)).toEqual([0, 1]);
  });
});
