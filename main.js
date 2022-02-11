console.log(2 + 7);
//--TRY...CATCH --5:13
const fnwithError = () => {
  throw new Error("Some Error");
};
try {
  fnwithError();
} catch (error) {
  console.error(error);
  console.log(error.message);
}
console.log("Continue");
console.log("Hey");
//--5:30
function newFn(j) {
  console.log(j);
}
// const b=true
const b = 8;
let k = 10;

newFn(2 + 3);
newFn(b);
newFn((k = k + 1));
//--
const myName = () => {
  console.log("Elisa");
};
myName();
//--
const persons = ["Emma", "Maja", "Luis"];
for (let i = 0; i < persons.length; i++) {
  //perechislit' vseh nachinaja c pervogo
  console.log(persons[i]);
}
console.log();
//--
const displayPeopleUppercases = () => {
  // nice alternative to for loop for looping through fu**** arrays!
  for (let person of persons) {
    console.log(person.toUpperCase());
  }
  // no return!
  // => because we don't want any NEW info!
  // => just display EXISTING (already known) info!
};

displayPeopleUppercases();
console.log();
//--
// pleaee GIVE ME BACK all people uppercase!
// return => change stuff / update stuff, manipulate stuff, change format, NEW information
// return => always delivers us something we do not know YET ! / something new we dont have
const getPeopleUppercased = () => {
  const arrPersonsUc = [];

  for (let person of persons) {
    const personUc = person.toUpperCase();
    arrPersonsUc.push(personUc);
  }
  // return our NEW info
  return arrPersonsUc;
};

const result = getPeopleUppercased(); // whatever the function returns, will be stuffed into variable "result"

console.log(result);
//--
// INPUT for new identity card

// all info that comes from MEEEE as the client (=the caller of the function)
const firstname = "Rob";
const lastname = "Whatever";
const familyname = "Whatever Elderly";
const birthDate = "01.01.1871";
const eyeColor = "bluegrey";
const height = "181cm";

// EXPECTED OUTPUT => identity card
const id = "123345574271";
const ausstellendesAmt = "Bezirksamt Neukölln";
const expireDate = "01.01.2027"; // date when this ID gets invalid

const getMyFreakinIdentityCardFromFuckingLazyAmtPeople = (
  firstName,
  lastName,
  birthDate,
  height,
  eyeColor
) => {
  // actions the amt does... (we are not super interested in all the details)
  // PRE-checks

  // Example internals:
  // calculate expire date today? => 03.03.2022 => expireDate = 03.03.2032

  // OUTPUT: identity card + all inpit field + ID, ausstellende behörde, expireDate

  // return all new info as ARRAY
  // const output = [
  //   firstName, lastName, birthDate, height, eyeColor,
  //   "1234567", "Bezirksamt Neukölln", "03.03.2032"
  // ]

  // return all new info as OBJECT
  const output = {
    firstName,
    lastName,
    birthDate,
    height,
    eyeColor,
    id: "1234567",
    behoerde: "Bezirksamt Neukölln",
    expireDate: "03.03.2032",
  };

  return output;
};

// this is my input that fu*** amt wants to know! okay...
const output = getMyFreakinIdentityCardFromFuckingLazyAmtPeople(
  firstname,
  lastname,
  birthDate,
  height,
  eyeColor
);
console.log(output);
//--
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
