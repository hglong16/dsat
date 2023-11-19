import { describe, test, expect, jest, it } from "bun:test";

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
});
