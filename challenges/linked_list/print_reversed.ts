import { LinkedList } from "@/libs/linked_list/linked_list";
import { createLinkedList } from "@/libs/utils/linked_list";

const linkedList = createLinkedList();

while (!linkedList.isEmpty) {
	console.log(linkedList.removeLast());
}
