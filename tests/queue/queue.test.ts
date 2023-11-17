import { test, expect, describe } from "bun:test";
import { QueueList } from "@/libs/queue/queue";

describe("Queue", () => {
  test("should be isEmpty", () => {
    const queue = new QueueList();
    expect(queue.isEmpty).toBe(true);
  });

  test("dequeue", () => {
    const queue = new QueueList();
    expect(queue.dequeue()).toBe(null);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);

    queue.dequeue();
    expect(queue._list).toEqual([2, 3, 4, 5]);
  });
});
