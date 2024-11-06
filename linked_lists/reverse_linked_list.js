const createLinkedList = require("./linked_list_utils").createLinkedList;

const reverseLinkedList = (head) => {
    let ptr = head;
    let arr = [];
    while(ptr){
        arr.unshift(ptr.value);
        ptr = ptr.next;
    }

    return createLinkedList(arr);
};

module.exports = reverseLinkedList;
