// https://www.youtube.com/watch?v=sfIMbe4RLug&list=PLM7wFzahDYnGtO5c0u71KBj6uwIwPvWKa&index=6
// https://www.youtube.com/watch?v=Y5YlT0Q1v28&list=PLM7wFzahDYnGtO5c0u71KBj6uwIwPvWKa&index=2
console.log("----FILTER----");
const lists = ["Hydrogen", "Helium", "Lithium", "Beryllium", 4, 7, 8, 1];
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
  if (list > 0) return true;
});
console.log(filterLists4);
const filterLists5 = lists.filter((list, index) => {
  return typeof list === "string";
});
console.log(filterLists5);
const filterLists6 = lists.filter((list, index) => {
  return typeof list === "number";
});
console.log(filterLists6);
console.log("-----FILTER-----");
const massivs = [3, 5, 38, -6, 4, -3, 6, 55, -74, 9];
const newMassivs = massivs.filter((massiv) => {
  if (massiv > 7) return true;
});
console.log(massivs);
console.log(newMassivs);
const newMassivs1 = massivs.filter((massiv) => {
  if (massiv > -6) return true;
});
console.log(newMassivs1);
console.log("-----index-----");
const newMassivs2 = massivs.filter((massiv, index) => {
  return index;
});
console.log(newMassivs2);
const newMassivs3 = massivs.filter((massiv) => {});
console.log(newMassivs3);
const newMassivs4 = massivs.filter((massiv) => {});
console.log(newMassivs4);
console.log("-----FILTER-collectors-----");
const clients = [
  { iin: "etrw", user: "Igor", debt: 14 },
  { iin: "hjfjg", user: "Miki", debt: 649 },
  { iin: "tzizizu", user: "Laila", debt: 0 },
  { iin: "ztiuz", user: "Maly", debt: 47 },
  { iin: "hgfg", user: "Luis", debt: 0 },
];

const dolgs = clients.filter((client) => client.debt >= 10);
console.log(dolgs);
const dolgs1 = clients
  .filter((client) => client.debt >= 10)
  .sort((a, b) => b.debt - a.debt);
console.log(dolgs1);
const dolgs2 = clients
  .filter((client) => client.debt >= 10)
  .sort((a, b) => a.debt - b.debt);
console.log(dolgs2);
