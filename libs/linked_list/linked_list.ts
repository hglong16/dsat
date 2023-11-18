import { ILinkedList } from "@/types/linked_list";

/**
 * Node of a linked list
 *
 * @param {T} value - Value of the node
 * @param {NodeLinkedList<T> | null} next - Next node
 *
 * @returns {NodeLinkedList<T>} - Node of a linked list
 */
class NodeLinkedList<T> {
	value: T;
	next: NodeLinkedList<T> | null;

	constructor(value: T, next: NodeLinkedList<T> | null) {
		this.value = value;
		this.next = next;
	}

	toString(): string {
		if (this.next) {
			return `${this.value} -> ${this.next.toString()}`;
		}

		return `${this.value}`;
	}
}

class LinkedList<T> {
	head: NodeLinkedList<T> | null;
	tail: NodeLinkedList<T> | null;

	constructor() {
		this.head = null;
		this.tail = null;
	}

	/**
	 * @returns {boolean} - True if the linked list is empty, false otherwise
	 */
	get isEmpty(): boolean {
		return this.head === null;
	}

	/**
	 * Node at index
	 * @param index - Index of the node to return
	 * @returns node at index
	 */
	indexAt(index: number): NodeLinkedList<T> | null {
		let currentNode = this.head;
		let currentIndex = 0;

		while (currentNode && currentIndex < index) {
			currentNode = currentNode.next;
			currentIndex++;
		}

		return currentNode;
	}

	/**
	 *
	 * @param value: T - Value to push
	 * @returns {void}
	 *
	 */
	push(value: T): void {
		this.head = new NodeLinkedList(value, this.head);
		if (!this.tail) {
			this.tail = this.head;
		}
	}

	/**
	 * Append a value to the end of the linked list
	 * @param value - Value to append
	 * @returns {void}
	 */
	append(value: T): void {
		if (this.isEmpty) {
			this.push(value);
			return;
		}

		this.tail!.next = new NodeLinkedList(value, null);
		this.tail = this.tail!.next;
	}

	/**
	 * Insert a value after a node
	 * @param node node to insert after
	 * @param value value to insert
	 * @returns node inserted
	 */
	insertAfter(node: NodeLinkedList<T>, value: T): NodeLinkedList<T> {
		if (node === this.tail) {
			this.append(value);
			return this.tail!;
		}

		node!.next = new NodeLinkedList(value, node!.next);
		return node!.next;
	}

	/**
	 * Pop the head node
	 * @returns {T | null} - Value of the head node
	 */
	pop(): T | null {
		const value = this.head?.value ?? null;

		this.head = this.head?.next ?? null;

		if (this.isEmpty) {
			this.tail = null;
		}

		return value;
	}

	/**
	 * remove the last node
	 * @returns {T | null} - Value of the last node
	 */
	removeLast(): T | null {
		if (this.head?.next === null) {
			return this.pop();
		}

		let currentNode = this.head;
		while (currentNode!.next != this.tail) {
			currentNode = currentNode!.next;
		}

		const value = this.tail?.value ?? null;
		this.tail = currentNode;
		currentNode!.next = null;

		return value;
	}

	/**
	 * Remove a node after a node
	 * @param node node to remove after
	 * @returns node removed
	 */
	removeAfter(node: NodeLinkedList<T>): T | null {
		const value = node.next?.value ?? null;
		node.next = node.next?.next ?? null;

		return value;
	}
	toString(): string {
		if (this.head) {
			return this.head.toString();
		}

		return "Empty List";
	}

	/**
	 * Reverse the linked list
	 */
	reverse(): void {
		this.tail = this.head;

		let previous = this.head;
		let current = this.head?.next;

		previous!.next = null;

		while (current) {
			const next = current.next;
			current.next = previous;
			previous = current;
			current = next;
		}

		this.head = previous;
	}

	removeAll(value: T): void {
		if (this.head!.value == value) this.pop();

		let current = this.head;

		while (current != this.tail && current!.next != null) {
			if (current!.next!.value == value) {
				this.removeAfter(current!);
				continue;
			}
			current = current!.next;
		}
	}

	[Symbol.iterator](): Iterator<T> {
		let currentNode = this.head;

		return {
			next(): IteratorResult<T> {
				if (currentNode) {
					const value = currentNode.value;
					currentNode = currentNode.next;

					return {
						done: false,
						value,
					};
				}

				return {
					done: true,
					value: null,
				};
			},
		};
	}
}

export { NodeLinkedList, LinkedList };
