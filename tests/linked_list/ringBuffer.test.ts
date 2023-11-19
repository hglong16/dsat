import { describe, expect, it, jest, test } from "bun:test";

import { RingBufferFullError } from "@/libs/linkedList/exceptions";
import { RingBuffer } from "@/libs/linkedList/ringBuffer";

describe("ring buffer test", () => {
	test("isEmpty", () => {
		const ringBuffer = new RingBuffer<number>(5);

		expect(ringBuffer.isEmpty).toBe(true);
	});

	test("isFull", () => {
		const ringBuffer = new RingBuffer<number>(5);

		expect(ringBuffer.isFull).toBe(false);
		ringBuffer.write(1);
		ringBuffer.write(2);
		ringBuffer.write(2);
		ringBuffer.write(2);
		ringBuffer.write(2);

		expect(ringBuffer.isFull).toBe(true);
	});

	it("write", () => {
		const ringBuffer = new RingBuffer<number>(5);
		ringBuffer.write(1);
		expect(ringBuffer.read()).toBe(1);
	});

	it("write full -> read -> return 1st index", () => {
		const ringBuffer = new RingBuffer<number>(5);

		ringBuffer.write(1);
		ringBuffer.write(2);
		ringBuffer.write(3);
		ringBuffer.write(4);
		ringBuffer.write(5);
		expect(ringBuffer.read()).toBe(1);

		ringBuffer.write(6);
		expect(ringBuffer.toString()).toBe("[6, 2, 3, 4, 5]");
	});

	// TODO: write test for throw error case
});
