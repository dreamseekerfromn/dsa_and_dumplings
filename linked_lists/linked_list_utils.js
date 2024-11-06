class ListNode {
  // create a node for the linked list that has a value and a pointer to the next node
  constructor(value){
    this.next = null;
    this.value = value;
  }
}

const createLinkedList = (values) => {
  // create a linked list from an array of values and return the head
  if(!values || values.length == 0){
    return null;
  }

  let head = new ListNode(values[0]);
  let ptr = head;

  for(let i = 1; i < values.length; i++){
    let temp = new ListNode(values[i]);
    ptr.next = temp;
    ptr = ptr.next;
  }

  return head;
};

const printLinkedList = (head) => {
  // print the linked list in a readable format (e.g., "1 -> 2 -> 3")
  let result = "";
  for(let ptr = head; ptr != null; ptr = ptr.next){
    result += `${ptr.value}`;
    if(ptr.next){
      result += ' -> ';
    }
  }
  return result;
};

const unshift = (head, value) => {
  // add a node to the begining of a linked list and return the list
  if(!value){
    return head;
  }
  let newHead = new ListNode(value);
  newHead.next = head;
  return newHead;
};

const shift = (head) => {
  // remove an element from the linked
  let ptr = head.next;
  head = null;
  return ptr;
};

const pop = (head) => {
  // remove the last element from the linked list
  if(!head.next){
    return null;
  }
  let ptr = head;
  while(ptr.next.next){
    ptr = ptr.next;
  }
  ptr.next = null;
  return head;
};

const push = (head, value) => {
  // add a node to the end of the linked list and return the list
  if(!head){
    head = new ListNode(value);
  } else {
    let ptr = head;
    while(ptr.next){
      ptr = ptr.next;
    }
    ptr.next = new ListNode(value);
  }
  return head;
};

const find = (head, value) => {
  // find a node in the linked list and return it or null if not found
  let ptr = head;
  while(ptr){
    if(ptr.value == value){
      return ptr;
    }
    ptr = ptr.next;
  }
  return null;
};

const remove = (head, value) => {
  // remove a node from the linked list and return the new head
  let ptr = head.next;
  let prev = head;
  if(head.value == value){
    head = null;
    return ptr;
  }
  while(ptr){
    if(ptr.value == value){
      prev.next = ptr.next;
      ptr = null;
      return head;
    }
    ptr = ptr.next;
    prev = prev.next;
  }
  return head;
};

module.exports = {
  createLinkedList,
  printLinkedList,
  unshift,
  shift,
  pop,
  push,
  find,
  remove,
};
