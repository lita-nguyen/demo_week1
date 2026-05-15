console.log("1. Start");

const myPromise = new Promise((resolve, reject) => {
  console.log("2. Promise");

  setTimeout(() => {
    resolve("4. Done");
  }, 2000);
});

//Dang ky hanh dong se lam khi Promise hoan thanh
myPromise.then((message) => {
  console.log(message);
});

console.log("3. End");
