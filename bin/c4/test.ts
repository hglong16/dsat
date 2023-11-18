import { Stack } from "@/libs/stack";

const main = () => {
	const stack = new Stack<number>();

	stack.push(1);
	stack.push(2);
	console.log(stack.toString());
};

main();
