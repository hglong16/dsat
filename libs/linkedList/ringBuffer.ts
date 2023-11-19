import { RingBufferFullError } from "./exceptions";

class RingBuffer<T> {
	private _list: Array<T | undefined>;
	private _size = 0;
	private _writeIndex = 0;
	private _readIndex = 0;

	constructor(size: number) {
		this._list = new Array(size);
	}

	get isEmpty(): boolean {
		return this._size === 0;
	}

	get isFull(): boolean {
		return this._size === this._list.length;
	}

	write(element: T): void {
		if (this.isFull) {
			throw new RingBufferFullError();
		}

		this._list[this._writeIndex] = element;
		this._writeIndex = this._advance(this._writeIndex);
		this._size++;
	}

	read(): T | undefined {
		if (this.isEmpty) return undefined;

		const element = this._list[this._readIndex];
		this._readIndex = this._advance(this._readIndex);
		this._size--;
		return element;
	}

	private _advance(index: number) {
		return (index + 1) % this._list.length;
	}

	toString(): string {
		let s = "[";
		for (let i = 0; i < this._list.length; i++) {
			if (this._list[i] === undefined) {
				s += "empty";
			} else {
				s += this._list[i];
			}
			if (i < this._list.length - 1) {
				s += ", ";
			}
		}
		s += "]";
		return s;
	}
}

export { RingBuffer };
