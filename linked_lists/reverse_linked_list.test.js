const reverseLinkedList = require("./reverse_linked_list.js");
const createLinkedList = require("./linked_list_utils").createLinkedList;
const printLinkedList = require("./linked_list_utils").printLinkedList;

describe("reverseLinkedList", () => {
  test("should reverse a linked list", () => {
    const list = createLinkedList([1, 2, 3, 4, 5]);
    const reversedList = reverseLinkedList(list);
    expect(printLinkedList(reversedList)).toBe("5 -> 4 -> 3 -> 2 -> 1");
  });

  test("should return null for an empty linked list", () => {
    const list = createLinkedList([]);
    const reversedList = reverseLinkedList(list);
    expect(reversedList).toBeNull();
  });

  test("should return the same node for a single node linked list", () => {
    const list = createLinkedList([1]);
    const reversedList = reverseLinkedList(list);
    expect(printLinkedList(reversedList)).toBe("1");
  });
});
