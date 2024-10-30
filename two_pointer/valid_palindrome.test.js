const validPalindrome = require("./valid_palindrome");

describe("validPalindrome", () => {
  test("should return true if the string is a valid palindrome", () => {
    expect(validPalindrome("Madam, I am Adam")).toBe(false);
    expect(validPalindrome("A man, a plan, a canal: Panama")).toBe(true);
    expect(
      validPalindrome("You ever dance with the devil in the pale moonlight?")
    ).toBe(false);
  });
});
