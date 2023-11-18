export interface ILinkedList<T> {
	head: NodeLinkedList<T> | null;
	tail: NodeLinkedList<T> | null;

	get isEmpty(): boolean;
	indexAt(index: number): NodeLinkedList<T> | null;

	push(value: T): void;
	append(value: T): void;
	insertAfter(node: NodeLinkedList<T>, value: T): NodeLinkedList<T>;
	removeLast(): T | null;
	removeAfter(node: NodeLinkedList<T>): T | null;
	toString(): string;
	[Symbol.iterator](): Iterator<T>;
}
