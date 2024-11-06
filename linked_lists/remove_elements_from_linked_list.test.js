const removeElementsFromLinkedList = require("./remove_elements_from_linked_list");
const createLinkedList = require("./linked_list_utils").createLinkedList;
const printLinkedList = require("./linked_list_utils").printLinkedList;

describe("removeElementsFromLinkedList", () => {
  test("should remove all nodes with the given value", () => {
    const list = createLinkedList([1, 2, 3, 4, 5, 3]);
    const newList = removeElementsFromLinkedList(list, 3);
    expect(printLinkedList(newList)).toBe("1 -> 2 -> 4 -> 5");
  });

  test("should return null if all nodes are removed", () => {
    const list = createLinkedList([3, 3, 3]);
    const newList = removeElementsFromLinkedList(list, 3);
    expect(newList).toBeNull();
  });

  test("should return the same list if no nodes are removed", () => {
    const list = createLinkedList([1, 2, 3]);
    const newList = removeElementsFromLinkedList(list, 4);
    expect(printLinkedList(newList)).toBe("1 -> 2 -> 3");
  });
});
