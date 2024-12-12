import { readFileSync } from "fs";
import { env } from "./env";
import { get } from "http";

function createLists(tuples: string[]) {
  const listA: number[] = [];
  const listB: number[] = [];
  tuples.forEach((line) => {
    const numbers = line.split("  ").map((n) => parseInt(n, 10));
    listA.push(numbers[0]);
    listB.push(numbers[1]);
  });

  return { listA, listB };
}

function getDiffs(listA: number[], listB: number[]) {
  const diffs: number[] = [];
  for (let i = 0; i < listA.length; i++) {
    const absDiff = Math.abs(listA[i] - listB[i]);
    diffs.push(absDiff);
  }
  return diffs;
}

function main() {
  console.log("Hello, world!");
  const path = env.INPUT_PATH;

  const input = readFileSync(path, "utf-8");
  const tuples = input.split("\n");
  console.log(tuples);
  const lists = createLists(tuples);
  console.log(lists);

  const sortA = lists.listA.sort((a, b) => a - b);
  const sortB = lists.listB.sort((a, b) => a - b);

  const diffs = getDiffs(sortA, sortB);
  const res = diffs.reduce((acc, curr) => acc + curr, 0);
  console.log(res);
}

main();
