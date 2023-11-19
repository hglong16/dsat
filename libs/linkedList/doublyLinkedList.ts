class NodeList<T> {
	value: T;
	next?: NodeList<T>;
	previous?: NodeList<T>;

	constructor({ value, next, previous }: NodeList<T>) {
		this.value = value;
		this.next = next;
		this.previous = previous;
	}

	toString() {
		return `${this.value}`;
	}
}

abstract class LinkedList<T> {
	head?: NodeList<T>;
	tail?: NodeList<T>;

	abstract get isEmpty(): boolean;
	abstract push(value: T): void;
	abstract append(value: T): void;
	abstract pop(): T | undefined;
	abstract removeLast(): T | undefined;
	abstract toString(): string;
}

class DoublyLinkedList<T> extends LinkedList<T> implements Iterable<T> {
	head?: NodeList<T> = undefined;
	tail?: NodeList<T> = undefined;

	get isEmpty(): boolean {
		return !this.head;
	}

	push(value: T): void {
		const node = new NodeList({
			value,
			next: this.head,
		});

		if (this.head === undefined || this.tail === undefined) {
			this.tail = node;
		} else {
			this.head.previous = node;

			this.tail.previous ??= node;
		}

		this.head = node;
	}

	append(value: T): void {
		const node = new NodeList({
			value,
			previous: this.tail,
		});

		if (this.head === undefined || this.tail === undefined) {
			this.head = node;
		} else {
			this.tail.next = node;

			this.head.next ??= node;
		}

		this.tail = node;
	}

	pop(): T | undefined {
		if (!this.head || !this.tail) return undefined;

		const value = this.head.value;

		if (!this.head.next) {
			this.head = undefined;
			this.tail = undefined;
			return value;
		}

		this.head = this.head.next;

		this.head.previous = undefined;

		return value;
	}

	removeLast(): T | undefined {
		if (!this.head || !this.tail) return undefined;

		const value = this.tail.value;

		if (!this.tail.previous) {
			this.head = undefined;
			this.tail = undefined;
			return value;
		}

		this.tail = this.tail.previous;

		this.tail.next = undefined;

		return value;
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

	toString(): string {
		let currentNode = this.head;

		let result = "";

		while (currentNode) {
			result += `${currentNode.value} -> `;
			currentNode = currentNode.next;
		}

		return `${result}null`;
	}
}

export { DoublyLinkedList };
