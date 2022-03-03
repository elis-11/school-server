// https://www.youtube.com/watch?v=Ba-ss43Iz2M&list=PLM7wFzahDYnGtO5c0u71KBj6uwIwPvWKa&index=8
// https://www.youtube.com/watch?v=Y5YlT0Q1v28&list=PLM7wFzahDYnGtO5c0u71KBj6uwIwPvWKa&index=2
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
console.log("-----MAP-----");
const temps = [0, 3, 5, 6, 3, 6, 3, -2, -6, 4, 9];
// F=C*1.8 +32   --temperature Fahrenheit --Celsius
const tempFar = temps.map((temp) => {
  console.log(temp);
  return 10 + temp * 1.8;
});
console.log(tempFar);
console.log("----------");
const cifry = [33, 44, 55];
const newCifry = cifry.map((cifra, index) => {
  return cifra;
});
console.log(cifry);
console.log(newCifry);
const newCifry2 = cifry.map((cifra, index, array) => {
  return index;
});
console.log(newCifry2);

console.log("-----3-----");
let cifry3=[11,22,66]
cifry3[10]=90
let newCifry3=cifry3.map((cifra3, index, array)=>{
return cifra3
// return index
})
console.log(newCifry3);
console.log('------4----');

let newCifry4=cifry3.map((cifra3, index, array)=>{
if (index == 1){
  array[index+1]=77
}
  return cifra3
})
console.log(newCifry4);
console.log('----5------');
let newCifry5=cifry3.map((cifra3, index, array)=>{
if (index == 2){
  array[index+1]=88
}
  return cifra3
})
console.log(cifry3);
console.log(newCifry5);
console.log("----------");

const basy=[
  {'name': 'Ivan ', ' order': '12', 'sum': '123,5'},
  {'name': 'Andrew ', ' order': '18', 'sum': '963,5'},
  {'name': 'Toita ', ' order': '452', 'sum': '174,5'},
  {'name': 'Luis ', ' order': '312', 'sum': '637.2'},
]
const basyBack=basy.map(basa=>{
  basa.name=basa.name.trim().toLowerCase()
  return basa
})
console.log(basyBack);

4


