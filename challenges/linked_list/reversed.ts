import { createLinkedList } from "@/libs/utils/linked_list";

const linkedList = createLinkedList();
console.log(linkedList.toString());
linkedList.reverse();

console.log(linkedList.toString());
