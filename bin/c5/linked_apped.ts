import { LinkedList } from "@/libs/linked_list";

const main = () => {
  const linkedList = new LinkedList<number>();

  linkedList.append(1);
  linkedList.append(2);

  console.log(linkedList.toString());
};

main();
