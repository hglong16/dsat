abstract class Queue<E> {
  abstract get isEmpty(): boolean;
  abstract enqueue(e: E): boolean;
  abstract dequeue(): E | null;
  abstract peek(): E | null;
}

class QueueList<E> extends Queue<E> {
  private list: E[] = [];

  get isEmpty(): boolean {
    return this.list.length === 0;
  }

  enqueue(e: E): boolean {
    this.list.push(e);
    return true;
  }

  dequeue(): E | null {
    return this.list.shift() || null;
  }

  peek(): E | null {
    return this.isEmpty ? null : this.list[0];
  }

  get _list(): E[] {
    return this.list;
  }
}

export { QueueList };
