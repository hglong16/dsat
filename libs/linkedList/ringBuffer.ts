import { RingBufferFullError } from "./exceptions";

class RingBuffer<T> {
	#list: Array<T | undefined>;
	#size = 0;
	#writeIndex = 0;
	#readIndex = 0;

	constructor(size: number) {
		this.#list = new Array(size);
	}

	get isEmpty(): boolean {
		return this.#size === 0;
	}

	get isFull(): boolean {
		return this.#size === this.#list.length;
	}

	write(element: T): void {
		if (this.isFull) {
			throw new RingBufferFullError();
		}

		this.#list[this.#writeIndex] = element;
		this.#writeIndex = this.#advance(this.#writeIndex);
		this.#size++;
	}

	read(): T | undefined {
		if (this.isEmpty) return undefined;

		const element = this.#list[this.#readIndex];
		this.#readIndex = this.#advance(this.#readIndex);
		this.#size--;
		return element;
	}

	#advance(index: number) {
		return (index + 1) % this.#list.length;
	}

	toString(): string {
		let s = "[";
		for (let i = 0; i < this.#list.length; i++) {
			if (this.#list[i] === undefined) {
				s += "empty";
			} else {
				s += this.#list[i];
			}
			if (i < this.#list.length - 1) {
				s += ", ";
			}
		}
		s += "]";
		return s;
	}
}

export { RingBuffer };
