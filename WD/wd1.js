console.log("----MAP----");
let areNumbers = [1, 4, 23, 85, 44, -3, -1, 565];

let newNumbers = areNumbers.map((isNumber, index) => {
  // console.log(isNumber);
  console.log(index);
  // return isNumber
  return isNumber * 5;
});
console.log(newNumbers);
console.log("----------");
let secNumbers = areNumbers.map((secNumber) => secNumber * 3);
console.log(secNumbers);
console.log("----------");
const lists = ["Hydrogen", "Helium", "Lithium", "Beryllium", 4, 7, 8, 1];
const newLists = lists.map((list) => list.length);
console.log(newLists);
console.log("----FILTER----");
const filterLists1 = lists.filter((list, index) => {
  if (list % 2 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(filterLists1);
const filterLists2 = lists.filter((list, index) => {
  if (list % 11 == 0) {
    return true;
  } else {
    return false;
  }
});
console.log(filterLists2);
const filterLists3 = lists.filter((list, index) => {
  if (list % 27 == 0) {
    return true;
  }
});
console.log(filterLists3);
const filterLists = lists.filter((list, index) => {
  return list > 0;
});
console.log(filterLists);
const filterLists4 = lists.filter((list, index) => {
  if (list > 0)
  return true
});
console.log(filterLists4);
const filterLists5 = lists.filter((list, index) => {
  return typeof list === 'string'
});
console.log(filterLists5);
const filterLists6 = lists.filter((list, index) => {
  return typeof list === 'number'
});
console.log(filterLists6);

console.log("----------");
console.log("----------");
console.log("----------");
console.log("----------");
console.log("----------");
console.log("----------");
console.log("----------");
