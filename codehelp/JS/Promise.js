// let firstPromise = new Promise((resolve, reject)=>{
//   console.log('Hello');
//   reject(Error("Fuck"));
// });
// firstPromise;

let firstPromise = new Promise((resolve, reject)=>{
  setTimeout(function sayName(){
    console.log("My Name is King");
  },1000);
  resolve(1);
});
firstPromise;

let promise1 = new Promise((resolve,reject)=>{
  let success = false;
  if (success){
    resolve("Promise fulfilled");
  }
  else
    reject("Promise rejected");
});
promise1.then((message)=>{
  console.log("The massage is "+message);
}).catch((error)=>{
  console.log("Error"+error);
})
