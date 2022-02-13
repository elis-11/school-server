// Most important array methods
// students.find
// students.filter
// students.forEach
// students.map
// students.push
// students.pop
// students.splice

//--5:33
const mArray = [1, true, "Luis"];
console.log(mArray);
const myArray6 = [1, true, "Luis"];
console.log(myArray6);
mArray === myArray6;
//--5:39 NEW ARRAY

//--
const fruits = ["banana", "Apple"];
console.log(fruits.length);
console.log(fruits[1]);
//--
const myObject = {
  0: 1,
  1: 2,
  2: 3,
  length: 3,
};
console.log(myObject);
const isArray = [1, 2, 3];
console.log(isArray);
//--
const myArray = [1, true, "a"];
console.log(myArray);
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray.length);
myArray[4] = "Miki";
console.log(myArray.length);
console.log(myArray);
myArray[3] = "Degen";
console.log(myArray);
console.log(myArray.length);
myArray[5] = true;
console.log(myArray.length);
console.log(myArray);
myArray.push(78);
myArray.push(false);
console.log(myArray);
myArray.pop();
const removedElement = myArray.pop();
console.log(removedElement);
myArray.unshift("Lila");
console.log(myArray);
myArray.unshift("abc");
console.log(myArray);
const removedWithShifting = myArray.shift();
console.log(myArray);
console.log(removedWithShifting);
//-- 6:06 FOREACH
const firstArray = [1, 2, 3];
console.log(firstArray);
firstArray.forEach((el) => console.log(el * 2));
console.log(firstArray);
firstArray.forEach((el) => console.log(el * 4));
console.log(firstArray);
//-- 6:12 MAP
const secArray = [1, 2, 3, 4];
console.log(secArray);
const mapArray = secArray.map(el => el * 2);
console.log(mapArray);
//-- 6:17 glech
const secArray2= [2, 3, 4]
console.log(secArray2);
const mapArray2= secArray2.map((el) =>{
return el *3
})
console.log(mapArray2);
console.log(secArray2);

