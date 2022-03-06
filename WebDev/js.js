const arr = [1, 2, 3];
const pushArr = arr.push(4);
console.log(arr);
const popArray = arr.pop();
console.log(arr);
const shiftArr = arr.shift();
console.log(arr);

const arr2 = ["a", "b", "c", "d"];
const concatArr = arr2.concat("e");
console.log(concatArr);
const joinArr = arr2.join("--");
console.log(joinArr);
const sliceArr = arr2.slice(1);
console.log(sliceArr);
const indexOfArr = arr2.indexOf("c");
console.log(indexOfArr);
const includesArr = arr2.includes("e");
console.log(includesArr);
const includesArr2 = arr2.includes("b");
console.log(includesArr2);

const findArr = [3, 5, 6, 8].find((n) => n % 2 === 0);
console.log(findArr);
const findIndexArr = [2, 4, 3, 5].findIndex((n) => n % 2 !== 0);
console.log(findIndexArr);
const mapArr = [3, 4, 8, 6].map((n) => n * 3);
console.log(mapArr);
const filterArr = [1, 4, 7, 8].filter((n) => n % 2 === 0);
console.log(filterArr);
const filterArr1 = [1, 4, 7, 8].filter((n) => n % 2 !== 0);
console.log(filterArr1);
const reduceArr = [2, 4, 3, 7].reduce((acc, cur) => acc + cur);
console.log(reduceArr);
const everyArr = [2, 3, 4, 5].every((x) => x < 6);
console.log(everyArr);
const everyArr1 = [2, 3, 4, 5, 6, 7, 8].every((x) => x < 6);
console.log(everyArr1);
const someArr=[3,5,6,8].some((n)=>n>6)
console.log(someArr);
const reverseArr=[3,4,6,2,9].reverse()
console.log(reverseArr);
const atArr=[3,5,7,8,4,2,6,9,3].at(-2)
console.log(atArr);