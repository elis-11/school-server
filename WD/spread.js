const a=[3,4,5]
const b=['c', 'd', 'e']

// merge
const c=[...a,...b]
console.log(c);
const d=[...c,...a]
console.log(d);

//clone
const e=[...b]
console.log(e);

// string -> array
const s=[...'hello']
console.log(s);

// set -> array
const f=[...new Set([1,1,2,3,4,2])]
console.log(f);

function test(){
  console.log([...arguments]);
}
test(3,4,5,6,7,8)
 
// node list
// querySelectorAll()
let p= document.querySelectorAll('p')
console.dir(p)
console.log([...p]);








