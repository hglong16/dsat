import { LinkedList } from "@/libs/linked_list/linked_list";
import { createLinkedList } from "@/libs/utils/linked_list";

const linkedList = createLinkedList();

linkedList.append(8);
linkedList.append(9);
linkedList.append(10);

const first_way = <T>(lst: LinkedList<T>) => {
	const _values = [];

	for (let value of linkedList) {
		_values.push(value);
	}
	console.log(linkedList.toString());
	const middle =
		_values.length % 2
			? Math.floor(_values.length / 2)
			: _values.length / 2 - 1;
	console.log(middle, _values[middle]);
};

const two = <T>(lst: LinkedList<T>) => {
	let slow = lst.head ?? null;
	let fast = lst.head;

	while (fast?.next?.next) {
		slow = slow?.next ?? null;
		fast = fast.next.next;
	}

	console.log(slow?.value);
};

const main = () => {
	first_way(linkedList);
	two(linkedList);
};

main();
