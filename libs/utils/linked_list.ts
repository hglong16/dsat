import { LinkedList } from "@/libs/linked_list/linked_list";

const createLinkedList = (): LinkedList<number> => {
	const linkedList = new LinkedList<number>();
	linkedList.append(5);
	linkedList.append(6);
	linkedList.append(7);

	return linkedList;
};

export { createLinkedList };
