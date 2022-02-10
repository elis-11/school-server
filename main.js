console.log(2 + 7);
//--TRY...CATCH --5:13
const fnwithError=()=>{
    throw new Error('Some Error')
}
try{
    fnwithError()
} catch (error) {
    console.error(error)
    console.log(error.message);
}
console.log('Continue');
console.log('Hey');
//--5:30
function newFn(j){
    console.log(j);
}
// const b=true
const b=8
let k=10

newFn(2+3)
newFn(b)
newFn(k=k+1)
//--5:33
const myArray=[1,2,3]
console.log(myArray);
const myArray2=new Array(1,2,3)
console.log(myArray2);
myArray===myArray2