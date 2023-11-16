import { expect, test, describe } from "bun:test";
import { LinkedList } from "@/libs/linked_list";
import { link } from "fs";

describe("linked list test", () => {
  test("linked_list: append", () => {
    const linkedList = new LinkedList<number>();
    linkedList.append(1);
    linkedList.append(2);

    expect(linkedList.toString()).toBe("1 -> 2");
  });

  test("insert after", () => {
    const linked_list = new LinkedList<number>();

    linked_list.append(5);
    linked_list.append(6);
    linked_list.append(8);

    const node = linked_list.indexAt(1);
    expect(node?.value).toBe(6);

    linked_list.insertAfter(node!, 7);

    expect(linked_list.toString()).toBe("5 -> 6 -> 7 -> 8");
  });

  test("pop", () => {
    const linked_list = new LinkedList<number>();

    linked_list.append(5);
    linked_list.append(6);
    linked_list.append(7);

    expect(linked_list.pop()).toBe(5);
    expect(linked_list.toString()).toBe("6 -> 7");
  });

  test("removeLast", () => {
    const linked_list = new LinkedList<number>();

    linked_list.append(5);
    linked_list.append(6);
    linked_list.append(7);

    expect(linked_list.removeLast()).toBe(7);
    expect(linked_list.toString()).toBe("5 -> 6");
  });
});
