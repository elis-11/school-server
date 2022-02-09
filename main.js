console.log(2 + 7);
const fnWithError = () => {
  throw new Error("some error");
};
fnWithError();
console.log("Continue...");
