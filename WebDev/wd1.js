let isSet=[1,2,3,1,3,5,'Hi',5,3,7,9,11]
let itsSet=new Set(isSet)
console.log(itsSet);

// Most important array methods
// students.find
// students.filter
// students.forEach
// students.map
// students.push
// students.pop
// students.splice

console.log('---------');
const arrs1=[1,4,6,3]
const map1= arrs1.map(arr1=>arr1*2)
console.log(map1);
console.log('---------');
const arrs2=[1,4,9,16]
const sqrt2=arrs2.map(arr2=>Math.sqrt(arr2))
console.log(arrs2);
console.log(sqrt2);
console.log('---------');
const kvArray = [{ key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }];
const reformattedArray = kvArray.map(({ key, value}) => ({ [key]: value }));
console.log(kvArray);
console.log(reformattedArray);
console.log('---------');