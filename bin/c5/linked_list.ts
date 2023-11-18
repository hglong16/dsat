import { LinkedList } from "@/libs/linked_list";

const main = () => {
	const linkedList = new LinkedList<number>();

	linkedList.push(1);
	linkedList.push(2);
	console.log(linkedList.toString());
};

main();
