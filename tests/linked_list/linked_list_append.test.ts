import { expect, test, describe } from "bun:test";
import { LinkedList } from "@/libs/linked_list/linked_list";
import { createLinkedList } from "@/libs/utils/linked_list";

describe("linked list test", () => {
	test("linked_list: append", () => {
		const linkedList = new LinkedList<number>();
		linkedList.append(1);
		linkedList.append(2);

		expect(linkedList.toString()).toBe("1 -> 2");
	});

	test("insert after", () => {
		const linkedList = new LinkedList<number>();

		linkedList.append(5);
		linkedList.append(6);
		linkedList.append(8);

		const node = linkedList.indexAt(1);
		expect(node?.value).toBe(6);

		linkedList.insertAfter(node!, 7);

		expect(linkedList.toString()).toBe("5 -> 6 -> 7 -> 8");
	});

	test("pop", () => {
		const linkedList = createLinkedList();

		expect(linkedList.pop()).toBe(5);
		expect(linkedList.toString()).toBe("6 -> 7");
	});

	test("removeLast", () => {
		const linkedList = createLinkedList();

		expect(linkedList.removeLast()).toBe(7);
		expect(linkedList.toString()).toBe("5 -> 6");
	});

	test("removeAfter", () => {
		const linkedList = createLinkedList();

		const node = linkedList.indexAt(0);
		linkedList.removeAfter(node!);

		expect(linkedList.toString()).toBe("5 -> 7");
	});

	// generate test for case iterable linked list
	test("iterable linked list", () => {
		const linkedList = createLinkedList();

		const values = [];
		for (let value of linkedList) {
			values.push(value);
		}

		expect(values).toEqual([5, 6, 7]);
	});

	test("remove all", () => {
		const linkedList = new LinkedList();

		linkedList.push(3);
		linkedList.push(5);
		linkedList.push(4);
		linkedList.push(3);
		linkedList.push(3);
		linkedList.push(2);
		linkedList.push(1);

		linkedList.removeAll(3);

		expect();
	});
});
