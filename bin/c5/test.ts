import { NodeLinkedList } from "../../libs/linked_list/linked_list";

const node = new NodeLinkedList<number>(1, null);

node.next = new NodeLinkedList<number>(2, null);
node.next.next = new NodeLinkedList<number>(3, null);

console.log(node.toString());
