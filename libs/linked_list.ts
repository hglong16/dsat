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

export { NodeLinkedList };
