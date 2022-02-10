// Most important array methods
// students.find
// students.filter
// students.forEach
// students.map
// students.push
// students.pop
// students.splice

const students = ["Lui", "Ola", "Ami", "Maja", "Mik"];
console.log(students);
const mikIndex = students.findIndex((student) => {
  return student === "Mik";
});
console.log("Hey".charCodeAt(1));
console.log(mikIndex);
students.splice(mikIndex, 1);
console.log(students);
//--map
const arr1=[1,2,3,4,5,6,7,8]
const map1=arr1.map(x=>x*2)
console.log(map1);
const numbers=[1,2,3]
const roots=  numbers.map((num)=>Math.sqrt(num))
console.log(roots);
//--map
const kvArray=[{key:1,value:10},
{key:2,value:20},
{key:3,value:30}]
const reformArray=kvArray.map(({key,value})=>
({[key]:value}))
console.log(kvArray);
console.log(reformArray);
//--map
const employees= ['John', 'Rob', 'Bob', 'Jane', 'Doe', 'Anna']
console.log('Bob is Mitarbeite r in der ');