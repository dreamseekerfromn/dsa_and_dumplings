const createLinkedList = require("./linked_list_utils").createLinkedList;
const printLinkedList = require("./linked_list_utils").printLinkedList;
const unshift = require("./linked_list_utils").unshift;
const shift = require("./linked_list_utils").shift;
const pop = require("./linked_list_utils").pop;
const push = require("./linked_list_utils").push;
const find = require("./linked_list_utils").find;
const remove = require("./linked_list_utils").remove;

describe("createLinkedList", () => {
  test("should create a linked list from an array of values", () => {
    const values = [1, 2, 3];
    const linkedList = createLinkedList(values);
    expect(linkedList.value).toBe(1);
    expect(linkedList.next.value).toBe(2);
    expect(linkedList.next.next.value).toBe(3);
    expect(linkedList.next.next.next).toBeNull();
  });

  test("should return null for an empty array", () => {
    const linkedList = createLinkedList([]);
    expect(linkedList).toBeNull();
  });
});

describe("printLinkedList", () => {
  test("should print the linked list in a readable format", () => {
    const linkedList = createLinkedList([1, 2, 3]);
    expect(printLinkedList(linkedList)).toBe("1 -> 2 -> 3");
  });

  test("should return an empty string for an empty linked list", () => {
    const linkedList = createLinkedList([]);
    expect(printLinkedList(linkedList)).toBe("");
  });
});

describe("unshift", () => {
  test("should add a node to the beginning of the linked list", () => {
    const linkedList = createLinkedList([2, 3]);
    const newList = unshift(linkedList, 1);
    expect(printLinkedList(newList)).toBe("1 -> 2 -> 3");
  });
});

describe("shift", () => {
  test("should remove the first node from the linked list", () => {
    const linkedList = createLinkedList([1, 2, 3]);
    const newList = shift(linkedList);
    expect(printLinkedList(newList)).toBe("2 -> 3");
  });
});

describe("pop", () => {
  test("should remove the last node from the linked list", () => {
    const linkedList = createLinkedList([1, 2, 3]);
    const newList = pop(linkedList);
    expect(printLinkedList(newList)).toBe("1 -> 2");
  });
});

describe("push", () => {
  test("should add a node to the end of the linked list", () => {
    const linkedList = createLinkedList([1, 2]);
    const newList = push(linkedList, 3);
    expect(printLinkedList(newList)).toBe("1 -> 2 -> 3");
  });
});

describe("find", () => {
  test("should find a node in the linked list", () => {
    const linkedList = createLinkedList([1, 2, 3]);
    const node = find(linkedList, 2);
    expect(node.value).toBe(2);
  });

  test("should return null if the node is not found", () => {
    const linkedList = createLinkedList([1, 2, 3]);
    const node = find(linkedList, 4);
    expect(node).toBeNull();
  });
});

describe("remove", () => {
  test("should remove a node from the linked list", () => {
    const linkedList = createLinkedList([1, 2, 3]);
    const newList = remove(linkedList, 2);
    expect(printLinkedList(newList)).toBe("1 -> 3");
  });

  test("should return the same list if the node to remove is not found", () => {
    const linkedList = createLinkedList([1, 2, 3]);
    const newList = remove(linkedList, 4);
    expect(printLinkedList(newList)).toBe("1 -> 2 -> 3");
  });
});
