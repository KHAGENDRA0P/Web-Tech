//sync code
let firstPromise = new Promise((resolve, reject) => {
    // console.log("KHAGENDRA");
    // resolve(1001);
    // reject(new Error("Something went wrong"));
    setTimeout(function sayName(){
        console.log("MY NAME IS KHAGENDRA");
    }, 15000);
    resolve(1);
});

//async code
// function sayName(){
//     console.log("MY NAME IS KHAGENDRA");
// }
// setTimeout(function sayName(){
//     console.log("MY NAME IS KHAGENDRA");
// }, 10000);

let promise1 = new Promise((resolve, reject) => { 
    let success = false;
    if (success) {
        resolve("Promise resolved");
    }
    else
        reject("Promise rejected");
});

// promise1.then((message) => {
//     console.log("Then ka Message is " + message);
// }).catch((error) => {
//     console.log("Error is " + error);
// })

//chaining promises
promise1.then((message) => {
    console.log("1st msg -" + message);
    return "Promise fulfilled 2nd msg";
}).then((message) => {
    console.log("2nd msg -" + message);
    return "Promise fulfilled 3rd msg";
}).then((message) => {
    console.log("3rd msg -" + message);
}).catch((error) => {
    console.log("Error is " + error);
}).finally((message) => {
    console.log("Finally block Always run");
});

//multiple promises

let promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "First");
});
let promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "Second");
});
let promise4 = new Promise((resolve, reject) => {
    setTimeout(reject, 1000, "Third");
});

Promise.all([promise2, promise3, promise4]).then((values) => {
    console.log(values);
})
    .catch((error) => {
        console.log("Error:"+error);
    });