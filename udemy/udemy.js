console.log("-1-");
// if (true) {
// let myName = 'Elis'
//     myName= 'Zen'
//     alert(myName)
// }
console.log("-2-");
// let fName = "Elis";
// let lName = "Arsa";
// let age = prompt("Gues Elis age...");
// let result = ` ${fName} ${lName} is ${age} years old`;
// alert(result);

console.log("-3-function-");
// const welcome = (user, message) => {
//   alert(`Hello ${user}, ${message}`);
// };
// welcome("Elisa", "Good morning!");

const welcomeTo = (userTo = "Mystery Peison", message = "Goodday!") => {
  return `Hello ${userTo}, ${message}`;
};
console.log(welcomeTo());

console.log("-4-Arrow function-");

const gretting = (message) => {
  return `${message} everyone!`;
};
console.log(gretting("Good morning"));

console.log("-5-return function-");
const message5 = "Hi";
const name5 = "Lars";
const newGretting = () => `${message5} ${name5}`;
console.log(newGretting());

console.log("-6-IF-");
let createBlog = (title, body) => {
  if (!title) {
    throw new Error("A title is required");
  }
  if (!body) {
    throw new Error("Body cant be empty");
  }
  return `${title} ${body}`;
};
// createBlog();
// console.log(createBlog('Blog Tite', ''));
console.log(createBlog("Blog Tite &", "Blog body"));

console.log("-7-IF-");
const newBlog = (title1, blog1) => {
  if (!title1) {
    throw new Error("Title1 is required");
  }
  if (!blog1) {
    throw new Error("Blog is required");
  }
  return `${title1} ${blog1}`;
};
console.log(newBlog("Tite1 &", "Blog1"));

console.log("-8-this-");
const sayHi = () => {};
console.log(this);

console.log("-9-nepal-");
let nepal = {
  // add property
  montains: ["Everest", "Kasbek", "Annapurna"],
  // add method
  printWithDash: function () {
    setTimeout(() => console.log(this.montains.join(" - ")), 2000);
  },
};
// console.log(nepal.montains);
nepal.printWithDash();
console.log(".8-todo-");
let thingsToDo = {
  morning: "Exercise",
  afternoon: "Work",
  evening: "Code",
  night: ["Sleep", "Dream"],
};
console.log(thingsToDo);
console.log("--");
let { morning, afternoon } = thingsToDo;
morning = "Run";
console.log(morning, " - ", afternoon);

console.log("-11-uniStudent-");
let uniStudent = (student) => {
  console.log(`${student.name} from ${student.university}`);
};
uniStudent({
  name: "Luis",
  university: "University of Sydney",
});

console.log("-12-uniStudent2-");
let uniStudent2 = (student2) => {
  let { name2, university2 } = student2;
  console.log(`${name2} from ${university2}`);
};
uniStudent2({
  name2: "Lars",
  university2: "University of Hamburg",
});

console.log("-13-uniStudent3-");
let uniStudent3 = ({ name3, university3 }) => {
  console.log(`${name3} from ${university3}`);
};
uniStudent3({
  name3: "Mario",
  university3: "University of Berlin",
});

console.log("-14-Array-");
let [firstMountain] = ["Everest", "Fish Tail", "Annapurna"];
console.log(firstMountain);
let [, secondMountain] = ["Everest", "Fish Tail", "Annapurna"];
console.log(secondMountain);
let [, , thirdMountain] = ["Everest", "Fish Tail", "Annapurna"];
console.log(thirdMountain);

console.log(".9-Restructuring-");
const nameE = "Everest";
const height = 8848;
const output = function () {
  console.log(`Mt. ${this.nameE} is ${this.height} meter tall`);
};

const adventureClimbing = { nameE, height, output };
// console.log(adventureClimbing);
adventureClimbing.output();

console.log("-16-");
const newClimbing = {
  nameC: "Everest",
  heightC: 8848,
  output() {
    console.log(`Mt. ${this.nameC} is ${this.heightC} meter tall`);
  },
};
newClimbing.output();

console.log(".10-spreadOperator-array-");
const areMountains = ["Everest", "Fish Tail", "Annapurna"];
const twoMountains = ["Fiji", "Kasbek"];
const allMountains = [...areMountains, ...twoMountains];
console.log(allMountains);

console.log("-18-spreadOperator-objects");
const day={
  breakfast: 'toast',
  lunch: 'rice'
}
const night={
  dinner: 'cheese'
}
const picnic={...day, ...night}
console.log(picnic );

console.log("-19-rest-");
const rivers= ['Don', 'Lena', 'Terek', 'Argun', 'Barry', 'Elba']
const [first, ...rest] =rivers
console.log(first);
console.log(rest);

console.log("--");
console.log("--");
console.log("--");
