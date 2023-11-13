class Stack<E> {
  _storage: Array<E>;

  constructor() {
    this._storage = new Array<E>();
  }

  push(element: E): void {
    this._storage.push(element);
  }

  pop(): E | undefined {
    return this._storage.pop();
  }

  get isEmpty(): boolean {
    return this._storage.length === 0;
  }

  get isNotEmpty(): boolean {
    return !this.isEmpty;
  }

  get peek(): E {
    return this._storage[this._storage.length - 1];
  }

  toString(): string {
    return `
      Stack {
        storage: ${this._storage}
      }`;
  }
}

export { Stack };
