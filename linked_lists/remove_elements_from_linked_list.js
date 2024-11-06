const removeElementsFromLinkedList = (head, val) => {
  // given a linked list head and a value, remove all nodes with that value
  let ptr = head.next;
  let prev = head;
  while(head && head.value == val){
    head = head.next;
  }
  while(ptr){
    if(ptr.value == val){
      prev.next = prev.next.next;
      ptr = ptr.next;
    } else {
      ptr = ptr.next;
      prev = prev.next;
    }
  }

  return head;
};

module.exports = removeElementsFromLinkedList;
