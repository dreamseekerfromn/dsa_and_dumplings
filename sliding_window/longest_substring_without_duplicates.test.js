const longestSubstringWithoutDuplicates = require("./longest_substring_without_duplicates");

describe("longestSubstringWithoutDuplicates", () => {
  test("should return the length of the longest substring without repeating characters", () => {
    expect(longestSubstringWithoutDuplicates("abcabcbba")).toBe(3);
    expect(longestSubstringWithoutDuplicates("bbbbb")).toBe(1);
    expect(longestSubstringWithoutDuplicates("pwwkew")).toBe(3);
  });
});
