let mySet=new Set();
mySet.add(1)
mySet.add('1')
mySet.add('Hi')
// mySet.delete('Hi')
mySet.add(2)
mySet.add(3)
// mySet.clear()
mySet.add(4)
console.log(mySet);
console.log(mySet.size);
console.log(mySet.has(2));
console.log(mySet.has(5));
console.log('----------');
for (let item of mySet) console.log(item)
console.log('----------');
for (let item of mySet.keys()) console.log(item)
console.log('----------');
for (let item of mySet.values()) console.log(item)

let isSet=[1,2,3,1,3,5,'Hi',5,3,7,9,11]
let itsSet=new Set(isSet)
console.log(itsSet);

let copyIsSet=Array.from(isSet)
console.log(copyIsSet);
console.log(copyIsSet[2]);

// Most important array methods
// students.find
// students.filter
// students.forEach
// students.map
// students.push
// students.pop
// students.splice
