console.log(2 + 7);
//--TRY...CATCH --5:13
const fnWithError = () => { 
  throw new Error("some error");
}
try{
    fnWithError()
 } catch (error) {
        console.error(error);
        console.log(error.message);
    }
console.log("Continue...");
