//write a function that finishes at a random time

function asyncFunction(str) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(str);
    }, (Math.floor(Math.random() * 3000) + 500));
  });

  // setTimeout(() => {
  //   console.log(str);
  //   return str;
  // }, (Math.floor(Math.random() * 3000) + 500));
}

let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("feets");
  }, (Math.floor(Math.random() * 3000) + 500));
});

let fakeData = ["styrofoam", "paper", "phone", "keyboard", "macintosh", "woohoo", "quotes", "poo"];

let promises = [];


fakeData.forEach((item) => {
  promises.push(asyncFunction(item));
});

// setTimeout(() => {
//   console.log(promises);
// }, 7000);


Promise.all(promises).then((values) => {
  console.log("all done!");
  console.log(values);
});

// promise1.then(res => {
//   console.log(res);
// });


// let finishedArray = fakeData.map(elem => {
//   asyncFunction(elem);
// });