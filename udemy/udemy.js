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
console.log(createBlog('Blog Tite &', 'Blog body'));

console.log("--");
const newBlog=(title1, blog1)=>{
if (!title1) {
  throw new Error("Title1 is required");
}
if (!blog1) {
  throw new Error("Blog is required");
}
return `${title1} ${blog1}`;
}
console.log(newBlog('Tite1 &', 'Blog1'));
console.log("--");
console.log("--");
console.log("--");
console.log("--");
