/**
 * Node of a linked list
 *
 * @param {T} value - Value of the node
 * @param {NodeLinkedList<T> | undefined} next - Next node
 *
 * @returns {NodeLinkedList<T>} - Node of a linked list
 */
class NodeLinkedList<T> {
	value: T;
	next: NodeLinkedList<T> | undefined;

	constructor(value: T, next: NodeLinkedList<T> | undefined) {
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
	head: NodeLinkedList<T> | undefined;
	tail: NodeLinkedList<T> | undefined;

	constructor() {
		this.head = undefined;
		this.tail = undefined;
	}

	/**
	 * @returns {boolean} - True if the linked list is empty, false otherwise
	 */
	get isEmpty(): boolean {
		return this.head === undefined;
	}

	/**
	 * Node at index
	 * @param index - Index of the node to return
	 * @returns node at index
	 */
	indexAt(index: number): NodeLinkedList<T> | undefined {
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
		if (!this.head || !this.tail) {
			this.push(value);
			return;
		}

		this.tail.next = new NodeLinkedList(value, undefined);
		this.tail = this.tail?.next;
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
			return this.tail;
		}

		node.next = new NodeLinkedList(value, node.next);
		return node.next;
	}

	/**
	 * Pop the head node
	 * @returns {T | undefined} - Value of the head node
	 */
	pop(): T | undefined {
		const value = this.head?.value ?? undefined;

		this.head = this.head?.next ?? undefined;

		if (this.isEmpty) {
			this.tail = undefined;
		}

		return value;
	}

	/**
	 * remove the last node
	 * @returns {T | undefined} - Value of the last node
	 */
	removeLast(): T | undefined {
		if (this.head?.next === undefined) {
			return this.pop();
		}

		let currentNode = this.head;
		while (currentNode.next !== this.tail) {
			currentNode = currentNode.next as NodeLinkedList<T>;
		}

		const value = this.tail?.value ?? undefined;
		this.tail = currentNode;
		currentNode.next = undefined;

		return value;
	}

	/**
	 * Remove a node after a node
	 * @param node node to remove after
	 * @returns node removed
	 */
	removeAfter(node: NodeLinkedList<T>): T | undefined {
		const value = node.next?.value ?? undefined;
		node.next = node.next?.next ?? undefined;

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
		if (!this.head || !this.tail) return;

		this.tail = this.head;

		let previous = this.head;
		let current = this.head?.next;

		previous.next = undefined;

		while (current) {
			const next = current.next;
			current.next = previous;
			previous = current;
			current = next;
		}

		this.head = previous;
	}

	removeAll(value: T): void {
		if (!this.head) return;
		if (this.head.value === value) this.pop();

		let current = this.head;

		while (current !== this.tail && current.next !== undefined) {
			if (current.next.value === value) {
				this.removeAfter(current);
				continue;
			}
			current = current.next;
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
					value: undefined,
				};
			},
		};
	}
}

export { NodeLinkedList, LinkedList };
