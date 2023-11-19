import { describe, expect, test } from "bun:test";
import { DoublyLinkedList } from "@/libs/linkedList/doublyLinkedList";

const createDoublyLinkedList = () => {
	const dll = new DoublyLinkedList<number>();
	dll.push(1);
	dll.push(2);
	dll.push(3);
	dll.push(4);
	dll.push(5);

	return dll;
};
describe("DoublyLinkedList Test", () => {
	test("is empty", () => {
		const dll = new DoublyLinkedList<number>();
		expect(dll.isEmpty).toBe(true);
	});

	test("move next and previous", () => {
		const dll = createDoublyLinkedList();
		let current = dll.head;

		expect(current?.value).toBe(5);
		current = current?.next;
		expect(current?.value).toBe(4);
		current = current?.next;
		expect(current?.value).toBe(3);
		current = current?.previous;
		expect(current?.value).toBe(4);
	});

	test("push", () => {
		const dll = createDoublyLinkedList();
		dll.push(6);
		expect(dll.head?.value).toBe(6);
		expect(dll.tail?.value).toBe(1);
		expect(dll.toString()).toBe("6 -> 5 -> 4 -> 3 -> 2 -> 1 -> null");
	});

	test("pop", () => {
		const dll = createDoublyLinkedList();
		dll.pop();
		expect(dll.head?.value).toBe(4);
		expect(dll.tail?.value).toBe(1);
		expect(dll.toString()).toBe("4 -> 3 -> 2 -> 1 -> null");
	});

	test("append", () => {
		const dll = createDoublyLinkedList();
		dll.append(6);
		expect(dll.head?.value).toBe(5);
		expect(dll.tail?.value).toBe(6);
		expect(dll.toString()).toBe("5 -> 4 -> 3 -> 2 -> 1 -> 6 -> null");
	});

	test("Iterator", () => {
		const dll = createDoublyLinkedList();
		const s = [];
		for (const i of dll) {
			s.push(i);
		}

		expect(s).toEqual([5, 4, 3, 2, 1]);
	});
});
