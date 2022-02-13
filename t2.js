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
const mapArray = secArray.map((el) => el * 2);
console.log(mapArray);
//-- 6:17 glech
const secArray2 = [2, 3, 4];
console.log(secArray2);
const mapArray2 = secArray2.map((el) => {
  return el * 3;
});
console.log(mapArray2);
console.log(secArray2);
//--6:20 destructurisation OBJECTS
const userPro = {
  name1: "El",
  age: 22,
  prof1: "coder",
};
const { name1, age, prof1 } = userPro;
// const { name1, age } = userPro;
console.log(name1, age);
console.log(name1, age, prof1);
//--6:26 destructurisation ARRAYS
const fruits2 = ["Apple", "Banana"];
const [fruitOne, fruitTwo] = fruits;
console.log(fruitOne);
console.log(fruitTwo);
//--6:32 destructurisation FUNCTIONS
const userProf = {
  name: "El",
  age: 22,
  prof: "coder",
};
const userInfo = ({ name, age, prof }) => {
  if (!prof) {
    return `User ${name} is ${age} and she is not ${prof}`;
  }
  return `User ${name} is ${age} and she is ${prof}`;
};
console.log(userInfo(userProf));
//-- 6:36 IF
let val = 10;
if (val > 5) {
  val += 20; // val = val + 20  || 10+20
}
console.log(val);
if (val <= 10) {
  val += 20;
}
console.log(val);
if (val <= 11) {
  val += 20;
}
console.log(val);
if (val < 5) {
  val += 20;
}
console.log(val);
// const vuk=''
// if(vuk=1){
//   vuk += 2
// }
// console.log(vuk);
const pers = {
  age: 22,
};
if (!pers.name) {
  console.log("no name");
}
//--
function testNum(a) {
  // let result;
  if (a > 0) {
    result = "positive";
  } else {
    result = "NOT positive";
  }
  return result;
}

console.log(testNum(5));
console.log(testNum(-5));
// expected output: "NOT positive"
!undefined === true;
undefined === true;
//--6:44 IF  ELSE
let melse = 10;
if (melse > 9) {
  melse += 20;
} else {
  melse -= 20;
}
console.log(melse);
//--6:50
const age3 = 5;
if (age3 > 18) {
  console.log("Is adult");
} else if (age3 >= 12) {
  console.log("Is teenager");
} else {
  console.log("Is child");
}
// console.log(age3);
//--6:52 IF  IF
const age4 = 15;
if (age4 >= 18) {
  console.log("Is adult");
}
if (age4 >= 12 && age4 < 18) {
  console.log("Is teenager");
}
if (age4 < 12) {
  console.log("Is child");
}
// console.log(age4);
//--7 exsamppe
const summPositiveNumbers = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") {
    return "One of the arguments is not a number";
  }
  if (a <= 0 || b <= 0) {
    return "Numbers are not positive";
  }
  return a + b;
};
console.log(summPositiveNumbers(3, 8));
console.log(summPositiveNumbers("a", true));
console.log(summPositiveNumbers(-10, 8));
//-- 7:07 SWITCH
const month = 2;
switch (month) {
  case 12:
    console.log("December")
    break;
  case 1:
    console.log("January")
    break;
  case 2:
    console.log("Februar")
    break
  default:
    console.log("It isn't a winter month")
}
// console.log(month);
//-- 7:08 TERNARY OPERATOR
const value =11
value
? console.log('its true')
: console.log('its false')
//-- exsamppe 2
// const value1=22
// const value2=33

// value1 && value2
// ? myFunction1(value1, value2)
// : myFunction2()
//-- exsamppe 3
let value3 = 17
console.log(value3 >= 0 ? value3 : -value3);
//-- exsamppe 4
let value4 =-5
const res = value4 >= 0 ? value4 : value4
console.log(res);
//-- exsamppe 5
let value5 = -7
const res1= value5 >= 0 ? value5 : -value5
console.log(res1);
//--7:22 loop

