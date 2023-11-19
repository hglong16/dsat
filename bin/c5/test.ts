import { NodeLinkedList } from "../../libs/linkedList/linkedList";

const node = new NodeLinkedList<number>(1, undefined);

node.next = new NodeLinkedList<number>(2, undefined);
node.next.next = new NodeLinkedList<number>(3, undefined);

console.log(node.toString());
